export const getUserData = (token) => {
    return fetch("#", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then((response) => {
      if (response.status !== 200) {
        return Promise.reject({ message: "Unable to get user data" });
      } else { return response.json(); }
    }).catch(error => {
      return error;
    });
  }