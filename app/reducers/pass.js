const pass = (state = {status: 'empty', value: null}, action) =>{
    switch (action.type){
        case 'TYPED':
          return Object.assign({}, state,
            {status: 'typed',
            value: action.payload
          })
        
          case 'EMPTY':
            return Object.assign({}, state,
              {status: 'empty',
              value: action.value
          })
        default:
            return state
      }
}

export default pass