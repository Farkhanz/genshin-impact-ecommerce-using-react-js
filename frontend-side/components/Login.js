import React from 'react'

const Login = () => {
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
                                        <input className="input" type="text" placeholder="Your username" />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Password</label>
                                    <div className='controls'>
                                        <input className="input" type="password" placeholder="*************" />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-success is-fullwidth'>Login</button>
                                </div>
                                <center>
                                    <h2>Or</h2>
                                </center>
                                <div className='field mt-3'>
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

export default Login