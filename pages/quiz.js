import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import data from '../data.json'
import Widget from '../src/components/Widget'

export default function Quiz() {
    const router = useRouter()

    const questions = data.questions
    const totalQuestions = questions.length
    const [nextTimeout, setNextTimeout] = useState(null)
    const [rightQuestions, setRightQuestions] = useState(0)
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState(null) 
    const [answered, setAnswered] = useState(false)
    const [isAnswerRight, setIsAnswerRight] = useState(false)
    
    function checkAnswer(alternative) {
        const question = questions[index]
        return alternative == question.alternatives[question.answer]
    }

    function getAlternativeClass(alternative) {
        const question = questions[index]
        if (!answered)
            return alternative == selected ? "selected": ""
        
        if (isAnswerRight)
            return alternative == selected ? "selected-right" : ""
        
        if (alternative == selected)
            return "selected-wrong"
        else if (alternative == question.alternatives[question.answer])
            return "selected-right"
    }

    function handleNextQuestion() {
        if (index !== totalQuestions - 1) {
            setIndex(index + 1)
            setSelected(null)
            setAnswered(false)
            setIsAnswerRight(false)
        } else {
            router.push('results')
        }
    }

    function handleClickNext() {
        clearTimeout(nextTimeout)
        handleNextQuestion()
    }

    function handleAnswer(e) {
        const isAnswerCorrect = checkAnswer(selected)
        if (isAnswerRight) setRightQuestions(rightQuestions + 1)
        setAnswered(true)
        setIsAnswerRight(isAnswerCorrect)
        setNextTimeout(setTimeout(handleNextQuestion, 2000))
    }

    return (
        <Widget>
            <Widget.Header>
                <Link href="/">X</Link>
                <p>
                    Pergunta {index + 1} de {totalQuestions}
                </p>
            </Widget.Header>
            <img src={questions[index].image} />
            <Widget.Content>
                <h1>{questions[index].title}</h1>
                <p>{questions[index].description}</p>
                <Widget.List>
                {questions[index].alternatives.map(alternative => {
                    return (
                        <li 
                            key={alternative}
                            className={`alternative ${getAlternativeClass(alternative)}`}
                            onClick={() => !answered && setSelected(alternative)}
                        >
                            {alternative}
                        </li>
                    )
                })}
                </Widget.List>
                {!answered && <Widget.ConfirmButton disabled={!!!selected} onClick={handleAnswer}>CONFIRMAR</Widget.ConfirmButton>}
                {answered && <Widget.ResultButton onClick={handleClickNext} answerRight={isAnswerRight}>&gt;</Widget.ResultButton>}
            </Widget.Content>
        </Widget>
    )
}