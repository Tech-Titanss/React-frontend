import { FormControl, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AnswerForm = () => {

    const [survey, setSurvey] = useState([]);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

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
            <h1>{survey.name}</h1>
            <h1>{survey.description}</h1>

            {loading ? <p>Loading</p> : (


                <div>

                    {survey.questions.map((question, index) => {

                        <div key={index}>

                            <p>{question.questionText}</p>

                        </div>


                    })}


                </div>

            )}

        </>
    )
}

export default AnswerForm