import axios from "axios";

async function authenticate(type, email, password) {
  console.log("inside authenticate", type, email, password);
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${
    import.meta.env.VITE_AUTH_APIKEY
  }`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data?.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}
