export default class PostService {
  constructor(tokenStoreage) {
    this.tokenStoreage = tokenStoreage;
  }

  async getPosts(userid) {}

  async createPost(text) {}
  async deletePost(postId) {}
  async updatePost(postId, text) {}

  getHeaders() {
    const token = this.tokenStoreage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
