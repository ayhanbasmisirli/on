// pages/api/proxy.js

export default async function handler(req, res) {
  try {
    // Forward the incoming request to the external API
    const response = await fetch(req.query.url, {
      method: req.method,
      headers: {
        ...req.headers,
        // Add any additional headers if necessary
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    // Retrieve the response body and headers from the external API
    const data = await response.json();
    const headers = response.headers;

    // Set the response headers to allow CORS
    Object.keys(headers).forEach((key) => {
      res.setHeader(key, headers[key]);
    });

    // Send the response body from the external API to the client
    res.status(response.status).json(data);
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
