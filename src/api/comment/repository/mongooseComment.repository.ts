import HttpException from "@/api/common/exceptions/http.exception";
import IComment from "../@types/comment.type";
import { MongooseComment } from "../model/comment.schema";
import { CommentRepository } from "./comment.repository";

export class MongooseCommentRepository implements CommentRepository {
  async save(comment: Omit<IComment, "id">): Promise<IComment> {
    const newComment = new MongooseComment(comment);

    await newComment.save();

    return newComment;
  }

  async findAll(): Promise<IComment[]> {
    const values = await MongooseComment.find();

    return values;
  }
  async findById(id: string): Promise<IComment | null> {
    const comment = await MongooseComment.findById(id);
    return comment;
  }

  async update(id: string, updateCommentInfo: Partial<IComment>): Promise<IComment> {
    const results = await MongooseComment.findByIdAndUpdate(id, updateCommentInfo);
    if (!results) {
      throw new HttpException(404, "댓글을 찾을 수 없습니다.");
    }
    return results;
  }

  async delete(id: string): Promise<void> {
    await MongooseComment.deleteOne({ _id: id });

    return;
  }
}
