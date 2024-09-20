declare type getCategoryRequestPath = {};

declare type getCategoryRequestBody = {};

declare type getCategoryRequestParams = {};

/** 카테고리 목록 조회 요청 */
declare type getCategoryRequest = {
    params: getCategoryRequestParams;
    path?: getCategoryRequestPath;
    body?: getCategoryRequestBody;
};

/** 카테고리 목록 조회 응답 */
declare type getCategoryResponse = Array<ICategoryResponseDTO>;

declare type getCategoryDetailRequsetPath = {
    /** 카테고리 ID */
    caegoryId: string;
};
declare type getPostDetailRequestBody = {};

declare type getPostDetailRequestParams = {};

/** 카테고리 상세 조회 요청 */
declare type getCategoryDetailRequset = {
    params?: getPostDetailRequestParams;
    path: getCategoryDetailRequsetPath;
    body?: getPostDetailRequestBody;
};

/** 카테고리 상세 조회 응답 */
declare type getCategoryDetailResponse = ICategoryResponseDTO | null;

declare type getPostDetailRequestBody = {
    title: string;
};
