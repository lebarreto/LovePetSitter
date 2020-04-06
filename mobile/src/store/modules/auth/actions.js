export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(clients) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      clients,
    },
  };
}

export function signUpRequest(name, email, cellphone, address, city, uf, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name, email, cellphone, address, city, uf, password
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
