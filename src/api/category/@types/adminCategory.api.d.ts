declare type adminGetCategoryRequestPath = {};
declare type adminGetCategoryRequestParams = {};
declare type adminGetCategoryRequestBody = {};

/** 카테고리 목록 조회 (관리자) 요청 */
declare type adminGetCategoryRequest = {
    params?: adminGetCategoryRequestParams;
    path?: adminGetCategoryRequestPath;
    body?: adminGetCategoryRequestBody;
};

/** 카테고리 목록 조회 (관리자) 응답 */
declare type adminGetCategoryResponse = Array<ICategoryResponseDTO>;

declare type adminGetCategoryDetailRequestPath = {
    categoryId: string;
};

declare type adminGetCategoryDetailRequestBody = {};

declare type adminGetCategoryDetailRequestParams = {};

/** 카테고리 상세조회 (관리자) 요청 */
declare type adminGetCategoryDetailRequest = {
    params?: adminGetCategoryDetailRequestParams;
    path: adminGetCategoryDetailRequestPath;
    body?: adminGetCategoryDetailRequestBody;
};

/** 카테고리 상세조회 (관리자) 응답 */
declare type adminGetCategoryDetailResponse = {
    categoryId: string;
    title: string;
    // post:{}
    // author:{}
};

declare type adminGetCategoryDetailRequestBody = {
    title: stirng;
};

declare type adminGetCategoryDetailRequestPath = {};
declare type adminGetCategoryDetailRequestParams = {};

/** 카테고리 생성 (관리자) 요청 */
declare type adminCreateCategoryRequest = {
    params?: adminCreateCategoryRequestParams;
    path?: adminCreateCategoryRequestPath;
    body: adminCreateCategoryRequestBody;
};

/** 카테고리 생성 (관리자) 응답 */
declare type adminCreateCategoryResponse = ICategoryResponseDTO;

declare type adminUpdateCategoryRequestBody = Omit<ICategory, "id">;

declare type adminUpdateCategoryRequestPath = {
    /** 카테고리 ID */
    categoryId: string;
};

declare type adminUpdateCategoryRequestParams = {};

/** 카테고리 수정 (관리자) 요청 */
declare type adminUpdateCategoryRequest = {
    params: adminUpdateCategoryRequestParams;
    path: adminUpdateCategoryRequestPath;
    body: adminUpdateCategoryRequestBody;
};

/** 카테고리 수정 (관리자) 응답 */
declare type adminUpdateCategoryResponse = void;

declare type adminDeleteCategoryRequestPath = {
    /** 카테고리 ID */
    categoryId: string;
};

declare type adminDeleteCategoryRequestBody = {};

declare type adminDeleteCategoryRequestParams = {};

/** 카테고리 삭제 (관리자) 요청 */
declare type adminDeleteCategoryRequest = {
    params?: adminDeleteCategoryRequestParams;
    path: adminDeleteCategoryRequestPath;
    body?: adminDeleteCategoryRequestBody;
};

/** 카테고리 삭제 (관리자) 응답 */
declare type adminDeleteCategoryResponse = void;
