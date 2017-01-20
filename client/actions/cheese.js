import 'isomorphic-fetch';

// In client/js/actions/cheese.js add an async action
// called fetchCheeses
// which uses
// the Fetch API to make a GET request to your /cheeses
// endpoint.

export const fetchCheeses = () => {
    return (dispatch) => {
        var url = '/cheeses';
        dispatch(fetchCheesesRequest());
        return fetch(url).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        })
        .then((data) => {
console.log(data);
            return dispatch(fetchCheesesSuccess(data));
        })
        .catch((error) => {
            return dispatch(fetchCheesesError(error));
        });
    }
};

export const FETCH_CHEESES_REQUEST= 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = (cheese) => ({
    type: FETCH_CHEESES_REQUEST,
    cheese
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheese) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheese
});

export const FETCH_CHEESES_ERROR= 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (cheese, error) => ({
    type: FETCH_CHEESES_ERROR,
    cheese,
    error
});
