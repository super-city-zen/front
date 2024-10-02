import { useEffect } from "react";
import Item from "./Item";

const Card = ({ textColor, background,borderColor, width, height, title, items }) => {

    return (
        <>
            <div className={width + height + ' rounded-md shadow shadow-dark-grey my-4 overflow-hidden'}>
                <div className={"h-14 w-full flex items-center border border-b-8 rounded-t-md "+ borderColor}>
                    <h3 className={textColor + ' font-bold mx-2'}>{title}</h3>
                </div>
                
                {items.length === 0 ? (
                    <>
                        <div>
                            <h1>Vide</h1>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center h-[80%] overflow-y-scroll">
                        {items.map((item) => (
                            <Item key={item.title} item={item} background={background}/>
                        ))}
                    </div>

                )}
            </div>
        </>
    )
}

export default Card; 