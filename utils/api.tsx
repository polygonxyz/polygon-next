const BASE_URL = "http://localhost:3000/api";
const API_VERSION = "v1";

async function post(address: string, data: any, config?: RequestInit) {
  const response = await fetch(`${BASE_URL}/${address}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...config,
  });
  return response.json();
}

async function get(address: string, config?: RequestInit) {
  const response = await fetch(`${BASE_URL}/${address}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
  return response.json();
}

export { post, get };
