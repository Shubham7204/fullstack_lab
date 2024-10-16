import React, { useState } from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, deleteNote, editNote, addNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const handleAddNote = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            addNote(title, description, tag);
            setTitle('');
            setDescription('');
            setTag('');
        } else {
            alert('Title and Description are required!');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-2xl font-bold my-3">All Notes</h2>
            {notes.length === 0 ? (
                <p className="text-gray-500">No notes to display</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notes.map(note => (
                        <NoteItem 
                            key={note.id} 
                            note={note} 
                            deleteNote={deleteNote} 
                            editNote={editNote} 
                        />
                    ))}
                </div>
            )}

            <h3 className="text-xl font-semibold mt-8 mb-4">Add a New Note</h3>
            <div className="mb-3">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
            </div>
            <button 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" 
                onClick={handleAddNote}
            >
                Add Note
            </button>
        </div>
    );
};

export default NotesList;