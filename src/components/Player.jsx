import { useState } from "react";

export default function Player({initialName,symbol, isActive,onChangeName}){
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing,setIsEditing] = useState(false)
    function handleEditClick(){
        // setIsEditing(!isEditing);   react schedules this update, doesn't perform it immediately, leading to issues
        setIsEditing((currentValue)=>!currentValue)

        if(isEditing){
            onChangeName(symbol,playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let buttonText;
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type="text" onChange={handleChange} value={playerName} />;
        buttonText = 'Save';
    }else{
        buttonText = 'Edit';
    }
    return (
        <li className={isActive?"active":undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonText}</button>
        </li>
    )
}