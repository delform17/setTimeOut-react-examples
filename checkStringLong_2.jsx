import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


function DynamicDelayActionWithNumber(){
	
    const differentStyles = {
        go : {
            border: '2px solid #3498db',
            borderRadius: '10px',
            backgroundColor: '#fff',
            color: '#3498db'
        },

        inputField : {
            outline: 'none',
            borderColor: '#ff97d3',
            boxShadow: 'inset #ffaadb 0 1px 4px'
            }
    }

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
	<body>
        <div>
            <p>The state Value : {specialNumer}</p>
            <label>
                <input type="text" value={timeOfDur} onChange={takeTheData} style={differentStyles.inputField}></input>
            </label>
            <button onClick={checkSpecificNumber} style={differentStyles.go}>Trigger The Action</button>
        </div>
	</body>
    )
}


const execute = ReactDOM.createRoot(document.getElementById("root"));
execute.render(<DynamicDelayActionWithNumber/>);
