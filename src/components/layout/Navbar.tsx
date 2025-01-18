import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold ml-2">Task Master</h1>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;