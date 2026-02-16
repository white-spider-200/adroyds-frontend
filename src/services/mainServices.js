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
  getArticles: (lang, page = 1) => API.get(`/articles?page=${page}`, getLangHeaders(lang)),
  getPages: (lang) => API.get(`/pages`, getLangHeaders(lang)),
  getArticleById: (id, lang) => API.get(`/articles/${id}`, getLangHeaders(lang)),
  getNews: (lang, page = 1) => API.get(`/news?page=${page}`, getLangHeaders(lang)),
  getNewsById: (id, lang) => API.get(`/news/${id}`, getLangHeaders(lang)),
  getTestimonials: (lang) => API.get("/testimonials", getLangHeaders(lang)),
  getClients: (lang) => API.get("/clients", getLangHeaders(lang)),
  getCompanyHighlights: (lang) => API.get("/company-highlights", getLangHeaders(lang)),
  getSocialMedia: (lang) => API.get("/social-media", getLangHeaders(lang)),
  getFAQ: (lang) => API.get("/faqs", getLangHeaders(lang)),
  getSectors: (lang) => API.get("/sectors", getLangHeaders(lang)),
  getTeamMembers: (lang) => API.get("/team-members", getLangHeaders(lang)),
  getCaseStudies: (lang, page = 1) => API.get(`/case-studies?page=${page}`, getLangHeaders(lang)),
  getCaseStudyById: (id, lang) => API.get(`/case-studies/${id}`, getLangHeaders(lang)),

  // ✅ POST
  sendContactMessage: (data) => API.post("/contact-us", data),
};

export default mainServices;
