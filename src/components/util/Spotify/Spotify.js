let accessToken;
const clientID = "8d58b94c89bb41e4b7306e74d09349cc";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      // Setting the access token and expiry time variables
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      // Setting the function which will reset the access token when it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // Clearing the URL after the access token expires
      window.history.pushState("Access Token", null, "/");
      return accessToken;

      // Third check for the access token in the URL
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

      window.location = redirect;
    }
  },
};

export { Spotify };
