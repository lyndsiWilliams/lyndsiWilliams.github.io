import {
  FETCH_MEMBERS_START,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE
} from '../actions/xivActions';

const initialState = {
  freeCompanyMembers: [],
  error: "",
  isFetching: false
};

function xivReducer(state=initialState, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_MEMBERS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        freeCompanyMembers: action.payload
      };
    case FETCH_MEMBERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}

export default xivReducer;