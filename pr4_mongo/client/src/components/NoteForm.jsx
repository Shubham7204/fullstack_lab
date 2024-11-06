import React, { useState, useEffect } from 'react';

function NoteForm({ onAddNote, onUpdateNote, currentNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('General');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
      setTag(currentNote.tag);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, description, tag };
    if (currentNote) {
      onUpdateNote({ ...note, _id: currentNote._id });
    } else {
      onAddNote(note);
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setTag('General');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Note Description"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag (Optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        {currentNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
}

export default NoteForm;
