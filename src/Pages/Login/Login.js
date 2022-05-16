import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    toast.error('Password is Wrong!', { id: "signup" })
                    break;
                case "auth/too-many-requests":
                    toast.error('Too Many Requests!', { id: "signup" })
                    break;
                case "auth/user-not-found":
                    toast.error('User Not Available, Please Sign Up!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "login" })
                    break;
            }
        }
    }, [error])

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success("Login Successfull!", { id: "signin" })
        }
    }, [user, navigate, from])

    if (loading) {
        return <Loader></Loader>;
    }
    const onSubmit = data => {
        // console.log(data.email, data.password);
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='mt-[64px] py-16  '>
            <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className='rounded-md w-4/12 mx-auto py-14'>
                <h3 className="text-4xl font-bold pb-5 text-center">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-9/12 mx-auto">


                    <input className='input input-bordered input-md my-0.5' placeholder='Email'{...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Password' type="password" {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>

                    <input className='bg-accent border border-accent hover:bg-white hover:text-gray-700 transition-all cursor-pointer rounded-md py-3 text-gray-300' value={"SIGN UP"} type="submit" />
                </form>
                <div className='w-9/12 mx-auto'>
                    <small className='mt-4 mx-2 inline-block'>New to Doctors Portal ? <Link className='text-secondary font-semibold' to={"/signUp"}>Create new Account</Link></small>
                    <div class="divider">OR</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;