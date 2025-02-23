const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  // async function register({ email, name, password }) {
  //   try {
  //     const response = await fetch(`${BASE_URL}/register`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: JSON.stringify({ email, name, password }),
  //     });
  
  //     const responseJson = await response.json();
  //     console.log(responseJson);
  //     if (responseJson.status !== 'success') {
  //       throw new Error(responseJson.message);
  //     }
  
  //     return responseJson.data.user;
  //   } catch (error) {
  //     console.error('Registration Error:', error.message);
  //     throw error;
  //   }
  // }
  async function register({ email, name, password }) {
    // try {
      const params = new URLSearchParams();
      params.append("email", email);
      params.append("name", name);
      params.append("password", password);

      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: params, // Konversi ke format encoded
      });

      const responseJson = await response.json();
      console.log("Response:", responseJson); // Debugging response

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.data.user;
    // } catch (error) {
    //   console.error('Registration Error:', error.message);
    //   throw error;
    // }
}


  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { users } } = responseJson;

    return users;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { threads } } = responseJson;

    return threads;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
  };
})();

export default api;
