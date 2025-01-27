import React from 'react';
import ReactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="flex w-full justify-between items-center p-4 bg-gray-800 text-white">
            <Link className='flex justify-center items-center gap-4 text-white' to="/">
                <h1 className="m-0">My TV Series App</h1>
                <ReactLogo/>
            </Link>
            <div className="flex gap-2">
                <Link to="/addEpisode">
                    <button className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer">Add Episode</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
