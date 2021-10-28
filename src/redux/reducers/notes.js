const notes = (state = [], action) => {
  switch (action.type) {
    case 'INSERT':
      return [...state, [action.note, action.date]];

    case 'DELETE-ALL':
      // Delete all notes
      // eslint-disable-next-line no-param-reassign
      return (state = []);
      

    case 'DELETE':
      console.log('from delete action');
      return [...state.filter((note) => note !== action.note)];

    default:
      return state;
  }
};

export default notes;
