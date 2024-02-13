import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 27%;
    height: 230px;
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    text-align: center;
    border: 2px solid #cccbcb;
    border-radius: 5px;
    font-weight: 500;
    transition: 1s;
`
const Para = styled.p`
    /* transition: s; */
  `
const Questions = ({ ele, number, setQuestionArr, QuestionArr }) => {
  const checkAnswer = (questionstatus, number) => {
    ele.status = !questionstatus
    const Questions = [...QuestionArr]
    Questions[number].status = !questionstatus
    setQuestionArr(Questions)
  }
  return (
    <Container style={{
      backgroundColor: ele.status ? "red" : "#f6f6f6",
      color: ele.status ? "#fff" : "#000"
    }} onClick={() => checkAnswer(ele.status, number)}>
      <Para>
        {ele.status ? ele.Answer : ele.Question}
      </Para>
    </Container>
  )
}

export default Questions
