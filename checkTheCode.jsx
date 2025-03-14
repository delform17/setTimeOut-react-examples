import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

/* 
1. Pobierz liczbe od usera 
2. Sprawdz zgodnosc wybranej liczby ze statusem 
3. Jesli zgodnosc jest zaistniala wyswietl komunikat 
4. Jesli nie ma zgodnosci nalicz licznik prob
5. W przypadku wykonania 3 blednych prob blokuj element 
6. Przycisk Refresh odswierzajacy status
*/

let numberField = null;
let numberValue = '';

function TryToFindRightNumber(){

    const [theNumberObj, setTheNumberObj] = useState('');

function getNumber(){

        numberField = document.getElementById("number_field");
        numberValue = numberField.value;
        setTheNumberObj(numberValue);
    }

  useEffect(() => {
        const makeInstructions = setTimeout(() => {
            
            if(theNumberObj > 0)
            {
                console.log(theNumberObj);
                
            }
        }, 2000);

        //return () => clearTimeout(makeInstructions);
    }, [theNumberObj]);

    //UWAGA : Czyszczene setTimeOut czysci dane 

    return(
        <div>
            <h2>Try find right number</h2>
            <input type="text"  id="number_field"></input>
            <button onClick={getNumber}>Search</button>
            <p>{theNumberObj}</p>
        </div>
    )
}

const execute = ReactDOM.createRoot(document.getElementById("root"));
execute.render(<TryToFindRightNumber/>);
