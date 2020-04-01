export function cancelRequest(id) {
  return {
    type: '@agenda/CANCEL_REQUEST',
    payload: {
      id,
    },
  };
}

export function addRequest(date, client_id, user_id) {
  return {
    type: '@agenda/ADD_REQUEST',
    payload: {
      date,
      client_id,
      user_id,
    },
  };
}
