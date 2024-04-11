import { useState, useEffect } from "react";
import { Box, } from '@mui/material'
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
        <>
            <h1>Sivun nimi</h1>
            {
                surveys.map((survey, index) =>
                    <Box key={index} >
                        <SurveyCard survey={survey} />
                        < AnswerForm survey={surveys[0]} />
                    </Box>

                )

            }

        </>
    )
}

export default SurveyList

