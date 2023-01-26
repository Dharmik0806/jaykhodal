import React from 'react';

function User(props) {
    return (
        <>

            <div className='form-container' id='sign1' >
                <div className='top'>
                    <h2>Create a new account</h2>
                </div>

                <div className='middle'>
                    <div className='form-div'>
                        <div>
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                        <div>
                            <input type="text" id="sername" placeholder="sername" />
                        </div>
                    </div>

                    <div>
                        <input type="email" id="email" placeholder='E-Mail' />
                    </div>

                    <div>
                        <input type="password" id="password" placeholder='Password' />
                    </div>

                    <div>
                        <input type="date" id="date" placeholder='Date' />
                    </div>

                    <div>Zender :
                        <label for="gender">Male
                            <input type="radio" name="gender" value="male" />
                        </label>
                        <label for="gender">Female
                            <input type="radio" name="gender" value="female" />
                        </label>
                        <label for="gender">Other
                            <input type="radio" name="gender" value="other" />
                        </label>
                    </div>

                    <div>
                        <label>Hobby :
                            <label for="singing">singing
                                <input type="checkbox" value="singing" id="singing" />
                            </label>
                            <label  for="hocky">Hocky
                                <input type="checkbox" value="hocky" id="hocky" />
                            </label>
                            <label  for="cricket">Cricket
                                <input type="checkbox" value="cricket" id="cricket" />
                            </label>
                        </label>
                    </div>


                    <p>People who use our service may have uploaded your contact information to Facebook. <a>Learn more.</a></p>
                    <p>By clicking Sign Up, you agree to our Terms , Privacy Policy and Cookie Policy . You may receive SMS notifications from us and you may opt-out to stop receiving them at any time.</p>

                    <div>
                        <input type="submit" value="Sign up" />
                    </div>
                </div>

                <div className='bottom'>

                </div>
            </div>
        </>
    );
}

export default User;