import { PostResponseDTO } from "../dto/postResponse.dto";
import { PostsService } from "./posts.service.type";

export class PostsServiceImpl implements PostsService {
  createPost(): Promise<PostResponseDTO> {
    throw new Error("Method not implemented.");
  }
  getPosts(): Promise<PostResponseDTO[]> {
    throw new Error("Method not implemented.");
  }
  getPostDetail(): Promise<PostResponseDTO | null> {
    throw new Error("Method not implemented.");
  }
  updatePost(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deletePost(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}