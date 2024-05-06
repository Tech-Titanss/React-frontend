import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Typography, Container, Paper, Button, Grid, Divider } from "@mui/material";

const QuestionAnswers = () => {

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState([])
    const { id } = useParams();

    useEffect(() => {

        console.log(id)

        const fetchQuestion = async (id) => {

            try {
                const response = await fetch(`http://localhost:8080/question/${id}`);
                const data = await response.json();
                setQuestion(data);
                setLoading(false);

            }
            catch (error) {
                console.error(error);
            }
        }

        fetchQuestion(id);
        console.log(question)
    }, [])


    return (
        <>
            <h1>Moi</h1>

        </>
    )
}

export default QuestionAnswers