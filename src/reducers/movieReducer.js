import uuid from 'uuid/v4';

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        description: action.movie.name, 
        name: action.movie.description, 
        id: uuid()}
      ]
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
} 