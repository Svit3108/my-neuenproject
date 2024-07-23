const API_BASE_URL = 'https://freemusicarchive.org/api/';

// Definiere die Struktur der Track-Daten
interface Track {
  id: string;
  // Weitere Eigenschaften hinzufügen, falls vorhanden
}

// Funktion zum Abrufen der Tracks
export async function fetchTracks(): Promise<Track[]> {
  const response = await fetch(`${API_BASE_URL}get/track/`);
  const data = await response.json();
  return data as Track[]; // Typen-Sicherstellung
}

// Funktion zum Abrufen der Track-URL
export function getTrackUrl(trackId: string): string {
  return `https://freemusicarchive.org/track/${trackId}/stream`;
}
