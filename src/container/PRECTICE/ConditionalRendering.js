import React from 'react';
import { useState } from 'react';

function ConditionalRendering(props) {

    const [type, setType] = useState("signup");
    // const [reset, setReset] = useState(false);
    const [reset, setReset] = useState("0");
   
    const first= () => {
        console.log("hellow");
    }
    return (
        <>
            <div>

                <h1>h1</h1>
                <h1>h1</h1>
                <h1>h1</h1>

                <form>

                    {
                        type === "signup" ?
                            <h1>Sign Up</h1> : <h1>Signin</h1>
                    }

                    <div>
                        {type === "signup" ?
                            <input
                                type="text"
                                placeholder='Name'
                                onClick={{first}}
                            /> :
                            null
                        }
                    </div>

                    <div>
                       
                        <input
                            type="email"
                            placeholder='email'
                        />
                    </div>

                    <div>
                        {
                            type === "signup" ?
                            <input
                            type="date"
                            placeholder='Date'
                        /> : null 
                        }
                       
                    </div>

                    <div>
                        {
                            type === "signup" ?
                            <a href='#' onClick={() => { setType("login") }} >Login</a> :
                            <a href='#' onClick={() => { setType("signup") }} >signup</a> 

                        }
                    </div>

                </form>
            </div>
        </>
    );
}

export default ConditionalRendering;