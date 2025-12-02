export default class PostService {
  constructor(http, tokenStoreage) {
    this.http = http;
    this.tokenStoreage = tokenStoreage;
  }

  async getPosts(userid) {}

  async createPost(text) {
    return this.http.fetch("/post", {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text, userid: "ryuzy", name: "류지" }),
    });
  }

  async deletePost(postId) {}

  async updatePost(postId, text) {}

  getHeaders() {
    const token = this.tokenStoreage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
