export default async function fetchData(url: RequestInfo) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `The response is not OK and the status is ${response.status}`
    );
  }

  try {
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
