import 'isomorphic-fetch';

// In client/js/actions/cheese.js add an async action
// called fetchCheeses
// which uses
// the Fetch API to make a GET request to your /cheeses
// endpoint.

export const fetchCheeses = cheese => dispatch => {
    const url = `http://localhost:8080/cheeses`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(data => dispatch(fetchCheesesRequest(data))
  )
    .then(data => dispatch(fetchCheesesSuccess(data))
  )
    .catch(error => dispatch(fetchCheesesError(data, error))
  );
};

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheese) => ({
    type: FETCH_CHEESES_SUCCESS
});

export const FETCH_CHEESES_ERROR= 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (cheese, error) => ({
    type: FETCH_CHEESES_ERROR,
    error
});

export const FETCH_CHEESES_REQUEST= 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = (cheese) => ({
    type: FETCH_CHEESES_REQUEST
});
