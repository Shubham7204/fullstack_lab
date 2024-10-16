import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link className="text-xl font-bold text-gray-900" to="/">NotesApp</Link>
                    </div>
                    <div className="flex space-x-4">
                        <SignedIn>
                            <Link className="text-gray-900 hover:text-blue-500" to="/">Home</Link>
                            <Link className="text-gray-900 hover:text-blue-500" to="/">All Notes</Link>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" />
                        </SignedOut>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
