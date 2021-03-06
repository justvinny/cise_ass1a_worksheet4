import axios from "axios";

const getAllArticles = async () => {
  return axios.get("/api/articles").then((articles) => articles.data);
};

const postArticle = async (article) => {
  return axios.post("/api/articles", article).then((articles) => articles.data);
}

export { getAllArticles, postArticle };

