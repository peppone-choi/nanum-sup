declare type adminGetPostsRequestPath = {};

declare type adminGetPostsRequestBody = {};

declare type adminGetPostsRequestParams = {};

/** [관리자] 게시글 목록 조회 요청 */
declare type adminGetPostsRequest = {
  params?: adminGetPostsRequestParams;
  path?: adminGetPostsRequestPath;
  body?: adminGetPostsRequestBody;
};

/** [관리자] 게시글 목록 조회 응답 (DTO 참고) */
declare type adminGetPostsResponse = Array<IPostResponseDTO>;
declare type adminGetPostDetailRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminGetPostDetailRequestBody = {};

declare type adminGetPostDetailRequestParams = {};

/** [관리자] 게시글 상세 조회 요청 */
declare type adminGetPostDetailRequest = {
  params?: adminGetPostDetailRequestParams;
  path: adminGetPostDetailRequestPath;
  body?: adminGetPostDetailRequestBody;
};

/** [관리자] 게시글 상세 조회 응답 (DTO 참고) */
declare type adminGetPostDetailResponse = {
  /** 게시글 ID */
  postId: string;
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 작성자 */
  author: {
    id: string;
    userName: string;
  };
  /** 카테고리 */
  category: {
    id: string;
  };
  /** 댓글 */
  category: {
    comments: string[];
  };
} | null;

declare type adminCreatePostRequestBody = {
  title: string;
  content: string;
  categoryId: string;
  userId: string;
};

declare type adminCreatePostRequestPath = {

};

declare type adminCreatePostRequestParams = {};

/** [관리자] 게시글 생성 요청 */
declare type adminCreatePostRequest = {
  params?: adminCreatePostRequestParams;
  path?: adminCreatePostRequestPath;
  body: adminCreatePostRequestBody;
};

/** [관리자] 게시글 생성 응답 */
declare type adminCreatePostResponse = IPostResponseDTO;

declare type adminUpdatePostRequestBody = Pick<IPost, "title" | "content" | "category">;

declare type adminUpdatePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminUpdatePostRequestParams = {};

/** [관리자] 게시글 수정 요청 */
declare type adminUpdatePostRequest = {
  params?: adminUpdatePostRequestParams;
  path: adminUpdatePostRequestPath;
  body: adminUpdatePostRequestBody;
};

/**[관리자]  게시글 수정 응답 */
declare type adminUpdatePostResponse = void;

declare type adminDeletePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminDeletePostRequestBody = {};

declare type adminDeletePostRequestParams = {};

/** [관리자] 게시글 삭제 요청 */
declare type adminDeletePostRequest = {
  params?: adminDeletePostRequestParams;
  path: adminDeletePostRequestPath;
  body?: adminDeletePostRequestBody;
};


/** [관리자] 게시글 삭제 응답 */
declare type adminDeletePostResponse = void;
