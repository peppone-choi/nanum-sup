declare type adminGetCommentRequestPath = {};
declare type adminGetCommentRequestParams = {};
declare type adminGetCommentRequestBody = {};

/** 댓글 목록 조회 (관리자) 요청 */
declare type adminGetCommentRequest = {
  params?: adminGetCommentRequestParams;
  path?: adminGetCommentRequestPath;
  body?: adminGetCommentRequestBody;
};

/** 댓글 목록 조회 (관리자) 응답 */
declare type adminGetCommentResponse = Array<ICommentResponseDTO>;

declare type adminGetCommentDetailRequestPath = {
  commentId: string;
};

declare type adminGetCommentDetailRequestBody = {};

declare type adminGetCommentDetailRequestParams = {};

/** 댓글 상세조회 (관리자) 요청 */
declare type adminGetCommentDetailRequest = {
  params?: adminGetCommentDetailRequestParams;
  path: adminGetCommentDetailRequestPath;
  body?: adminGetCommentDetailRequestBody;
};

/** 댓글 상세조회 (관리자) 응답 */
declare type adminGetCommentDetailResponse = {
  commentId: string;
  title: string;
  // post:{}
  // author:{}
};

declare type adminGetCommentDetailRequestBody = {
  title: string;
};

declare type adminGetCommentDetailRequestPath = {};
declare type adminGetCommentDetailRequestParams = {};

/** 댓글 생성 (관리자) 요청 */
declare type adminCreateCommentRequest = {
  params?: adminCreateCommentRequestParams;
  path?: adminCreateCommentRequestPath;
  body: adminCreateCommentRequestBody;
};

/** 댓글 생성 (관리자) 응답 */
declare type adminCreateCommentResponse = ICommentResponseDTO;

declare type adminEditCommentRequestBody = Omit<IComment, "id">;

declare type adminEditCommentRequestPath = {
  /** 댓글 ID */
  commentId: string;
};

declare type adminEditCommentRequestParams = {};

/** 댓글 수정 (관리자) 요청 */
declare type adminEditCommentRequest = {
  params: adminEditCommentRequestParams;
  path: adminEditCommentRequestPath;
  body: adminEditCommentRequestBody;
};

/** 댓글 수정 (관리자) 응답 */
declare type adminEditCommentResponse = void;

declare type adminDeleteCommentRequestPath = {
  /** 댓글 ID */
  commentId: string;
};

declare type adminDeleteCommentRequestBody = {};

declare type adminDeleteCommentRequestParams = {};

/** 댓글 삭제 (관리자) 요청 */
declare type adminDeleteCommentRequest = {
  params?: adminDeleteCommentRequestParams;
  path: adminDeleteCommentRequestPath;
  body?: adminDeleteCommentRequestBody;
};

/** 댓글 삭제 (관리자) 응답 */
declare type adminDeleteCommentResponse = void;
