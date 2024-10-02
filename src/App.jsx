import {Outlet, useNavigate} from "react-router-dom"
import logo from "./assets/image/City-zen_logo.png"
import {SlArrowDown, SlArrowRight} from "react-icons/sl";
import data from "./assets/fakeApi/customerApi.json"
import {useState} from "react";
import {SlUser} from "react-icons/sl";

const App = () => {

    const navigate = useNavigate();

    const [toogleMenu, setToogleMenu] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const dataSelect = data[0]

    return (
        <>
            <header className={"border-b-[2px] "}>
                <nav className="flex justify-between h-[10vh]  pl-[166px] pr-[166px] items-center w-full bg-dark-blue">
                    <figure>
                        <img src={logo} alt="Image du profils" onClick={() => navigate("/")}/>
                    </figure>
                    {(isLogin) ?
                        <nav className={"flex w-60 items-center justify-between text-white"} onClick={() => navigate('/profils')}>
                            <hgroup className={"w-2/3"}>
                                <h3 className={"text-end truncate"}>{data[0].firstname}, {data[0].lastname}</h3>
                                <p className="text-end">{dataSelect.role.map((element, index)=> (index < dataSelect.role.length - 1)? element + ", ": element)}</p>
                            </hgroup>
                            <figure>
                                {(dataSelect.img != null && dataSelect.img != "")?
                                <img className={"w-16 h-16 rounded-full p-2 "} src={data[0].img} alt="profils utilisateur"/>
                                    :
                                    <SlUser className={"w-16 h-16 rounded-full  p-2 border "}/>
                                }
                            </figure>
                        </nav>
                        :
                        <nav>
                            <ul className={"flex items-center gap-5 text-lg text-white "}>
                                <li onClick={() => navigate("/log")}
                                    className={"cursor-pointer p-[4px] pl-[6px] pr-[6px] border-[2px] rounded-lg  hover:bg-blue"}>Se
                                    connecter
                                </li>
                                <li onClick={() => navigate("/register")}
                                    className={"cursor-pointer hover:underline hover:underline-offset-8"}>S'inscrire
                                </li>
                            </ul>
                        </nav>
                    }
                </nav>
                <nav className={"bg-white  pl-[166px] pr-[166px] w-full h-[2vh]"}>
                    <ul className={"flex gap-[20px]  w-full text-center text-grey"}>
                        <li className={"cursor-pointer hover:text-dark-grey max-w-[100px] w-full "}>Actualités</li>
                        <li className={"cursor-pointer hover:text-dark-grey max-w-[100px] w-full "}>Projets</li>
                        <li className={"cursor-pointer hover:text-dark-grey max-w-[100px] w-full"}>Discussions</li>
                        <li className={"cursor-pointer hover:text-dark-grey max-w-[100px] w-full flex gap-2 items-center relative"}
                            onClick={() => setToogleMenu(!toogleMenu)}>{(!toogleMenu) ?
                            <SlArrowRight/> : <SlArrowDown/>}Archives
                            {(!toogleMenu) ? null :
                                <ul className={"absolute bg-white text-center   shadow-md max-w-[100px] top-6 w-full  p-2"}>
                                    <li>Idées</li>
                                    <li>Project</li>
                                </ul>
                            }
                        </li>

                    </ul>
                </nav>
            </header>
            <main className={"w-full  flex flex-col justify-center p-[50px]   h-[88vh]  pl-[166px] pr-[166px]"}>
                <Outlet/>
            </main>
        </>
    )
}

export default App;