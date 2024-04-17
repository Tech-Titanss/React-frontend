import { FormControl, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AnswerForm = () => {

    const [survey, setSurvey] = useState([]);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const [answers, setAnswers] = useState({});

    const handleInputChange = (e) => {

        setAnswers({...answers, [e.target.name]: e.target.value});

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(answers)

        try {

            const response = fetch(`http://localhost:8080/saveanswers`, {
                
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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
        <>
            <h1>{survey.name}</h1>
            <h1>{survey.description}</h1>

            {loading ? <p>Loading</p> : (

                <form onSubmit={handleSubmit}>

                    {survey.questions.map((question, index) => {

                        return (<label key={index}>{question.questionText}<input type='text' onChange={handleInputChange} name={`${question.id}`}/></label>)

                    })}

                    <button type='submit'>submit</button>

                </form>

            )}

        </>
    )
}

export default AnswerForm