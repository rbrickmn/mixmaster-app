let accessToken = "";
const clientID = "8d58b94c89bb41e4b7306e74d09349cc";
const redirectUrl = "https://mixmaster-app.vercel.app/";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      console.log('Access Token Set:', accessToken);
      return accessToken;
    }

    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public playlist-modify-private user-read-private&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },

  async search(term) {
    accessToken = Spotify.getAccessToken();
    console.log('Using Access Token for Search:', accessToken);
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const jsonResponse = await response.json();
    if (!jsonResponse) {
      console.error("Response error");
    }
    return jsonResponse.tracks.items.map((t) => ({
      id: t.id,
      name: t.name,
      artist: t.artists[0].name,
      album: t.album.name,
      uri: t.uri,
      image: t.album.images[0].url,
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;
    const aToken = Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${aToken}` };
    try {
      console.log('Using Access Token for Save Playlist:', aToken);
      const userResponse = await fetch(`https://api.spotify.com/v1/me`, { headers: header });
      console.log('User Response Status:', userResponse.status);
      if (!userResponse.ok) throw new Error('Failed to fetch user data');
      const userData = await userResponse.json();
      console.log('User Data:', userData);

      const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
        headers: header,
        method: "POST",
        body: JSON.stringify({ name: name }),
      });
      if (!playlistResponse.ok) throw new Error('Failed to create playlist');
      const playlistData = await playlistResponse.json();
      console.log('Playlist Data:', playlistData);

      const trackResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`, {
        headers: header,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      });
      if (!trackResponse.ok) throw new Error('Failed to add tracks');
      const trackData = await trackResponse.json();
      console.log('Track Data:', trackData);
      return trackData;
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export { Spotify };
