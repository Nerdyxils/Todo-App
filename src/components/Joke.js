import React from 'react'

function Joke(props) {
    return (
        <div className="Joke-Card">
            <h3 className="question" style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <p className="Joke-answer" style={{color: !props.question && "#888888"}}>Punchline: {props.punchline}</p>
            <hr/>
        </div>
    )
}

export default Joke
