import React from "react";
import creative from "../images/shit.gif";
import ArrowDown from "../images/arrowDown.svg";

const Landing = () => {
	return (
		<div className="h-[90vh] flex flex-col justify-center items-center text-4xl lg:text-9xl  text-gray-alpha2 text-center">            
			<p className=" font-geistRegular tracking-tighter">i love doing</p>
			<div className="flex items-center">
                <p className="font-geistRegular tracking-tighter">creative </p>
                <div className="relative">
                    <img src={creative} alt="" className="lg:w-[432px] w-[200px] md:ml-[-27px] ml-[-18px] mt-0 md:mt-[21px]"/>
                </div>
            </div>
            <img src={ArrowDown} alt="Arrow Down" className="rotate-[45deg] mt-12"/>
		</div>
	);
};

export default Landing;
