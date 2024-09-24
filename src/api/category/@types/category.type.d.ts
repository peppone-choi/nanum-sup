interface ICategory {
    /** 카테고리 ID */
    id: string;
    /** 카테고리명 */
    title: string;
    /** 게시글 */
    // /** 작성자 (운영자,부운영자) */
    admin?: IUser;
    subAdmin?: IUser[];
}

interface ICategoryResponseDTO {
    /** 게시글 ID */
    categoryId: string;
    /** 게시글 제목 */
    title: string;
    admin?: UserResponseDto;
    subAdmin?: UserResponseDto[];
}
