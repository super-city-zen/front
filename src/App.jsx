import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <>
        <header className=" bg-blue">
            <h1 className={"text-3xl"}>h</h1>
        </header>
         <Outlet />
        </>
    )
}

export default App;