import React, {useEffect, useRef, useState} from 'react';
import data from "../assets/fakeApi/customerApi.json"
import Input from "../components/Input.jsx";

function ProfilsPage(props) {

    let dataSelect = "";
    const [modifs, setModifs] = useState(false)

    const [dataState, setDataState] = useState({
        firstname: "",
        lastname: "",
        img: "",
        email: "",
        adresse: "",
        role: "",
        createdAt: ""
    })

    function initialState(dataSelect) {
        setDataState({
            firstname: dataSelect.firstname,
            lastname: dataSelect.lastname,
            img: dataSelect.img,
            email: dataSelect.email,
            adresse: dataSelect.adresse,
            role: dataSelect.role,
            createdAt: dataSelect.createdAt
        })
    }

    function cancel() {
        initialState(data[0])
        setModifs(!modifs)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const dataUpload = {
            firstname : dataState.firstname,
            lastname : dataState.lastname,
            img : dataState.img,
            email : dataState.email,
            adresse : dataState.adresse,
            role : dataState.role,
            createdAt : dataState.createdAt,
        }
        console.log(dataUpload)
    }


    useEffect(() => {
        initialState(data[0]);
    }, []);


    return (
        <section className={"pl-4 h-full "}>
            <div className={"h-full bg-white"}>
                <header className={"flex text-blue justify-between items-center pl-8 pr-8 border-b-2 h-[5vh]"}>
                    <h2 className={"text-2xl font-bold"}>Bonjour, {dataState.firstname}</h2>
                </header>
                <form className={"p-16"}>
                    <div className={"flex justify-between items-center gap-2"}>
                        <figure className={"w-3/12"}>
                            <img className={"w-60 h-60 ml-16 border  border-blue rounded-full bottom-1"} src={dataState.img}
                                 alt="photo de profil"/>
                        </figure>
                        <fieldset className={"flex justify-between items-start w-8/12 gap-8 flex-col"}>
                            {(!modifs) ?
                                <>
                                    <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md "}>{dataState.lastname}</p>
                                    <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md "}>{dataState.firstname}</p>
                                    <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md "}>{dataState.adresse}</p>
                                </>
                                :
                                <>
                                    <Input title={"lastname"} type={"text"} value={dataState.lastname} isDiseabled={!modifs} change={(e)=> setDataState({...dataState, lastname : e.target.value})}/>
                                    <Input title={"firstname"} type={"text"} value={dataState.firstname} isDiseabled={!modifs} change={(e)=> setDataState({...dataState,firstname: e.target.value})}/>
                                    <Input title={"adresse"} type={"text"} value={dataState.email} isDiseabled={!modifs} change={(e)=> setDataState({...dataState,email: e.target.value})}/>
                                </>
                            }
                        </fieldset>


                    </div>
                    <fieldset className={"w-full flex items-center h-[20vh]"}>
                        {(!modifs) ?
                            <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md text-start"}>{dataState.adresse}</p>
                            :
                            <Input title={"lastname"} type={"text"} value={dataState.adresse} isDiseabled={!modifs} change={(e)=> setDataState({...dataState, adresse: e.target.value})}/>
                        }

                    </fieldset>
                    <fieldset className={"flex gap-32"}>
                        {(!modifs) ?
                            <>
                                <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md text-start"}>{dataState.role}</p>
                                <p className={"text-3xl bg-white w-full border p-2 border-blue rounded-md text-start"}>{dataState.createdAt}</p>
                            </>
                            :
                            <>
                                <Input title={"lastname"} type={"text"} value={dataState.role} isDiseabled={!modifs} change={(e)=> setDataState({...dataState, role: e.target.value})}/>
                                <Input title={"lastname"} type={"date"} value={dataState.createdAt} isDiseabled={!modifs} change={(e)=> setDataState({...dataState, createdAt: e.target.value})}/>
                            </>
                        }
                    </fieldset>
                </form>
                <div className={"m-16"}>
                    {
                        (!modifs) ?
                            <button
                                className={"border p-4 pl-6 pr-6 rounded-md bg-blue text-white relative hover:bottom-1 active:top-1 "}
                                onClick={() => setModifs(!modifs)}>Modifier</button>
                            :
                            <div className={"flex gap-3"}>
                                <button className={"border p-4 pl-6 pr-6 rounded-md bg-[#16a34a] text-white relative hover:bottom-1 active:top-1"} onClick={(e) => handleSubmit(e)}>Update</button>
                                <button className={"border p-4 pl-6 pr-6 rounded-md bg-red text-white relative hover:bottom-1 active:top-1"} onClick={() => cancel()}>Cancel</button>
                            </div>
                    }
                </div>

            </div>

        </section>
    )
        ;
}

export default ProfilsPage;