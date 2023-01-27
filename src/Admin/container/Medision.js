import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { Checkbox, Chip, Divider, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Medision(props) {
    const [did , setDid] =useState();
    // dialog
    const [dopen, setDOpen] = React.useState(false);

    const handleDClickOpen = () => {
        setDOpen(true);
    };

    const handleDClose = () => {
        setDOpen(false);
    };
    // **


    const [MedData, setMedData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setMedData(localData)
        }
    }, [])

    const hendelDelet = () => {
        // console.log(rData);
        let localData = JSON.parse(localStorage.getItem("medicine"));

        let dData = localData.filter((l) => l.id !== did);

        localStorage.setItem("medicine", JSON.stringify(dData));
        setMedData(dData)

        handleDClose();
        setDid();

    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Mname', headerName: 'First name', width: 130 },
        { field: 'qua', headerName: 'qua', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => {
                return (
                    <>
                    {/* <IconButton aria-label="delete" onClick={() => { hendelDelet(params.row) }}> */}
                        {/* <IconButton aria-label="delete" onClick={() => {handleDClickOpen() , setDid(params.row.id) }}> */}
                         <IconButton  onClick={() => { setDid(params.row.id);  setDOpen(true)}} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </>
                )
            }

        }
    ];

    let schema = yup.object().shape({
        Mname: yup.string().required('please enter name'),
        qua: yup.number().required("please enter quantity").positive().integer(),
        price: yup.number().required("please enter Price").positive().integer()
    });



    const medicineData = (values) => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        // console.log(values);

        let idData = Math.round(Math.random() * 1000);
        let Mdata = { ...values, id: idData }


        if (localData !== null) {
            localData.push(Mdata)
            localStorage.setItem("medicine", JSON.stringify(localData))
            setMedData(localData)
        } else {
            setMedData(Mdata)
            localStorage.setItem("medicine", JSON.stringify([Mdata]))
        }
    }
    const formikobj = useFormik({
        initialValues: {
            Mname: '',
            qua: '',
            price: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            // console.log(values);
            medicineData(values)
            setOpen(false);
        },
    });


    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikobj
    console.log(errors, touched);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <h1>Medision component</h1>

            <div >
                <div>
                    <Button sx={{ variant: "outlined", border: "1px solid blue", left: "1100px" }} onClick={handleClickOpen}>
                        Add Medicine
                    </Button>
                </div>


                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>Add medicine</DialogTitle>
                    <Divider>
                        <Chip label="Add medicine" />
                    </Divider>
                    <DialogContent>
                        <Formik values={formikobj}>
                            <Form onSubmit={handleSubmit}>

                                <TextField
                                    margin="dense"
                                    id="Mname"
                                    label="Medision Name"
                                    type="text"
                                    name='Mname'
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('Mname'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.Mname !== '' && touched.Mname ? <p className='form-error'>{errors.Mname}</p> : null}


                                <TextField
                                    margin="dense"
                                    id="qua"
                                    label="Qua"
                                    type="number"
                                    name='qua'
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('qua'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.qua !== '' && touched.qua ? <p className='form-error'>{errors.qua}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="price"
                                    label="price"
                                    type="number"
                                    name='price'
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('price'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.price !== '' && touched.price ? <p className='form-error'>{errors.price}</p> : null}

                                <DialogActions>
                                    <Button
                                        onClick={handleClose}
                                    >Cancel</Button>
                                    <Button
                                        type="submit"
                                    >Add</Button>
                                </DialogActions>

                            </Form>
                        </Formik>
                    </DialogContent>


                </Dialog>
            </div>

            {/* dialog */}
            <Dialog
                open={dopen}
                onClose={handleDClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
               
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Add midicine
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={hendelDelet}>Disagree</Button>
                    <Button onClick={() => hendelDelet()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {/* **** */}


            <div style={{ height: 400, width: '50%', margin: '0px auto 0px auto' }}>
                <DataGrid
                    rows={MedData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </div >
    );
}

export default Medision;

{/* <IconButton aria-label="delete" onClick={() => { hendelDelet(params.row) }}> */}
