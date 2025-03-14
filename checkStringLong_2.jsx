import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

/* 
1. Zadeklaruj status stringa do sprawdzenia, opoznienia 
2. Napisz funkcje sprawdzajaca na ile string jest odpowedniej dl  
3. Jesli string spelnia oczekiwania wyswietl odpowedni kompunikat
4. Napisz funkcje pobierajaca czas z pola tekstowego
*/

function DynamicDelayActionWithNumber(){

    const [specialNumer, setSpecialNumber] = useState(10);
    const [timeOfDur, setTimeOfDur] = useState(2500);

    function checkSpecificNumber(){
        setSpecialNumber("Keep waiting data is loaded");

        var theTask = setTimeout(() => {
            if(specialNumer % 2 === 0)
            {
                setSpecialNumber("The number is hot");
                
                
            }else{
                setSpecialNumber("Try one's again");
            }
            
        },timeOfDur);
       
    }

    const takeTheData = (arg) => {
        const receiveVal = parseInt(arg.target.value, 10);
        setTimeOfDur(isNaN(receiveVal) ? 0 : receiveVal);
    }

    return(
        <div>
            <p>The state Value : {specialNumer}</p>
            <label>
                <input type="text" value={timeOfDur} onChange={takeTheData}></input>
            </label>
            <button onClick={checkSpecificNumber}>Trigger The Action</button>
        </div>
    )
}


const execute = ReactDOM.createRoot(document.getElementById("root"));
execute.render(<DynamicDelayActionWithNumber/>);
