const auth = (state = { status: 'logged out', value: null }, action) => {
    switch (action.type) {
        case 'LOGIN':
          return Object.assign({}, state,
            { status: 'logged in',
            value: action.payload
          });
        
          case 'LOGOUT':
            return Object.assign({}, state,
              { status: 'logged out',
              value: action.value
          });
        default:
            return state;
      }
};

export default auth;
