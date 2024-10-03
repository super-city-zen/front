import React, {useRef, useState} from 'react';
import logo from "../assets/image/City-zen_logo.png"
import AboutMe from "../components/Log/AboutMe.jsx";
import FormLog from "../components/Log/FormLog.jsx";

const LogInPage = () => {

    const {userInput, userPassword} = {
        userInput : useRef(""),
        userPassword : useRef("")
    }

    function handleClick (e){
        e.preventDefault();
        const data = {
            login : userInput.current.value,
            password : userPassword.current.value
        }
        console.log(data)
    }


    return (
        <section className={"flex h-full pl-4 "}>
            <AboutMe />
            <FormLog title={"Log In"}>
                <form className={"w-7/12 flex flex-col items-end justify-end"} onSubmit={(e) => handleClick(e)}>
                    <fieldset className={"flex flex-col w-full gap-5 mt-8 mb-8"}>
                        <input type="text" ref={userInput} className="border-b-2 text-2xl outline-0 bg-white mt-6 mb-6"
                               placeholder={"Username"}/>
                        <input type="password" ref={userPassword}
                               className="border-b-2 text-2xl outline-0 bg-white mt-6 mb-6" placeholder={"Password"}/>
                        <cite>Identifiant ou mot de passe oublié ?</cite>
                    </fieldset>
                    <div
                        className={"flex items-center relative justify-center rounded-2xl bg-dark-blue text-white p-2 m-9 border w-1/3 hover:bottom-0.5 cursor-pointer active:top-0.5"}>
                        <button className={"text-2xl"}>Sign In</button>
                    </div>
                </form>
            </FormLog>

        </section>
    );
};

export default LogInPage;