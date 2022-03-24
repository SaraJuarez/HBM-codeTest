import React from "react";
import './switchButton.css';

function SwitchButton(props) {
    const { name, handleToggle, isOn } = props;

    return (
        <div className='switchButton-container'>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="switchButton-checkbox"
                id={name}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#8cb369' }}
                className='switchButton-label'
                htmlFor={name}
            >
                <span className={`switchButton-button`} />
            </label>
        </div>
    )
}

export default SwitchButton;