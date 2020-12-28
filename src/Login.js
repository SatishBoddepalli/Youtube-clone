import React from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'

function LogIn() {

    const {register,handleSubmit,errors}=useForm({
        mode:"onBlur"
    })

    function onSubmit(e){
        console.log(e)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label form="email">E-mail</label>
                <input type="email" name="email" ref={register({
                    required:"E-mail is required",
                    message:"Please enter valid E-mail"
                })}/>
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <label form="password">Password</label>
                <input type="password" name="password" ref={register({
                    required:"Enter a password",
                    minLength:{
                        value:8,
                        message:"Password must contain 8 characters"
                    }
                })} />
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <button>Sign In</button>
            </form>
            
        </div>
    )
}

export default LogIn
