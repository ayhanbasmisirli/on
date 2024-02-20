export async function fetchAudienceData() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT || 'DEFAULT_API_ENDPOINT',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch audience data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching audience data:', error);
    throw error;
  }
}
