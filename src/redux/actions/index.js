export const login = name => ({
  type: 'LOGIN',
  payload: name,
});

export const loggout = () => ({
  type: 'LOGOUT',
  payload: null,
});

export const notes = (note, date) => ({
  type: 'INSERT',
  note,
  date
});

export const removeAllNotes = () => ({
  type: 'DELETE-ALL'
});

export const removeNote = note => ({
  type: 'DELETE',
  note
});
