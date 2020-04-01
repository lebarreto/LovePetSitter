export function updateRequest({
  id,
  name,
  email,
  cellphone,
  address,
  city,
  uf,
}) {
  return {
    type: '@client/UPDATE_REQUEST',
    payload: {
      id,
      name,
      email,
      cellphone,
      address,
      city,
      uf,
    },
  };
}

export function deleteRequest(id) {
  return {
    type: '@client/DELETE_REQUEST',
    payload: {
      id,
    },
  };
}
