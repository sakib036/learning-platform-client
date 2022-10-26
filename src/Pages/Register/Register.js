import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import regpic from '../../assets/Images/regpic.jpg'
import regpic2 from '../../assets/Images/education.jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');


    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL,
            }

            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));
        }

    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${regpic})` }}>
                <div className="hero-overlay bg-opacity-60"></div>


                <form onSubmit={handelRegister} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                    <div className="card-body bg-cover" style={{ backgroundImage: `url(${regpic2})` }}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" />
                        </div>
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

                            <div className="text-danger">
                                {error}
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>

                            <label className="form-control mt-6">
                                <h1 className='font-bold'>Already Have Account Please <Link to="/login" className='border-2 border-amber-500 px-2 rounded-xl text-white bg-blue-800'>LOG-IN</Link></h1>

                            </label>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;