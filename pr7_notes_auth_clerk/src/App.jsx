import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, ClerkProvider } from "@clerk/clerk-react";
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Navbar from './components/Navbar';

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (title, description, tag) => {
        const newNote = { id: Date.now(), title, description, tag };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const editNote = (id, title, description, tag) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, title, description, tag } : note
        );
        setNotes(updatedNotes);
    };

    return (
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <Router>
                <Navbar />
                <div style={{ padding: "20px" }}>
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <SignedIn>
                                        <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} addNote={addNote} />
                                    </SignedIn>
                                    <SignedOut>
                                        <RedirectToSignIn />
                                    </SignedOut>
                                </>
                            } 
                        />
                        <Route 
                            path="/add-note" 
                            element={
                                <>
                                    <SignedIn>
                                        <AddNote addNote={addNote} />
                                    </SignedIn>
                                    <SignedOut>
                                        <RedirectToSignIn />
                                    </SignedOut>
                                </>
                            } 
                        />
                    </Routes>
                </div>
            </Router>
        </ClerkProvider>
    );
};

export default App;