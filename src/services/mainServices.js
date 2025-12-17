import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// helper function to attach language automatically
const getLangHeaders = (lang) => ({
  headers: { lang },
});

const mainServices = {
  // ✅ GET
  getArticles: (lang) => API.get("/articles", getLangHeaders(lang)),
  getArticleById: (id, lang) => API.get(`/articles/${id}`, getLangHeaders(lang)),
  getNews: (lang) => API.get("/news", getLangHeaders(lang)),
  getNewsById: (id, lang) => API.get(`/news/${id}`, getLangHeaders(lang)),
  getTestimonials: (lang) => API.get("/testimonials", getLangHeaders(lang)),
  getClients: (lang) => API.get("/clients", getLangHeaders(lang)),
  getCompanyHighlights: (lang) => API.get("/company-highlights", getLangHeaders(lang)),
  getSocialMedia: (lang) => API.get("/social-media", getLangHeaders(lang)),
  getFAQ: (lang) => API.get("/faqs", getLangHeaders(lang)),

  // ✅ POST
  sendContactMessage: (data) => API.post("/contact-us", data),
};

export default mainServices;
