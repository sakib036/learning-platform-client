import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import igoPic from '../../assets/Images/login.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, setLoading, providerLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const [error, setError] = useState('');

    const handleGoogleLogIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
               

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            

    }




    const handelLog = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

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


                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                    <div className="card-body bg-center" style={{ backgroundImage: `url(${igoPic})` }}>
                        <form onSubmit={handelLog} >
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <div className='text-red-500 bg-gray-800 rounded-xl'>{error}</div>
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover text-white">Forgot password?</Link>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div>

                                    <label className="form-control mt-6">
                                        <h1 className='font-bold text-white'>Have'n Account Please <Link to="/login" className='border-2 border-amber-200 px-2 rounded-xl  bg-amber-500'>REGISTER</Link> First</h1>

                                    </label>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleGoogleLogIn} className="btn btn-error my-2 mx-2">Log In With Google</button>

                                <button className="btn btn-error">Log In With GitHub</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;