import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Typography, Container, Paper, Button, Grid, Divider } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import _ from 'lodash';

const QuestionAnswers = () => {

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState([])
    const [chartData, setChartData] = useState([])
    const { id } = useParams();

    const myData = [
        { value: 10, label: 'series A' },
        { value: 15, label: 'series B' },
        { value: 20, label: 'series C' },
    ];

    const fetchQuestion = async (id) => {

        try {
            const response = await fetch(`http://localhost:8080/question/${id}`);
            const data = await response.json();
            setQuestion(data);
            formatQuestionData(data);


        }
        catch (error) {
            console.error(error);
        }
    }

    const formatQuestionData = (questionData) => {

        const answerData = [];
        const answersGroupedByName = _.groupBy(questionData.answer, (answer) => answer.answer);
        const groupedAnswerArrays = Object.values(answersGroupedByName);

        groupedAnswerArrays.forEach((OptionObjects) => {

            const length = OptionObjects.length;
            answerData.push(

                {
                    value: length,
                    label: `${OptionObjects[0].answer}`
                }
            )
        })

        setChartData(answerData);
        setLoading(false);
    }

    useEffect(() => {

        console.log(id)

        fetchQuestion(id);

    }, [])

    console.log("question", question)

    return (
        <Paper>
            <Container>
                <Typography variant="h6">{question.questionText}</Typography>
                {
                    loading ? <p>Loading</p> : (
                        <>

                            {question.type === "radiobutton" &&


                                <PieChart
                                    series={[
                                        {
                                            data: chartData
                                        },
                                    ]}
                                    width={400}
                                    height={200}
                                />
                            }

                            {question.type !== "radiobutton" &&

                                <>

                                {
                                    question.answer.map((answer, index) => {
                                        return (
                                            <p key={index}>{answer.answer}</p>
                                        )
                                    })
                                }

                                </>

                            }



                        </>
                    )
                }
            </Container>
        </Paper>
    )
}

export default QuestionAnswers