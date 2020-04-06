import produce from 'immer';

const initialState = {
  signed: false,
  profile: null,
};

export default function auth(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.profile = action.payload.clients;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
