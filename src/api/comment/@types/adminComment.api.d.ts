declare type adminGetCommentRequestPath = {};
declare type adminGetCommentRequestParams = {};
declare type adminGetCommentRequestBody = {};

/** 카테고리 목록 조회 (관리자) 요청 */
declare type adminGetCommentRequest = {
    params?: adminGetCommentRequestParams;
    path?: adminGetCommentRequestPath;
    body?: adminGetCommentRequestBody;
};

/** 카테고리 목록 조회 (관리자) 응답 */
declare type adminGetCommentResponse = Array<ICommentResponseDTO>;

declare type adminGetCommentDetailRequestPath = {
    commentId: string;
};

declare type adminGetCommentDetailRequestBody = {};

declare type adminGetCommentDetailRequestParams = {};

/** 카테고리 상세조회 (관리자) 요청 */
declare type adminGetCommentDetailRequest = {
    params?: adminGetCommentDetailRequestParams;
    path: adminGetCommentDetailRequestPath;
    body?: adminGetCommentDetailRequestBody;
};

/** 카테고리 상세조회 (관리자) 응답 */
declare type adminGetCommentDetailResponse = {
    commentId: string;
    title: string;
    // post:{}
    // author:{}
};

declare type adminGetCommentDetailRequestBody = {
    title: stirng;
};

declare type adminGetCommentDetailRequestPath = {};
declare type adminGetCommentDetailRequestParams = {};

/** 카테고리 생성 (관리자) 요청 */
declare type adminCreateCommentRequest = {
    params?: adminCreateCommentRequestParams;
    path?: adminCreateCommentRequestPath;
    body: adminCreateCommentRequestBody;
};

/** 카테고리 생성 (관리자) 응답 */
declare type adminCreateCommentResponse = ICommentResponseDTO;

declare type adminEditCommentRequestBody = Omit<IComment, "id">;

declare type adminEditCommentRequestPath = {
    /** 카테고리 ID */
    commentId: string;
};

declare type adminEditCommentRequestParams = {};

/** 카테고리 수정 (관리자) 요청 */
declare type adminEditCommentRequest = {
    params: adminEditCommentRequestParams;
    path: adminEditCommentRequestPath;
    body: adminEditCommentRequestBody;
};

/** 카테고리 수정 (관리자) 응답 */
declare type adminEditCommentResponse = void;

declare type adminDeleteCommentRequestPath = {
    /** 카테고리 ID */
    commentId: string;
};

declare type adminDeleteCommentRequestBody = {};

declare type adminDeleteCommentRequestParams = {};

/** 카테고리 삭제 (관리자) 요청 */
declare type adminDeleteCommentRequest = {
    params?: adminDeleteCommentRequestParams;
    path: adminDeleteCommentRequestPath;
    body?: adminDeleteCommentRequestBody;
};

/** 카테고리 삭제 (관리자) 응답 */
declare type adminDeleteCommentResponse = void;
