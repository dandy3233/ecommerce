import React from "react";
// import log from '../Assets/log.png';

const Hero = () => {
    return (
        <div className="hero relative flex justify-between items-center bg-indigo-800 p-5 overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: `url('../assets/image.png')` }}></div>

            {/* Left section (shop title/content) */}
            <div className="shop-left relative z-10 text-white font-bold text-2xl md:text-4xl px-4 py-24">
                <p className="text-lg mb-2">New Arrivals Only</p>
                <h1 className="text-3xl md:text-5xl">
                    New 👋 <br/> Collections<br/> For Everyone
                </h1>
                <button className="shop-button mt-5 bg-red-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Latest Collection &#8594;
                </button>
            </div>

            {/* Right section (image) */}
            <div className="shop-right relative z-10 flex justify-end">
                <img src={log} alt="Collections" className="w-auto max-w-lg h-auto max-h-72 animate-float" />
            </div>
        </div>
    );
};

export default Hero;
