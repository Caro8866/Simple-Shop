export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydnNqZnlrY29mbG5lYmtkYWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4NjEsImV4cCI6MTk4MjE3NDg2MX0.IsHFJrPbfFh6cVBiDXBYzebe7Fx_qULBpYEPyFVu_eY";
  const url = "https://drvsjfykcoflnebkdajh.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydnNqZnlrY29mbG5lYmtkYWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4NjEsImV4cCI6MTk4MjE3NDg2MX0.IsHFJrPbfFh6cVBiDXBYzebe7Fx_qULBpYEPyFVu_eY",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydnNqZnlrY29mbG5lYmtkYWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg4NjEsImV4cCI6MTk4MjE3NDg2MX0.IsHFJrPbfFh6cVBiDXBYzebe7Fx_qULBpYEPyFVu_eY",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
