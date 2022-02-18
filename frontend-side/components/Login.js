import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Auth = async (x) => {
        x.preventDefault();
        try {
            await axios.post('http://localhost:2000/login', {
                email: email,
                password: password
            })
                .then(() => {
                    window.location = '/Dashboard';
                });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }
    return (
        <section class="hero is-fullheight is-fullwidth">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div className='column is-4-desktop'>
                            <form className='box has-background-black-light'>
                                <div className='field mt-5'>
                                    <label className='label'>Email or Username</label>
                                    <div className='controls'>
                                        <input className="input" type="text" placeholder="Your username" value={email} onChange={(x) => setEmail(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Password</label>
                                    <div className='controls'>
                                        <input className="input" type="password" placeholder="*************" value={password} onChange={(x) => setPassword(x.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-success is-fullwidth'>Login</button>
                                </div>
                                <center>
                                    <h2>Or</h2>
                                </center>
                                <div className='field mt-3'>
                                    <Link to="/Register" className='button is-success is-fullwidth'>Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login