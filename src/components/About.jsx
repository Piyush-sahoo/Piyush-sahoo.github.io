import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           */}
           <p className="text-4xl font-bold inline border-b-4 border-gray-500 transition duration-300 ease-in-out hover:border-gray-600">
            About
          </p>
        </div>

        

            

            <p className="text-xl mt-20">
            Hello! I'm a Computer Science Engineering student at PES deeply involved in technology, with a keen focus on web development and intricate data structures. As a dedicated web developer, I excel in solving complex challenges through logical reasoning and effective time management. Looking ahead, I'm enthusiastic about exploring Artificial Intelligence and Machine Learning (AIML) and venturing into Android development. I actively seek mentorship to gain insights into these domains and the industry's work culture, recognizing its importance in my professional growth.
            </p>

            <br />

            <p className="text-xl">
            Beyond technology, I leverage my SEO expertise to optimize online content and maintain a healthy lifestyle as a fitness enthusiast. Join me on this journey where I balance coding with creativity, striving for excellence in both the virtual and physical realms.
            </p>
        
        </div>
    </div >
  );
};

export default About;
