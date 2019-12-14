import axios from 'axios';

export const FETCH_MEMBERS_START = "FETCH_MEMBERS_START";
export const FETCH_MEMBERS_SUCCESS = "FETCH_MEMBERS_SUCCESS";
export const FETCH_MEMBERS_FAILURE = "FETCH_MEMBERS_FAILURE";

export const getMembers = () => dispatch => {
  dispatch({ type: FETCH_MEMBERS_START });
  axios.get("https://xivapi.com/freecompany/9229142273877456802?data=FCM")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_MEMBERS_SUCCESS, payload: res.data.FreeCompanyMembers });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_MEMBERS_FAILURE,
        payload: `${err.response.status} ${err.response.data}`
      });
    });
};