import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import igoPic from '../../assets/Images/login.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelLog = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
        }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${igoPic})` }}>
                <div className="hero-overlay bg-opacity-60"></div>


                <form onSubmit={handelLog} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                    <div className="card-body bg-center" style={{ backgroundImage: `url(${igoPic})` }}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password"name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                            {/* <div>{error}</div> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Login;