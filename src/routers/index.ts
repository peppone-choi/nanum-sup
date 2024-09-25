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

const COMMENT_ROUTES = {
  /** 관리자 댓글 API */
  ADMIN_COMMENT_API: "/admin-api/comment",
  /** 댓글 API */
  COMMENT_API: "/api/comment",
  /** 관리자 댓글 뷰 */
  ADMIN_COMMENT_VIEW: "/admin/comment",
  /** 댓글 뷰 */
  COMMENT_VIEW: "/comment",
} as const;

const USER_ROUTES = {
  /** 유저 API */
  USER_API: "/api/users",
  /** 관리자 유저 API */
  ADMIN_USER_API: "/admin-api/users",
  /** 유저 뷰 */
  USER_VIEW: "/users",
  /** 관리자 유저 뷰 */
  ADMIN_USER_VIEW: "/admin/users",
} as const;

const LIKE_ROUTES = {
  LIKE_API: "/api/likes",
  ADMIN_LIKE_API: "/admin-api/likes",
} as const;

export const ROUTES_INDEX = {
  ...CATEGORY_ROUTES,
  ...POST_ROUTES,
  ...AUTH_ROUTES,
  ...COMMENT_ROUTES,
  ...USER_ROUTES,
  ...LIKE_ROUTES,
} as const;
