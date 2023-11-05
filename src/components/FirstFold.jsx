import React from "react";
import Typed from "react-typed";
import Profile from "../images/me-1.png";
import YellowButton from "./utils/Buttons/YellowButton";
import WhiteButton from "./utils/Buttons/WhiteButton";
import Alt from "../images/alt.gif";
import Wave from "../images/waving.png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { Link } from "gatsby";

const FirstFold = () => {
	return (
		<div className="font-geistLight flex flex-col items-start my-44">
			<div className="flex mb-0">
				<div className="w-6/12 flex flex-col gap-4">
					<p className="text-white text-2xl flex items-center">
						<span>
							<img src={Wave} alt="" className="w-8 inline-block mr-4" />
						</span>
						Hello!
					</p>
					<h2 className="text-gray-alpha2 text-4xl">
						I’m <span className="text-rol-yellow">Rollen Fernandes</span>
					</h2>
					<p className="text-gray-alpha2 text-xl typed-bg">
						a{" "}
						<Typed
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
						A self-taught Graphic designer, functioning in the industry for 1+
						years now. I specialise in crafting designs that strike a harmonious
						balance between user requirements and the objectives of businesses.
					</p>
					{/* Socials */}
					<div className="flex items-center gap-6 my-4">
						<p className="text-white">Find Me On</p>
						<div className="flex gap-6">
							<Link to="https://www.youtube.com/@rollenplays">
								<div
									className="bg-[#191903] group hover:bg-gray-alpha w-[60px] h-[60px] rounded-full p-2 flex items-center justify-center transition-colors duration-300"
									style={{
										transition:
											"background-color 300ms ease-in-out, color 300ms ease-in-out",
									}}
								>
									<AiOutlineYoutube
										size={30}
										className="text-rol-yellow group-hover:text-[#fff]"
									/>
								</div>
							</Link>
							<Link to="https://www.instagram.com/rollen_fernandes/">
								<div
									className="bg-[#191903] group hover:bg-gray-alpha w-[60px] h-[60px] rounded-full p-2 flex items-center justify-center transition-colors duration-300"
									style={{
										transition:
											"background-color 300ms ease-in-out, color 300ms ease-in-out",
									}}
								>
									<AiOutlineInstagram
										size={30}
										className="text-rol-yellow group-hover:text-[#fff]"
									/>
								</div>
							</Link>
							<Link to="https://wa.link/7c2w66">
								<div
									className="bg-[#191903] group hover:bg-gray-alpha w-[60px] h-[60px] rounded-full p-2 flex items-center justify-center transition-colors duration-300"
									style={{
										transition:
											"background-color 300ms ease-in-out, color 300ms ease-in-out",
									}}
								>
									<FaWhatsapp
										size={30}
										className="text-rol-yellow group-hover:text-[#fff]"
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="flex gap-6">
						<YellowButton />
						<WhiteButton />
					</div>
				</div>
				<div className="bg-img-eclipse m-auto relative">
					<img src={Alt} alt="rollen" className="rounded-full w-[500px]" />
					<img
						src={Profile}
						alt="rollen"
						className="absolute top-[50%] left-[50%] -translate-x-[50%] right-0 -translate-y-[50%] grayscale rounded-full w-[200px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default FirstFold;
