import * as actions from '../actions/cheese';


const initialCheesesState = {

  cheeses: [],
  loading: false,
  error: null

};

export const cheesesReducer =
(state=initialCheesesState, action) => {
    if (action.type === actions.FETCH_CHEESES_REQUEST) {
          state = Object.assign({}, state, {
              loading: true
          });
        return state;
    }

    else if (action.type === actions.FETCH_CHEESES_SUCCESS) {
    state = Object.assign({}, state, {
      cheeses: actions.cheeses,
      loading: false,
      error: null
    });
    return state;
    }
    //
    // else if (action.type === actions.FETCH_CHEESES_ERROR) {
    //     // Find the index of the matching repository
    //     const index = state.findIndex(repository =>
    //         repository.name === action.repository
    //     );
    //
    //     if (index === -1) {
    //         throw new Error('Could not find repository');
    //     }
    //
    //     const before = state.slice(0, index);
    //     const after = state.slice(index + 1);
    //     const newRepository = Object.assign({}, state[index], {
    //         description: 'N/A'
    //     });
    //     return [...before, newRepository, ...after];
    // }
    //
    // return state;
}
