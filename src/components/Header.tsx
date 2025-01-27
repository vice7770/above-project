import React from 'react';
import reactLogo from '../assets/react.svg';
const Header = () => {
    return (
        <header className="flex w-screen justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex gap-4">
                <h1 className="m-0">My TV Series App</h1>
                <img src={reactLogo} className="p-0" alt="React logo" />
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-400 rounded cursor-pointer">TV Series</button>
                <button className="px-4 py-2 bg-blue-400 rounded cursor-pointer">Add Episode</button>
            </div>
        </header>
    );
};

export default Header;
