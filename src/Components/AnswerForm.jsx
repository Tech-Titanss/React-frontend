import { Paper, TextField, Typography, Container, Grid, Button, InputLabel, RadioGroup, Radio, FormControlLabel, Link, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { grey } from '@mui/material/colors'


const AnswerForm = () => {
    const navigate = useNavigate();
    const [survey, setSurvey] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [answers, setAnswers] = useState({});
    const handleInputChange = (e) => {


        setAnswers({ ...answers, [e.target.name]: e.target.value });

    }

    const handleSubmit = async (e) => {
        navigate('/')
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
        <Paper sx={{ backgroundColor: grey[50] }} elevation={3}>
            <Container>

                <Typography variant="h2">{survey.name}</Typography>
                <Typography variant="h4" sx={{ marginBottom: 2 }}>{survey.description}</Typography>

                {loading ? <p>Loading</p> : (

                    <form onSubmit={handleSubmit}>

                        {survey.questions.map((question, index) => {

                            if (question.type === "radio") {
                                {
                                    return (
                                        <>
                                            <Typography sx={{ marginTop: 2 }}>{question.questionText}</Typography>
                                            {question.options.map((option, index) => {

                                                return (
                                                    <>

                                                        <Grid key={index}>
                                                            <RadioGroup >
                                                                <FormControlLabel type='radio' control={<Radio />} name={`${question.id}`} value={`${option}`} label={option} onChange={handleInputChange} />
                                                            </RadioGroup>
                                                        </Grid>
                                                    </>
                                                )
                                            })
                                            }
                                        </>)
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
                        <Link to='/'>
                            <Button sx={{ marginTop: 5, marginBottom: 2 }} variant="contained" type='submit'>submit</Button>
                        </Link>
                    </form>

                )}

            </Container>
        </Paper>
    )
}

export default AnswerForm