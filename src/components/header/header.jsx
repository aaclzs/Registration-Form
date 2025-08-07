import React from "react";
import ekonek_w from "../../assets/ekonek_w.png";

const Header = () => {
    return (
        <header className="bg-blue-900 text-white p-2 w-full flex items-center justify-around">
            <img src={ekonek_w} alt="E-konek Logo" className="w-[200px]" />
            <h1 className="text-base font-bold">Employee Registration Form</h1>
        </header>
    );
}

export default Header;