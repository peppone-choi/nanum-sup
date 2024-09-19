/** 카테고리 라우터 */
const CATEGORY_ROUTES = {
    /** 관리자 카테고리 API */
    ADMIN_CATEGORY_API: "/admin-api/category",
    /** 카테고리 API */
    CATEGORY_API: "/api/category",
    /** 관리자 카테고리 뷰 */
    ADMIN_CATEGORY_VIEW: "/admin/category",
    /** 카테고리 뷰 */
    CATEGORY_VIEW: "/category",
} as const;

export const ROUTES_INDEX = {
    ...CATEGORY_ROUTES,
} as const;
