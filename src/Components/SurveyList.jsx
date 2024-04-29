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
                <Typography variant="h3" sx={{ marginBottom: 1 }}>Haaga-Helian kyselyt</Typography>  
                <img src={('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAvVBMVEX///+Dxmkeeb8AAAB0jLx8w2Dn5+dOTk7Y7NH29vbr6+u026b2+/X4+vx6w13m7fVeXl7V4vEAZrc8gsPc3NzJycmnp6dpaWk1NTW8vLyurq6c0YjY7s62wNxAh8UAYLV6qNSOsdjS0tJ8fHzq9Oam1ZS937FXdrFsvUpwodIAbLrl8+AEc7yPj49zwFKZut2bq8680OclJSY/Pz+ampoVFRVkuj6SzHzGzePM5sIASK2QocdFaqqtxuIAWLKGGAJWAAAEn0lEQVR4nO3YbVujOBQG4I5ZyQbFRqUEcHZVojtWG2cFqvv+/3/WntACSWed1V7WFq/n/hRJS/OQ5ACORgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCh3P3Y8zoOnZ6rLQ3utc7uj1qPXsfVU9dzc3C4pdG90vWnzr3XcXW233YcIcwWIMyu+rhhnD/O7oYe5uyobe9/gDD7CLMzro/2WzcrYbqe+6GEufvc88K4z2Z32x6lZ3xx2Xnwen77qeeFufr9l9bB552amfH53tJs76vX8+sPnS8D2TPjk70Owmxp3P/ppWG6m+bR8MMcPJ0tPV0PJEx03IvcMNFhb4cfNL0wD6c/t06PvTDuV4YS5na2tHc7/DCzrj0bfpjbgYf547zjz8yfXzp/eWHuPj3eLD1e71SYUdQb/e2G8Xo8h25t2yXjae/BW2ZfLzrT6P9PtAvG520Bm936e2balbbZP9se5Qs9X82mfcfJtkf5Qk6Y2UqY2cDDnNy2TrYWRoi1v+qFOe7fOi/H2wpTm7XTeGG8avxsmMDU4aIV62TNH45VtvxmoSZ+F+ch/cRaifwwrmfDxJUMlgNJdbjGb5IJa0ebscTvkhQmZ2ydE68ThqtNhwlN/V4zs/kwa6Iw3b3x0uuZdsf3zr2Ob8MIIdpnBKdp2/S45LS/FyZqv9iEidpjr5qg8ey048/MRd8xWw0TumHCTFWVKeyBIFMpN3HTGSQypW1e5zSomNo8ca74hNWRG0YUpj2HDSOSXNhjvOoKxYs4b8pjP6bTsxKGZ8WEFEkTRjKuVDq3RYkzqVQ5t4OapExqyQzjFLqaS60YD5wwetIo6iZMvThHtgwTSCkoZqUUZ2ajD4YxZx0bpk5okJNKCdukv7NS0byUKbVFVtowcU3XN0qYccL0Ejs9mqazkPO4DUNnK+wUB4oF3xnLG4Sp6rxhyrYAiFCzrinZiIrrYuSZDWNFImDaCaMWp8i1DVOliw/PcydMczKRsJX70FuHafdMXDVhMq1pjdgrGGWGmiWFUelyDE2YILHHmYqC2pDA7pnl2eyeoWlsjuu5ipwwca3tOss2HMarZqostTHchpFlSs2UjSLO4z5MQfuFhsoU7R67sIqVahaX87RsaCdMXjFljHzXMDltHCqhmsLQrqBmZJeZdmZGGJbR8YBmRoQBESthgpKLcMFZZiyN6WT5u4ZRzM5BaDcqT5smZ025aj5CZWoUy+b5J2SqK7Mr95l0scub9/M2TEwTScy7hjHN8jeMxtNs5kgzCkNVgPpoTigMBaViHaXPh5mwkk4ZyGapLsMIxilblr5rGBpkKktuBxKWrJKlsjNDCea0O+Z5ym2xZtTPpRum9p4ATMnKks1twm6Z0UWRVanLjYYJ63w5kMDeP+jyS2nConkYoGYtssUKmxhN9/SmmhVaymSU9y8MsWkLbqyb+779hG6OJRRTJPajuZK6COuNluZXEYuVP2wiW5TmuruhDNiEySyOi4Tx9V/pd0Zg6xivmIy3PZK3IOIsSZJi7RetXfPNP6kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA24F8U3Z/oJWAkUwAAAABJRU5ErkJggg==')} alt="hh-logo" 
                height={100} width={100}/>
          
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

