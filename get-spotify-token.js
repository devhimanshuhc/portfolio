const querystring = require("querystring");

const client_id = "4be3d21b06ec4996bf65f5edab3596e0";
const client_secret = "d8e09e2d22404425b539fae999e74fdf";
const redirect_uri = "https://himanshu.tech/callback";

async function getRefreshToken(authCode) {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: redirect_uri,
    }),
  });

  const data = await response.json();

  console.log("Full response status:", response.status);
  console.log("Full response data:", JSON.stringify(data, null, 2));

  if (!response.ok) {
    console.error("Error:", data);
    return;
  }

  console.log("✅ Success! Here are your tokens:");
  console.log("Access Token:", data.access_token);
  console.log("Refresh Token:", data.refresh_token);
  console.log("Expires in:", data.expires_in, "seconds");
  console.log("Scope:", data.scope);
  console.log("\n📝 Update your .env file with this refresh token:");
  console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
}

// Get the authorization code from command line argument
const authCode = process.argv[2];

if (!authCode) {
  console.log("📋 Instructions:");
  console.log("1. Visit this URL:");
  console.log(
    "https://accounts.spotify.com/authorize?client_id=4be3d21b06ec4996bf65f5edab3596e0&response_type=code&redirect_uri=https%3A%2F%2Fhimanshu.tech%2Fcallback&scope=user-read-currently-playing%20user-read-playback-state%20user-read-recently-played"
  );
  console.log(
    "\n2. After authorization, you'll be redirected to himanshu.tech/callback?code=XXXXX"
  );
  console.log("3. Copy the code from the URL and run:");
  console.log("node get-spotify-token.js YOUR_CODE_HERE");
} else {
  getRefreshToken(authCode);
}
