import React from 'react';

function FormLog({children, title}) {
    return (
        <section className={"w-7/12 shadow-2xl flex flex-col justify-center items-center bg-white h-full"}>
            <h3 className={"text-6xl"}>{title}</h3>
            {children}
        </section>
    );
}

export default FormLog;