import { Post } from "@/api/posts/model/post.model";
import { PostRepository } from "@/api/posts/repository/post.repository";
import HttpException from "@/api/common/exceptions/http.exception";
// import { IPost } from "../@types/post.type";

export class MemoryPostRepository implements PostRepository {
  static index = 0;
  static readonly store: Map<string, IPost> = new Map();

  async save(post: Omit<IPost, "id">): Promise<IPost> {
    const newPost = new Post({
      ...post,
      id: `post-${MemoryPostRepository.index++}`,
    });
    MemoryPostRepository.store.set(newPost.id, newPost);
    return newPost;
  }

  async findAll(): Promise<IPost[]> {
    const values = Array.from(MemoryPostRepository.store.values());
    return values;
  }

  async findById(id: string): Promise<IPost | null> {
    const findPost = MemoryPostRepository.store.get(id);
    return findPost ?? null;
  }

  async update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost> {
    const findPost = MemoryPostRepository.store.get(postId);

    if (!findPost) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    MemoryPostRepository.store.set(postId, {
      ...findPost,
      ...updatePostInfo,
    });

    return MemoryPostRepository.store.get(postId)!;
  }
  async delete(postId: string): Promise<void> {
    const findPost = MemoryPostRepository.store.get(postId);

    if (!findPost) {
      throw new HttpException(404, "게시물을 찾을 수 없습니다.");
    }
    MemoryPostRepository.store.delete(postId);

    return;
  }
  async findByShortUrl(shortUrl: string): Promise<IPost | null> {
    const findPost = Array.from(MemoryPostRepository.store.values()).find(
      (post) => post.shortUrl === shortUrl
    );
    return findPost ?? null;
  }
}
