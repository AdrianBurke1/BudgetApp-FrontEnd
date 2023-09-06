const API_BASE_URL = "http://localhost:8887"; // Replace with your actual backend URL

async function fetchTransactions() {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export { fetchTransactions };