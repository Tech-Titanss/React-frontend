import { Card, CardHeader, Button, Link } from '@mui/material'
import { grey } from '@mui/material/colors';

const SurveyCard = (props) => {
    return (
        <>
            <Card style={{ width: 600, height: 150, backgroundColor: grey[100], marginBottom: 20 }}>
                <CardHeader title={props.survey.name} subheader={props.survey.description} />
                <Button component={Link} to={`/answerform/${props.survey.id}`} variant="contained">Avaa</Button>
            </Card>
        </>
    )
}

export default SurveyCard

