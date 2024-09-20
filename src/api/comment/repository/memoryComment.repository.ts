import IComment from "../@types/comment.type";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { Comment } from "@/api/comment/model/comment.model";
import HttpException from "@/api/common/exceptions/http.exception";

export class MemoryCommentRepository implements CommentRepository {
    static index = 0;
    static readonly store: Map<string, IComment> = new Map();

    async save(comment: Omit<IComment, "id">): Promise<IComment> {
        const newComment = new Comment({
            ...comment,
            id: `comment-${MemoryCommentRepository.index++}`,
        });

        MemoryCommentRepository.store.set(newComment.id, newComment);
        return newComment;
    }

    async findAll(): Promise<IComment[]> {
        const values = Array.from(MemoryCommentRepository.store.values());
        return values;
    }

    async findById(id: string): Promise<IComment | null> {
        const findComment = MemoryCommentRepository.store.get(id);
        return findComment ?? null;
    }

    async update(
        commentId: string,
        updateCommentInfo: Partial<IComment>
    ): Promise<IComment> {
        const findComment = MemoryCommentRepository.store.get(commentId);

        if (!findComment) {
            throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
        }

        MemoryCommentRepository.store.set(commentId, {
            ...findComment,
            ...updateCommentInfo,
        });
        return MemoryCommentRepository.store.get(commentId)!;
    }

    async delete(commentId: string): Promise<void> {
        const findComment = MemoryCommentRepository.store.get(commentId);
        if (!findComment) {
            throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
        }
        MemoryCommentRepository.store.delete(commentId);
    }
}
