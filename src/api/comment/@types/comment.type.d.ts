export default interface IComment {
    /** 카테고리 ID */
    commentId: string;

    // /** 게시글 */
    post: IComment[];
    // /** 작성자 (운영자,부운영자) */
    author: IUser;

}

interface ICommentResponseDTO {
    /** 게시글 ID */
    commentId: string;
    /** 게시글 */
    post: { id: string };
    author: { id: string };
}
