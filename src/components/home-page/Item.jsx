import { useState } from "react";

const Item = ({ item, background }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false)
    }
    return (
        <>
            <div className="w-[95%] relative shadow mx-1 my-2 rounded-md shadow-dark-grey">
                {hover && item.title.length > 50 && (<>
                    <div className="absolute top-[-50px] bg-white rounded-md shadow shadow-dark-grey z-50">
                        <span>{item.title}</span>
                    </div>
                </>)}
                <div onMouseEnter={onHover} onMouseLeave={onLeave} className={'w-full flex items-center h-8 rounded-t-md ' + background}>
                    <h1 className="font-bold text-white items-center mx-3" >
                        {item.title.length > 50 ? (
                            <>
                                {item.title.substring(0, 50)}...
                            </>) : (
                            <>
                                {item.title}
                            </>)}
                    </h1>

                </div>
                <div className="mx-4 my-6">
                    <p>{item.message}</p>
                </div>
            </div>
        </>
    )
}

export default Item;