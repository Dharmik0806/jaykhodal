import React, { useState } from 'react';

function ReactForm22(props) {

    const [ndata , setNdata] = useState("")
    const [namearr , setNamearr] = useState("")

    const validationForm = () => {
        if(ndata === "") {
            setNamearr("name is required :");
        }else{
            setNamearr("");
        }
    }
    return (
        <div>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <input 
            type="text"
             name="fname" 
             id="fname" 
            onChange={(a) => setNdata(a.target.value)}
              />
              <span>{namearr}</span>

          {/* function calling in function base component inreact js */}
            <input type="submit" onClick={validationForm}/>
        </div>
        
    );
}

export default ReactForm22;