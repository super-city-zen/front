const Item = ({item, background})=>{
return (
    <>
        <div className="w-4/5 h-auto shadow mx-4 my-2 rounded-md shadow-dark-grey">
            <div className={'w-full flex items-center h-8 rounded-t-md '+background}>
                <h1 className="font-bold text-white items-center mx-3">{item.title}</h1>
            </div>
            <div className="mx-4 my-6">
                <p>{item.message}</p>
            </div>
        </div>
    </>
)
}

export default Item;