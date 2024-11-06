import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import NoteService from './services/NoteService';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await NoteService.getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (newNote) => {
    try {
      const savedNote = await NoteService.addNote(newNote);
      setNotes([...notes, savedNote]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const updateNote = async (updatedNote) => {
    try {
      const savedNote = await NoteService.updateNote(updatedNote);
      setNotes(notes.map(note => note._id === savedNote._id ? savedNote : note));
      setCurrentNote(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await NoteService.deleteNote(id);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">✍️ Notes App</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <NoteForm onAddNote={addNote} onUpdateNote={updateNote} currentNote={currentNote} />
        </div>
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map(note => (
              <Note 
                key={note._id} 
                note={note} 
                onDelete={deleteNote}
                onEdit={() => setCurrentNote(note)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
