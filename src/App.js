import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Questions from './Components/Questions';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

function App() {
  const [QuestionArr, setQuestionArr] = useState([
    {
      Question: "What Language is React Based on?",
      Answer: "JavaScript",
      status: false
    },
    {
      Question: "What are the building blocks of React apps?",
      Answer: "Components",
      status: false
    },
    {
      Question: "What's the name of the syntax we use of describe a UI a React?",
      Answer: "JSX",
      status: false
    },
    {
      Question: "How to pass data from parent to child componenets?",
      Answer: "Props",
      status: false
    },
    {
      Question: "How to give components memory?",
      Answer: "State",
      status: false
    },
    {
      Question: "What do we call an input element that is completely synchronised with state?",
      Answer: "Input Field",
      status: false
    }
  ])
  return (
    <Container>
      {QuestionArr.map((ele, index) => (
        <Questions ele={ele} QuestionArr={QuestionArr} number={index} setQuestionArr={setQuestionArr}/>
      ))}
    </Container>
  );
}

export default App;
