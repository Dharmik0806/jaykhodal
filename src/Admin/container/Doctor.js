import { Button, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Label, Password } from '@mui/icons-material';

function Doctor(props) {


    return (

        <>
            <div>
                <h1>Doctore</h1>
            </div>

            <Button
                variant="outlined"
                color="primary"
                //  disabled
                // size="small"
                // startIcon={<DeleteIcon />}    
                // endIcon={<DeleteIcon />}
                // variant="contained"

            > Login
                {/* {<DeleteIcon />} */}

            </Button>
        </>

    )
}

export default Doctor;
