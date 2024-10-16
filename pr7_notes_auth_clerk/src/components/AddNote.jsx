import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-md mx-auto my-5 p-5 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Add a Note</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        id="title" 
                        name="title" 
                        value={note.title} 
                        onChange={onChange} 
                        minLength={5} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        id="description" 
                        name="description" 
                        value={note.description} 
                        onChange={onChange} 
                        minLength={5} 
                        required 
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="tag" className="block text-sm font-medium text-gray-700">Tag</label>
                    <input 
                        type="text" 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        id="tag" 
                        name="tag" 
                        value={note.tag} 
                        onChange={onChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" 
                    onClick={handleClick}
                >
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
