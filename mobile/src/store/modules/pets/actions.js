export function addRequest(name, age, sex, type, description, avatar_id, client_id) {
  return {
    type: '@pets/ADD_REQUEST',
    payload: {
      name, age, sex, type, description, avatar_id, client_id
    },
  };
}
