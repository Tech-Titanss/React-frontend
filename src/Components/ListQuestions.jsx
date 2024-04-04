import React from "react";

const ListQuestions = () => {
  const [questions, setQuestions] = React.useState();

  async function fetchQuestions() {
    const response = await fetch("localhost:8080/api/kyselies");
    const data = await response.json();
    setQuestions(data);
  }

  React.useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      {data.map((question, index) => (
        <div key={index}>
          <div>{question.nimi}</div>
        </div>
      ))}
    </div>
  );
};

export default ListQuestions;
