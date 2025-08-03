import { NextResponse } from "next/server";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Token refresh failed:", response.status, data);
    throw new Error(`Token refresh failed: ${response.status}`);
  }

  return data;
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const response = await getNowPlaying();

    // If currently playing, return that
    if (response.status === 200) {
      const song = await response.json();

      if (song && song.item && song.is_playing) {
        const title = song.item.name;
        const artist = song.item.artists
          .map((_artist: { name: string }) => _artist.name)
          .join(", ");
        const albumImageUrl = song.item.album.images[0].url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json(
          {
            isPlaying: true,
            title,
            artist,
            albumImageUrl,
            songUrl,
          },
          {
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );
      }
    }

    // If nothing is currently playing, get the most recently played track
    const recentResponse = await getRecentlyPlayed();

    if (recentResponse.status === 200) {
      const recentData = await recentResponse.json();

      if (recentData && recentData.items && recentData.items.length > 0) {
        const recentTrack = recentData.items[0].track;
        const title = recentTrack.name;
        const artist = recentTrack.artists
          .map((_artist: { name: string }) => _artist.name)
          .join(", ");
        const albumImageUrl = recentTrack.album.images[0].url;
        const songUrl = recentTrack.external_urls.spotify;

        return NextResponse.json(
          {
            isPlaying: false,
            title,
            artist,
            albumImageUrl,
            songUrl,
            isRecentlyPlayed: true,
          },
          {
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );
      }
    }

    // Fallback if no data available
    return NextResponse.json(
      { isPlaying: false },
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error in Spotify API:", error);
    return NextResponse.json(
      { isPlaying: false },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}
