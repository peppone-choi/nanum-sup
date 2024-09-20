import IComment from "../@types/comment.type";

export class Comment implements IComment {
    commentId!: string;
    author: IUser;
    post: IComment[];

    constructor(params: IComment) {
        this.post = params.post;
    }
}
