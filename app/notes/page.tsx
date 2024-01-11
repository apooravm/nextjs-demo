type Note = {
  data: string;
  description: string;
  id: number;
  slug: string;
  tags: string[];
  time: string;
  title: string;
  updated_date: string;
};

type NotesAll = {
  notes: Note[];
};

const GetNotes = async (): Promise<NotesAll> => {
  const res = await fetch("https://multi-serve.onrender.com/api/notes/info");

  return res.json();
};

const Notes = async () => {
  return GetNotes()
    .then((notesAll: NotesAll) => {
      return (
        <div className="flex flex-col justify-center items-center gap-4 py-2">
          {notesAll.notes.map((note) => (
            <div key={note.id} className="flex flex-col justify-center border-2 border-gray-400 rounded-lg max-w-3xl w-screen max-h-96 py-9 px-10 gap-2 bg-white hover:bg-slate-200 transition-all duration-30000">
              <div className="text-2xl font-semibold">{note.title}</div>
              <div className="datetime">{note.time}</div>
              <div className="description">
                {note.description}
              </div>
              <a href={"http://multi-serve.onrender.com/api/notes/"+note.slug}>Link</a>
            </div>
          ))}
        </div>
      );
    })
    .catch((err) => {
      <div className="note-container">Something went wrong</div>;
    });
};

export default Notes;
