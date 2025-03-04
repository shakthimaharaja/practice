import React, { useState } from 'react';
import { Timer } from './Timer';

export function RenderButton(props){
            const [ButtonName,setButtonName]=useState();
            const handleClick=(e)=>{
                return (
                    setButtonName(e.target.innerText)
                    
                )
            }
            
            console.log('ButtonPage',ButtonName)
    return (
    <>
        <button onClick={handleClick} >{props.name}</button>
        <Timer buttonName={ButtonName} />
    </>
    )
}
