import React from 'react';
import './LearningOptions.css';

const LearningOptions = (props) =>{
    const options = [
        {
            text : "Javascript",
            handler : props.actionProvider.handleJavascriptList,
            id : 1,
        },
        { text: "Web Development", handler: () => {}, id: 1 },
        { text: "Marketing", handler: () => {}, id: 2},
        { text: "Content Writing", handler: () => {}, id: 3},
        { text: "Designing", handler: () => {}, id: 4},
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className = "learning-option-button"
            key = {option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
}

export default LearningOptions;