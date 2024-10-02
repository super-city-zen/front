import React from 'react';

function Input({title, value, placeholder, type, isDiseabled, change}) {
    return (
        <input className={"border-2 rounded-md w-full p-2 text-2xl"} type={type} value={value} placeholder={placeholder} required={true} disabled={isDiseabled} onChange={(e)=>change(e)}/>
    );
}

export default Input;