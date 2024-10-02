import React, {useRef} from 'react';
import Input from "../components/Input.jsx";

const RegisterPage = () => {

    const {username, password, accessKey} = {
        username : useRef(""),
        password : useRef(""),
        accessKey : useRef("")
    }

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            accessKey : accessKey.current.value,
            password : accessKey.current.value,
            login : username.current.value,
        }
        console.log(data)
    }

    return (
        <section className={"flex h-full pl-4 "}>
            <section
                className={"w-5/12  shadow-2xl h-full flex items-center justify-center bg-[url('src/assets/image/tech-planet.jpg')] bg-no-repeat bg-cover bg-center "}>
            </section>
            <section className={" w-7/12 shadow-2xl  flex flex-col justify-center items-center bg-white h-full"}>
                <h3 className={"text-6xl"}>Register</h3>
                <form className={"w-7/12 flex flex-col items-end justify-end"} onSubmit={(e) => handleSubmit(e)}>
                    <fieldset className={"flex flex-col w-full gap-5 mt-8 mb-8"}>

                        <input type="text"
                               className="border-b-2 text-2xl outline-0 bg-white mt-6 mb-6"
                               ref={username}
                               required={true}
                               placeholder={"Username"}
                        />
                        <input type="password"
                               className="border-b-2 text-2xl outline-0 bg-white mt-6 mb-6"
                               ref={password}
                               required={true}
                               placeholder={"Password"}
                        />
                        <input type="text"
                               className="border-b-2 text-2xl outline-0 bg-white mt-6 mb-6"
                               ref={accessKey}
                               required={true}
                               placeholder={"Access key"}
                        />
                        <cite>Aucune Access key?</cite>
                    </fieldset>
                    <div
                        className={"flex items-center relative justify-center rounded-2xl bg-dark-blue text-white p-2 m-9 border w-1/3 hover:bottom-0.5 cursor-pointer active:top-0.5"}>
                        <button className={"text-2xl"}>Sign In</button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default RegisterPage;