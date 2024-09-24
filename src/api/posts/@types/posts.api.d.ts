declare type getPostsRequestPath = {};

declare type getPostsRequestBody = {};

declare type getPostsRequestParams = {};

/** 게시글 목록 조회 요청 */
declare type getPostsRequest = {
  params?: getPostsRequestParams;
  path?: getPostsRequestPath;
  body?: getPostsRequestBody;
};

/** 게시글 목록 조회 응답 (DTO 참고) */
declare type getPostsResponse = Array<IPostResponseDTO>;

declare type getPostDetailRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type getPostDetailRequestBody = {};

declare type getPostDetailRequestParams = {};

/** 게시글 상세 조회 요청 */
declare type getPostDetailRequest = {
  params?: getPostDetailRequestParams;
  path: getPostDetailRequestPath;
  body?: getPostDetailRequestBody;
};

/** 게시글 상세 조회 응답 (DTO 참고) */
declare type getPostDetailResponse = IPostResponseDTO | null;

declare type createPostRequestBody = {
  /** 작성자 ID */
  userId: string;
  /** 카테고리 ID */
  categoryId: string;
  title: string;
  content: string;
  comments: string[];
};

declare type createPostRequestPath = {};

declare type createPostRequestParams = {};

/** 게시글 생성 요청 */
declare type createPostRequest = {
  params?: createPostRequestParams;
  path?: createPostRequestPath;
  body: createPostRequestBody;
};

/** 게시글 생성 응답 */
declare type createPostResponse = IPostResponseDTO;

declare type updatePostRequestBody = Pick<
  IPost,
  "title",
  "content",
  "category"
>;

declare type updatePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type updatePostRequestParams = {};

/** 게시글 수정 요청 */
declare type updatePostRequest = {
  params?: updatePostRequestParams;
  path: updatePostRequestPath;
  body: updatePostRequestBody;
};

/** 게시글 수정 응답 */
declare type updatePostResponse = void;

declare type deletePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};

declare type deletePostRequestBody = {};

declare type deletePostRequestParams = {};

/** 게시글 삭제 요청 */
declare type deletePostRequest = {
  params?: deletePostRequestParams;
  path: deletePostRequestPath;
  body?: deletePostRequestBody;
};

/** 게시글 삭제 응답 */
declare type deletePostResponse = void;

declare type findByShortUrlRequestPath = {
  /** 단축 URL */
  shortUrl: string;
};

declare type findByShortUrlRequestBody = {};

declare type findByShortUrlRequestParams = {};

/** 단축 URL */
declare type findByShortUrlRequest = {
  path: findByShortUrlRequestPath;
  params?: findByShortUrlRequestParams;
  body?: findByShortUrlRequestBody;
};

declare type findByShortUrlResponse = IPostResponseDTO | null;
