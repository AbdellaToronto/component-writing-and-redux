


export const AsyncTestAction = (url) =>
  (dispatch) => fetch(url)
    .then(r => r.json())
    .then(result => dispatch({
  type: 'GOT_ASYNC_THING',
  payload: result
}));