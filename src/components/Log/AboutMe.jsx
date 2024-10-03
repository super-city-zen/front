import React from 'react';
import logo from "../../assets/image/City-zen_logo.png";

function AboutMe(props) {
    return (
        <section
            className={"w-5/12 shadow-2xl h-full flex flex-col items-center pt-56 justify-start bg-[url('src/assets/image/tech-planet.jpg')] from-black to-0% bg-no-repeat bg-cover bg-center  "}>
            <img className={" w-1/3  p-4"} src={logo} alt="icon image"/>
            <p className={"w-2/3 text-white text-2xl pt-12 text-center"}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium alias cum
                cumque debitis eaque eveniet fugiat in odio quisquam
                suscipit.
            </p>
        </section>
    );
}

export default AboutMe;