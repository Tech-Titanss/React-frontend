import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";


const AnswerList = () => {

    const [survey, setSurvey] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        console.log(id)


        const fetchSurveys = async (id) => {

            try {
                const response = await fetch(`http://localhost:8080/survey/${id}`);
                const data = await response.json();
                setSurvey(data);
                setLoading(false);
            }
            catch (error) {

                console.error(error);
            }
        }

        fetchSurveys(id);

    }, [])

    return (
        <>
            <Typography>Jotain</Typography>
            {
                loading ? <p>Loading</p> : (
                    <>
                        {
                            survey.questions.map((question, index) => {
                                return (
                                    <div key={index}>
                                        <Typography>{question.questionText}</Typography>
                                        {
                                            question.answer.map((answer, index) => {
                                                <Typography key={index}>{answer.answer}</Typography>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
                )
            }

        </>
    )
}

export default AnswerList