// src/services/musicService.js

const API_BASE_URL = 'https://freemusicarchive.org/api/';

export async function fetchTracks() {
  const response = await fetch(`${API_BASE_URL}get/track/`);
  const data = await response.json();
  return data;
}

export function getTrackUrl(trackId) {
  return `https://freemusicarchive.org/track/${trackId}/stream`;
}
