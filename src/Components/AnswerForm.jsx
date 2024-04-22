import { FormControl, TextField, Typography, Container, Grid, Button, InputLabel, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AnswerForm = () => {

    const [survey, setSurvey] = useState([]);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const [answers, setAnswers] = useState({});

    const handleInputChange = (e) => {

        setAnswers({ ...answers, [e.target.name]: e.target.value });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(answers)

        try {

            const response = fetch(`http://localhost:8080/saveanswers`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers)

            });

            if (!response.ok) {

                throw new Error("Failed to save answers!");

            }

        }

        catch (error) {

            console.error(error);

        }

    }

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
        <Container>
            <Typography variant="h1">{survey.name}</Typography>
            <Typography variant="h3">{survey.description}</Typography>

            {loading ? <p>Loading</p> : (

                <form onSubmit={handleSubmit}>

                    {survey.questions.map((question, index) => {

                        if (question.type === "radio") {
                            {
                                return (

                                    question.options.map((option, index) => {

                                        return (
                                            <>
                                                <FormLabel>{question.questionText}</FormLabel>
                                                <Grid>
                                                    <RadioGroup key={index}>
                                                        <FormControlLabel type='radio' control={<Radio />} name={`${question.id}`} value={`${option}`} label={option} onChange={handleInputChange} />
                                                    </RadioGroup>
                                                </Grid>
                                            </>
                                        )
                                    })

                                )
                            }

                        }

                        else {
                            return (
                                <Grid style={{ display: "block" }} key={index}>
                                    <InputLabel>{question.questionText}</InputLabel>
                                    <TextField type='text' onChange={handleInputChange} name={`${question.id}`} sx={{ width: 600, marginBottom: 3 }} />
                                </Grid>
                            )
                        }
                    })}

                    <Button variant="contained" type='submit'>submit</Button>

                </form>

            )}

        </Container>
    )
}

export default AnswerForm