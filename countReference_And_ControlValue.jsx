import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useRef } from 'react';

 //Jesli wartosc referencji bedzie parzysta czysc referencje 
//Po kazdym kliknieciu podwajamy wartosc  referencji jesli  osiagnie pozadana 
//wartosc  czyscimy referencje 

const referenceVal = 4;

function ReferenceCount_And_ValControl(){

   
    useEffect(() => {
        const clock = setTimeout(() => {
            console.log('Inicjuj status');
        },2000);
    },[]);

    //Tworzenie referencji
    //Create reference
    const clockRef = useRef(1);
    const printTheMessage = (v) => {
        v.preventDefault();
        clockRef.current = clockRef.current * 2;
        console.log(clockRef.current);
        
        const x =  setTimeout(() => {
            console.log('Present value of Reference : '+clockRef.current);
        },2000);

        if(clockRef.current > 6)
        {
            console.log('We have  reached max value of referrence');
           
            clearTimeout(x);
            
        }
    }

   return(
        <div>
            <button onClick={printTheMessage}>Increase</button>

        </div>
    )
}

const execute = ReactDOM.createRoot(document.getElementById("root"));
execute.render(<ReferenceCount_And_ValControl/>);
