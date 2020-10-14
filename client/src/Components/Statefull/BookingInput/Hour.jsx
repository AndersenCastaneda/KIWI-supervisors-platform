import React, { useState } from 'react';
import './Hour.css';


export default function Hour(props) {
    const { hour, value, onClick } = props;
    const [isSelected, setSelected] = useState("defaultBtn");


    function selection() {
        if (isSelected === "defaultBtn") {
            setSelected("selectedBtn");
        } else {
            setSelected("defaultBtn");
        }
        return value
    }

    return (
        <div>{
            <button className={isSelected} onClick={() => onClick(selection())}>
                {hour}
            </button>}
        </div>
    );
}
