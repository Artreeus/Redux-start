import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../ui/mode-toggle';

const Navbar = () => {
    return (
        <div>
            <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold ml-2">Task Master</h1>
                </div>
                <Link to="/" className="text-lg font-semibold">Tasks</Link>
                <Link to="/users" className="text-lg font-semibold">Users</Link>

                <div>
                    <ModeToggle></ModeToggle>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;