import { useState, useEffect } from "react";
import { Box, Container, TextField, Typography, AppBar } from '@mui/material'
import SurveyCard from "./SurveyCard";
import AnswerForm from "./AnswerForm";


const SurveyList = () => {

    const [surveys, setSurveys] = useState([])

    useEffect(() => {

        const fetchSurveys = async () => {

            try {
                const response = await fetch("http://localhost:8080/surveys");
                const data = await response.json();
                setSurveys(data);
            }
            catch (error) {

                console.error(error);
            }
        }
        fetchSurveys();
    }, [])

    return (

        <Container>
            <AppBar position="static" sx={{ backgroundColor: '#0079c2', marginBottom: 5, paddingTop: 2, textAlign: 'center' }}>
                <Typography variant="h2" sx={{ marginBottom: 5 }}>Haaga-Helian kyselyt</Typography>
            </AppBar>
            {
                surveys.map((survey, index) =>
                    <Box key={index} >
                        <SurveyCard survey={survey} />
                    </Box>

                )

            }
        </Container>

    )
}

export default SurveyList

