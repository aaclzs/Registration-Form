import React from "react";
import ekonek_w from "../../assets/ekonek_w.png";

function Header() {
    return (
        <header className="bg-black text-white p-2 w-full flex items-center">
            <img
                src={ekonek_w}
                alt="E-konek Logo"
                className="w-[200px] ml-20"
            />
            <h1 className="text-base font-bold mr-20 ml-auto">
                Employee Registration Form
            </h1>
        </header>
    );
}

export default Header;