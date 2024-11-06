const API_URL = 'http://localhost:5000/api/notes';

const getNotes = async () => {
  const response = await fetch(`${API_URL}/fetchallnotes`);
  return await response.json();
};

const addNote = async (note) => {
  const response = await fetch(`${API_URL}/addnote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return await response.json();
};

const updateNote = async (note) => {
  const response = await fetch(`${API_URL}/updatenote/${note._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return await response.json();
};

const deleteNote = async (id) => {
  await fetch(`${API_URL}/deletenote/${id}`, { method: 'DELETE' });
};

export default { getNotes, addNote, updateNote, deleteNote };
