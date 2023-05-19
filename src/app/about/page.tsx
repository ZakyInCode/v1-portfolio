import React from "react";

const About = () => {
  return (
    <div className="w-[80%] mx-auto pb-10 px-10 mt-10 font-mono border flex justify-between items-start">
      <div className="w-2/3 border space-y-5">
        <p className="text-5xl font-bold border">About Me</p>
        <div className="border">
          <p>
            My name is Ahmad Zaky Ubaidillah, but you can call me Zaky or Ubed.
          </p>
          <p>
            For over 2 years developing and programming interfaces with Next js,
            Tailwind css and Typescript.
          </p>
          <p>
            Graduated in System Analysis and Development from informatics
            engineering
          </p>
          <p>
            Interest in Front-end development with Next js, Tailwind css, and
            Typescript.
          </p>
          <p>Trying to be a little better than yesterday every day.</p>
        </div>
      </div>
      <div className="w-1/3 border h-full" />
    </div>
  );
};

export default About;
