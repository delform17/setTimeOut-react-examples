import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useRef } from 'react';

const referenceVal = 4;

function ReferenceCount_And_ValControl(){

    const txtStyles = {

        txtStyle : {
            fontSize: '14px',
            fontFamily : 'Courier',
            fontStyle : 'regular',
            color : 'white'
        }
    }

    const [initTextState, changeTextState] = useState('Inicjuj status');
    const [actualTextState, changeTS] = useState('Present value of Reference : ');
    const [goalTextState, changeGoalTS] = useState('');
   
    useEffect(() => {
        const clock = setTimeout(() => {
            //console.log('Inicjuj status');

        },2000);
    },[]);

    //Tworzenie referencji
    //Create reference
    const clockRef = useRef(1);
    const printTheMessage = (v) => {
        v.preventDefault();
        clockRef.current = clockRef.current * 2;
        //console.log(clockRef.current);
        changeGoalTS(clockRef.current);
        
        const x =  setTimeout(() => {
            //console.log('Present value of Reference : '+clockRef.current);
        },2000);

        if(clockRef.current > 6)
        {
            //let component = document.getElementById("textComponent");

            //console.log('We have  reached max value of referrence');
            changeGoalTS('We have  reached max value of referrence');
           
            clearTimeout(x);
            
        }
    }

   return(
        <div>
            <button onClick={printTheMessage}>Increase</button>
            <span id="textComponent" style={txtStyles.txtStyle}>{initTextState}</span><br></br>
            <span style={txtStyles.txtStyle}>{actualTextState+clockRef.current}</span>
            <p style={txtStyles.txtStyle}>{goalTextState}</p>
        </div>
    )
}

const execute = ReactDOM.createRoot(document.getElementById("root"));
execute.render(<ReferenceCount_And_ValControl/>);
