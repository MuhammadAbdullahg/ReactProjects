import { useEffect, useState } from "react";

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filterNote, setFilterNote] = useState("");
  const [error, setError] = useState("");

  const addNotes = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return setError("please fill fields");
    } else {
      setError(null);
      if (isEditing) {
        setNotes(
          notes.map((note) =>
            note.id === editId ? { ...note, title, description } : note,
          ),
        );
        setIsEditing(false);
        setEditId(null);
      } else {
        const newNote = {
          id: Date.now(),
          title,
          description,
        };
        setNotes((prev) => [...prev, newNote]);
      }
      setTitle("");
      setDescription("");
    }
  };

  const deleteNote = (id) => {
    const filterDelNotes = notes.filter((item) => item.id !== id);
    setNotes(filterDelNotes);
  };

  const searchNote = (note) => {
    if (filterNote) {
      return note.title.toLowerCase().includes(filterNote.toLowerCase());
    } else {
      return note;
    }
  };

  const filteredNotes = notes.filter((note) => searchNote(note));

  const handleEdit = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setIsEditing(true);
    setEditId(note.id);
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("Notes"));
      if (saved) setNotes(saved);
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px auto",
      }}
    >
      <h1>Notes App</h1>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={addNotes}
      >
        <input
          type="text"
          name="filter"
          placeholder="filter note"
          value={filterNote}
          onChange={(e) => setFilterNote(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="discription"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">{isEditing ? "Save note" : "Add note"}</button>
      </form>
      <p>{error}</p>
      <ul>
        {notes.length > 0 &&
          filteredNotes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <p>{note.description}</p>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => deleteNote(note.id)}>delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NotesApp;
