import HttpException from "@/api/common/exceptions/http.exception";
import { MongoosePost } from "@/api/posts/model/post.schema";
import { PostRepository } from "@/api/posts/repository/post.repository";
// import { IPost } from "../@types/post.type";

export class MongoosePostRepository implements PostRepository {
  async save(post: Omit<IPost, "id">): Promise<IPost> {
    const newPost = new MongoosePost({
      ...post,
    });
    await newPost.save();
    return newPost;
  }
  async findAll(): Promise<IPost[]> {
    const values = await MongoosePost.find()
    .populate({
      path: "author",
      populate: {
        path: "profile",
      },
    })
    .populate("category");
    return values;
  }
  async findById(id: string): Promise<IPost | null> {
    const post = await MongoosePost.findOne({ _id: id })
    .populate({
      path: "author",
      populate: {
        path: "profile",
      },
    })
    .populate("category");
    return post;
  }
  async update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost> {
    const results = await MongoosePost.findByIdAndUpdate(postId, updatePostInfo);

    if (!results) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    return results;
  }
  async delete(postId: string): Promise<void> {
    await MongoosePost.deleteOne({ _id: postId });
    return;
  }
  async findByShortUrl(shortUrl: string): Promise<IPost | null> {
    const post = await MongoosePost.findOne({ shortUrl }).populate("author").populate("category");
    return post;
  }
  async findByCategoryId(categoryId: string): Promise<IPost[]> {
    const posts = await MongoosePost.find({ category: categoryId }).populate("author").populate("category");
    return posts;
  }
  async findByUserId(userId: string): Promise<IPost[]> {
    const posts = await MongoosePost.find({ author: userId }).populate("author").populate("category");
    return posts;
  }
}
