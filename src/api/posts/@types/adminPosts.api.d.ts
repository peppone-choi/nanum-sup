declare type adminGetPostsRequestPath = {};

declare type adminGetPostsRequestBody = {};

declare type adminGetPostsRequestParams = {};

/** 게시글 목록 조회 요청 */
declare type adminGetPostsRequest = {
  params?: adminGetPostsRequestParams;
  path?: adminGetPostsRequestPath;
  body?: adminGetPostsRequestBody;
};

/** 게시글 목록 조회 응답 (DTO 참고) */
declare type adminGetPostsResponse = Array<IPostResponseDTO>;
declare type adminGetPostDetailRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminGetPostDetailRequestBody = {};

declare type adminGetPostDetailRequestParams = {};

/** 게시글 상세 조회 요청 */
declare type adminGetPostDetailRequest = {
  params?: adminGetPostDetailRequestParams;
  path: adminGetPostDetailRequestPath;
  body?: adminGetPostDetailRequestBody;
};

/** 게시글 상세 조회 응답 (DTO 참고) */
declare type adminGetPostDetailResponse = {
  /** 게시글 ID */
  postId: string;
  title: string;
  content: string;
  author: {
    id: string;
    userName: string;
  };
} | null;

declare type adminCreatePostRequestBody = {
  /** 작성자 ID */
  userId: string;
  /** 카테고리 ID */
  categoryId: string;
  title: string;
  content: string;
};

declare type adminCreatePostRequestPath = {};

declare type adminCreatePostRequestParams = {};

/** 게시글 생성 요청 */
declare type adminCreatePostRequest = {
  params?: adminCreatePostRequestParams;
  path?: adminCreatePostRequestPath;
  body: adminCreatePostRequestBody;
};

/** 게시글 생성 응답 */
declare type adminCreatePostResponse = IPostResponseDTO;

declare type adminUpdatePostRequestBody = Omit<IPost, "id" | "user">;

declare type adminUpdatePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminUpdatePostRequestParams = {};

/** 게시글 수정 요청 */
declare type adminUpdatePostRequest = {
  params?: adminUpdatePostRequestParams;
  path: adminUpdatePostRequestPath;
  body: adminUpdatePostRequestBody;
};

/** 게시글 수정 응답 */
declare type adminUpdatePostResponse = void;

declare type adminDeletePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type adminDeletePostRequestBody = {};

declare type adminDeletePostRequestParams = {};

/** 게시글 삭제 요청 */
declare type adminDeletePostRequest = {
  params?: adminDeletePostRequestParams;
  path: adminDeletePostRequestPath;
  body?: adminDeletePostRequestBody;
};

/** 게시글 삭제 응답 */
declare type adminDeletePostResponse = void;