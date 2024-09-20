import IComment from "../@types/comment.type";
export class CommentResponseDTO {
    commentId!: string;
    author: {
        id: string;
        userName: string;
    };
    post!: {
        id: string;
    };

    constructor(params: IComment) {
        this.commentId = params.commentId;
        this.author ={
            id: params.author.id,
            userName:params.author.profile.firstName
        }
    }
}
