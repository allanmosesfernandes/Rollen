import React from "react";
import Typed from "react-typed";

const FirstFold = () => {
	return (
		<div className="font-geistLight mt-32 flex">
			<div className="w-6/12 flex flex-col gap-6">
        <p className="text-white text-2xl">Hello!</p>
        <h2 className="text-gray-alpha2 text-4xl">
          I’m <span className="text-rol-yellow">Rollen Fernandes</span>
        </h2>
        <p className="text-gray-alpha2 text-xl typed-bg">
          a <Typed
            strings={[
              "Creative Professional.",
              "Footballer.",
              "Afro beats specialist.",
                    "Champion napper.",
            ]}
            typeSpeed={50}
            backSpeed={50}
            attr="placeholder"
                  style={{ background: "transparent" }}
            loop
                  className="bg-transparent"
          >
            <input type="text" />
          </Typed>
        </p>
        <p className="text-gray-alpha2">
          A self-taught Graphic designer, functioning in the industry for 1+ years now.
          I specialise in crafting designs that strike a harmonious balance between user requirements and the objectives of businesses.
        </p>
      </div>
      <div className="bg-img-eclipse ml-auto">

      </div>
		</div>
	);
};

export default FirstFold;
