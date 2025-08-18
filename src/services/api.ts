export async function fetchProperties() {
  // Replace with your actual API endpoint and authentication if needed
  const response = await fetch('https://your-api-endpoint.com/properties');
  return response.json();
}