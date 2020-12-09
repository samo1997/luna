import baseUrl from "../../helpers/baseUrl";

export const fetchLogin = (username, password) => async (dispatch, getState) => {

  const body = JSON.stringify({
    username: username,
    password: password,
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const config = {
    method: 'POST',
    body: body,
    headers: headers,
  }

  console.log('here is my login action');
  let data;
  try {
    const response = await fetch(baseUrl + 'auth/token/', config);
    data = await response.json()
  }
  catch (error) {
    console.log('Error', error)
  }
  console.log(data.access);
  localStorage.setItem('accessToken', data.access);
  dispatch({
    type: 'fetchLogin',
    payload: data.access,
  });
};