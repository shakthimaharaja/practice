import React, { useEffect, useState } from 'react';
import { RenderButton } from './Button';

export const Timer=(props)=>{
    const buttonName= props.buttonName;
    console.log('TimerPage',buttonName);
    const [timer,setTimer]=useState(300);
    console.log(timer)
    useEffect(()=>{
        if(!buttonName)return;
        else if(buttonName==='Start'){
        const interval = setInterval(()=>{
            setTimer((prevTime)=>prevTime-1) 
        },1000);
        return()=>clearInterval(interval)
        }
        else if(buttonName==='Stop'){
            setTimer(0)
        }
},[buttonName])
    return (
    <p>{timer}</p>  
    )
}