import React, { useState } from 'react';

function Reactform(props) {

    const validEmail = RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validName = RegExp(
        "[a-zA-Z]+\\.?"
    )
    const validPhone = RegExp('/^[6-9]\d{9}$/gi')

    const [fname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMono] = useState("");
    const [gender, setGender] = useState("");
    const [hobby, setHobby] = useState("");
    const [sername, setSername] = useState("");


    const [nameErrore, setnameErrore] = useState("")
    const [emailErrore, setemailErrore] = useState("")
    const [phoneErrore, setphoneErrore] = useState("")
    const [zenderErrore, setzenderErrore] = useState("")
    const [hobbyErrore, sethobbyErrore] = useState("")
    const [sernameErrore, setsernameErrore] = useState("")

    const formValidation = () => {

        if (fname === "") {
            setnameErrore("Name is required");
        } else {
            if (!validName.test(fname)) {
                setnameErrore("Enter only letters");
            }
            else {
                setnameErrore("")
            }
        }

        // sername
        if (sername === "") {
            setsernameErrore("Sername is required");
        } else {
            if (!validName.test(sername)) {
                setsernameErrore("Enter only letters");
            }
            else {
                setsernameErrore("")
            }
        }

        // email

        if (email === "") {
            setemailErrore("E-mail is Required.");
        } else {

            if (!validEmail.test(email)) {
                setemailErrore("Invalide E-mail.");
            } else {
                setemailErrore("");
            }

        }


        // Phone
        if (phone === "") {
            setphoneErrore("Phone Number is Required.");
        } else {
            if (phone.length === 10) {
                setphoneErrore("")
                if (!validPhone.test(phone)) {
                    setphoneErrore("wrounge number");
                }
            } else {
                setphoneErrore("10 digit mobail no ")

                if (validName.test(phone)) {
                    setphoneErrore("Enter number in digit")
                }
            }

        }
        // alert(gender)
        // gender
        if (gender === "") {
            setzenderErrore("genderErr,Please Enter Gender.");
        } else {
            setzenderErrore("");
        }
        // alert(gender)

        // checkbox hobby               
        if (hobby === "") {
            sethobbyErrore("Hobby,Please Enter Gender.");
        } else {
            sethobbyErrore("");
        }

        // 
    }

    return (
        <div id="react-form" className='flex-box'>
            <form className='form-1 flex-box ' >
                <div className='head-title'>
                    <p className='head-title'>Contect Form</p>
                </div>

                <div className='flex-box form-box'>
                    {/* *Name : */}
                    {/* <span>Name : </span> */}
                    <div>
                        < input
                            type="text"
                            id="Fname"
                            placeholder="Name"
                            onChange={(a) => setName(a.target.value)}
                        />
                        <p className='errore'>{nameErrore}</p>
                    </div>

                    <div>
                        {/* *sername : */}
                        {/* <span>sername : </span> */}
                        < input
                            type="text"
                            id="sername"
                            placeholder="Sername"
                            onChange={(a) => setSername(a.target.value)}
                        />
                        <p className='errore'>{sernameErrore}</p>
                    </div>

                </div>

                <div className='form-box'>
                    {/* *email : */}
                    {/* <span>E-mail : </span> */}
                    <div>
                        < input
                            type="email"
                            id="email"
                            className='phone-feild'
                            placeholder="E-mail"
                            onChange={(a) => setEmail(a.target.value)}
                        />
                        <p className='errore'>{emailErrore}</p>
                    </div>
                </div>

                <div className='form-box'>
                    {/* *phone : */}
                    {/* <span>Phone No : </span> */}
                    < input
                        type="text"
                        id="phone"
                        placeholder="Phone No"
                        className='phone-feild'
                        onChange={(a) => setMono(a.target.value)}
                    />
                    <p className='errore'>{phoneErrore}</p>
                </div>

                {/*  */}
                <div className='form-box'>
                    {/* *zender : */}
                    <span>Zender : </span>
                    <div className='zender-feild '>
                        <label for="male" className='content'>Male
                            < input
                                type="radio"
                                id="male"
                                value="male"
                                name='zender'
                                onChange={(a) => setGender(a.target.value)}
                            />
                        </label>
                        {/* <p>{zenderErrore}</p> */}

                        <label for="female" className='content'>Female
                            < input
                                type="radio"
                                id="female"
                                value="female"
                                name='zender'
                                onChange={(a) => setGender(a.target.value)}
                            />
                        </label>
                        {/* <p>{zenderErrore}</p> */}

                        <label for="other" className='content'>Other
                            < input
                                type="radio"
                                id="other"
                                value="other"
                                name='zender'
                                onChange={(a) => setGender(a.target.value)}
                            />
                        </label>
                        <p className='errore'>{zenderErrore}</p>
                        {/* <p>{alert(gender)}</p> */}
                    </div>
                </div>

                <div className='form-box'>
                    <p>Hobby : </p>
                    <div>
                        {/* *Hobby : */}
                        <label for="cricket" className='content'>Cricket
                            < input
                                type="checkbox"
                                id="cricket"
                                value="cricket"
                                
                                onChange={(a) => setHobby(a.target.value)}
                            />
                        </label>

                        <label for="singing" className='content'>Singing
                            < input
                                type="checkbox"
                                id="singing"
                                value="singing"
                                onChange={(a) => setHobby(a.target.value)}
                            />
                        </label>

                        <label for="reading" className='content'>Reading
                            < input
                                type="checkbox"
                                id="reading"
                                value="reading"
                                onChange={(a) => setHobby(a.target.value)}
                            />
                        </label>

                    </div>
                    <p className='errore'>{hobbyErrore}</p>
                </div>

                <div className='form-box-btn'>
                    {/* function calling in function base component inreact js */}
                    <a type="button" onClick={formValidation} >Submit form</a>
                </div>

            </form>
        </div>
    );
}

export default Reactform;