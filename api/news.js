export default async function handler(req, res) {
  const { category = "general", page = 1 } = req.query;

  // Map categories to search keywords
  const categoryMap = {
    science: "science",
    sports: "sports",
    health: "health",
    business: "business",
    technology: "technology",
    anime: "anime"
  };

  const query = categoryMap[category] || "general";

  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=6&page=${page}&apikey=${process.env.API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
