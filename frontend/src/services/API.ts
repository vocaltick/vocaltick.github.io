export function SaveMessagesArray(messagesArray:string[]) {
  fetch(`${import.meta.env.VITE_API_URL}/messages`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(messagesArray),
  });
}

export async function fetchMessagesArray() {
  const fetchdata = await fetch(`${import.meta.env.VITE_API_URL}/messages`);
  return await fetchdata.json();
}