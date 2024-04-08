import { useState, useEffect } from "react";

const ListQuestions = () => {

  const [surveys, setSurveys] = useState([]);

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
  
  }, []);

  return (
    <div>
      {surveys.map((survey, index) => (
        <div key={index}>
          <div>{survey.name}</div>
          <div>{survey.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ListQuestions;
