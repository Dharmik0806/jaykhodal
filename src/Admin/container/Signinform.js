
import { Button, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Label, Password } from '@mui/icons-material';

function Signinform(props) {

    const [btnColor, setBtncolor] = useState("secondary");
    const [hobby, setHobby] = useState([])

    const setName = (e) => {
        // alert(e.target.value)

        let data = hobby;
        data.push(e.target.value)

        // alert(data)
    }

    const getNumber = (e) => {
        // alert(e.target.value)
    }
    return (
        <div className='form-container'>
            <div className='form-flex'>
                <h2>Sign in form</h2> <br />

                <TextField label="Name" color='secondary' variant='outlined' type="text" /> <br />
                <TextField label="Password" color='secondary' variant='outlined' type="password" /> <br />
                <TextField label="Roll no" color='secondary' variant='outlined' type="number" onChange={getNumber} /> <br />

               <div>
               <p>Hobby</p>
                <Checkbox color='primary' value={"cricket"} checked onClick={(e) => { setName(e) }} />Cricket
                <Checkbox color='primary' value={"singing"} onClick={(e) => { setName(e) }} />Singing
                <Checkbox color='primary' value={"reading"} onClick={(e) => { setName(e) }} />Reading
                <Checkbox color='primary' value={"traveling"} disabled onClick={(e) => { setName(e) }} />Traveling
               </div>
               <br />

                <Button
                    variant="outlined"
                    color={btnColor}
                    endIcon={<DeleteIcon />}
                    onClick={() => setBtncolor("primary")}
                //  disabled
                // size="small"
                // startIcon={<DeleteIcon />}
                // variant="contained"
                > Outlined
                    {/* {<DeleteIcon />} */}
                </Button>
            </div>
        </div>
    );
}

export default Signinform;