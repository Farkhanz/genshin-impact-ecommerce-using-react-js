import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const Register = async(x) => {
        x.preventDefault();
        try {
            await axios.post('http://localhost:2000/users',{
                name:name,
                email:email,
                password:password,
                confirmpassword:confirmpassword
            })
            .then(() => {
                window.location = '/Login';
            });
        } catch (error) {
            if(error.response){
                console.log(error.response.data);
        }
    }
}

    return (
        <section className="hero is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className='column is-4-desktop'>
                            <form onSubmit={Register} className='box has-background-black-light'>
                                {/* <p className='has-text-centered'>{msg}</p> */}
                                <div className='field mt-5'>
                                    <label className='label'>Name</label>
                                    <div className='controls'>
                                        <input className="input" type="text" placeholder="Your username" value={name} onChange={(x) => setName(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Email</label>
                                    <div className='controls'>
                                        <input className="input" type="text" placeholder="Your Email" value={email} onChange={(x) => setEmail(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Address</label>
                                    <div className='controls'>
                                        <input className="input" type="text" placeholder="Your Email" value={address} onChange={(x) => setAddress(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Phone Number</label>
                                    <div className='controls'>
                                        <input className="input" type="text" placeholder="Your Email" value={phonenumber} onChange={(x) => setPhonenumber(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Password</label>
                                    <div className='controls'>
                                        <input className="input" type="password" placeholder="Password" value={password} onChange={(x) => setPassword(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Confirm Password</label>
                                    <div className='controls'>
                                        <input className="input" type="password" placeholder="Confirm password" value={confirmpassword} onChange={(x) => setConfirmpassword(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-success is-fullwidth'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register