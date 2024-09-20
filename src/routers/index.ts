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


/** 게시글 라우터 */
const POST_ROUTES = {
    /** 관리자 게시글 API */
    ADMIN_POSTS_API: "/admin-api/posts",
    /** 사용자 게시글 API */
    POSTS_API: "/api/posts",
    /** 관리자 게시글 뷰 */
    ADMIN_POST_VIEW: "/admin/posts",
    /** 사용자 게시글 뷰 */
    POST_VIEW: "/posts",
} as const;


/** 인증 라우터 */
const AUTH_ROUTES = {
    /** Auth API */
    AUTH_API: "/api/auth",
    /** 유저 인증 뷰 */
    AUTH_VIEW: "/auth",
    /** 관리자 인증 뷰 */
    ADMIN_AUTH_VIEW: "/admin/auth",
  } as const;


export const ROUTES_INDEX = {
    ...CATEGORY_ROUTES,
    ...POST_ROUTES,
    ...AUTH_ROUTES,
} as const;
