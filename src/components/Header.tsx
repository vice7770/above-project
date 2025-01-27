import React from 'react';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="flex w-full justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex gap-4">
                <h1 className="m-0">My TV Series App</h1>
                <img src={reactLogo} className="p-0" alt="React logo" />
            </div>
            <div className="flex gap-2">
                <Link to="/">
                    <button className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer" >TV Series</button>
                </Link>
                <Link to="/addEpisode">
                    <button className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer">Add Episode</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
