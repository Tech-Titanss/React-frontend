import { FormControl, TextField, Typography } from '@mui/material';

const AnswerForm = (props) => {


    return (
        <>
            <h1>{props.survey.name}</h1>
            {
                props.survey.questions.map((question, index) =>
                    <FormControl key={index}>
                        <Typography>{question.questionText} </Typography>
                        <TextField style={{ width: '600px' }}></TextField>
                    </FormControl>
                )
            }



        </>
    )
}

export default AnswerForm