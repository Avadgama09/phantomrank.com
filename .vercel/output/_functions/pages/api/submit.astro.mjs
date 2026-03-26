import { google } from 'googleapis';
export { renderers } from '../../renderers.mjs';

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "phantomrank-forms@phantomrankleads.iam.gserviceaccount.com";
  const key = (process.env.GOOGLE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9/YdZbxx/fGWB\neJs+Jvmr5B6oK1T93qD6ODhk5PdfaaOA6SqZNvJ7A4u1UVGnI0PA4IzRRG40p7E0\nKo3FXf4a8svDk8baVBCDFa4uM++w1MkR7q52nH2+gPSyDY9mmoKob+uHh8ubMzMD\nwE2VVrUdmm7JNYxlXOm33O1V4p5c8E1bIo21Rzj0aNqFMkJbtwtTIykchQ1Zf7h3\nMC6gKWkS0iO9JNIIG1Vinn6kwJH6LwQECi2Tu6XlYoVkjs6ByRXWQZY2+n69JFI9\ntlC0QLQ9xbZIPx06rbvqEcTP+XtgLCcsujYOSXC9tr8XjGyznyd351knQ91YhYJJ\nqgxFTGPBAgMBAAECggEAAb+SQ14CI2CGl5nU8I4Pw0eYCktMdCycYHPBfcOHTOW4\n4eAOFWGxJWAmOjmAw0VlY3eS3CnMINMVOUoV9WW/cknfMFIiZOfGoh+CM5MknBo3\n18t8PVkEeuBkFWUKDN3poLlXmm7tuPnQOPMyqOfmxpphSsaMdPIABZeJyJNLX/Fj\nGKwFNGxidiTS4Hqq1bT6vG33fmdHwnr/P/wR9yfDfJnI7B1sX6klqREssKP+oyeI\nbaflSHQvWslVaMBZ9Pgy+vWacqHT4195zKd+EUWz2N4RneyE6b0zJ4YUY1ZP5Aa0\nI17srmjVXUSJFmgFQl3K4LKe55yulT3nmhuLEaCrQQKBgQDm2tUtwc0SHPL7+0UN\nYerCP/mV0ltWQ0M2rSbUovZrpd2jveCUQXTUenJxr20LYG46YNgY+LgKGS6/m+XS\nbvdtCKwtDvZiEZOpCVJ6b4jsANYKQNvbGlxWmy3yWpHIYZr+3AEwWU149bNkuY/e\n7l571AZYKQ5j/FOotdeZIvj2MQKBgQDSrzqkxudUJLOokkGL1h0skRzxr8gVxyNC\nKNgGusavlxN6RhRiq6bBnumLf30T/z0pfbQR1upcvQSJS0Ftjs7+BZ2WDUM+3Li8\nrP8s22/jKcORShSM1Qevx/srvfFG9fdsjhrhIVPursNsXJixsAGjDGi5lKbw66P/\nI6Ak4rGSkQKBgQCwmPq3FCgiEQ83/9GlGSCTFImDOPYyGSZTr0WjKD7Fvo68ccZY\n43HSERF3MjGCoHPyKJ9nCu0OnJEMdt/qiISyXg4IMgf8oWGJz93OV4AwubsDAPau\nt42nmvIdEXewCCqfiAFI0SfYvmxLQ0Bx03tn0pw/2LhveFkvGFwjg4NcIQKBgQC2\n94yzWzW8wl7wD4wy99DASonbbvAR0a5SH4x0U7KG/Wnh74h2pGGelvZ1ulMSkcA5\nDzzZnU5NGa4d2ahJkBM9Uf0oOf5jUmZxHMBC4ZNKsZNw0ugD4mHZi5AazcsC+EtX\nEBZR25K7nzSCH+xPq+3P/s/YEzvj0JDM29CRF/pksQKBgEQBgiWA0xxolGO6n4h/\ngX5DSJtd7hGrcs5PqDE8medBZnxpwSeeMIB0YuNUwaBypI6W6dFK2a6M4t6RewsO\nFin8YcmGwVOTjGm541sFyTonJR9Y1V+0H9EO5xYHdFL1vSvpjFEQJ8rqjI/StwQE\nY8seatJbBbKaf+NbTUWs2aFG\n-----END PRIVATE KEY-----\n").replace(/\\n/g, "\n");
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: key
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
}
const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const sheetId = "1ZNyrhWrEiitFnTzU5HciZDiNc5nesbd7R41opB8C3FM";
    const values = [
      (/* @__PURE__ */ new Date()).toISOString(),
      body.name || "",
      body.email || "",
      body.agency || "",
      body.brands || "",
      body.message || "",
      body.source || ""
    ];
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [values] }
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("FULL ERROR:", JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return new Response(
      JSON.stringify({ error: "Submission failed", detail: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
