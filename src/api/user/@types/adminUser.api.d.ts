/** [사용자] 유저 전체 리스트 확인 요청 */
declare type getAdminUsersRequestPath = {};

declare type getAdminUsersRequestBody = {};

declare type getAdminUsersRequestParams = {};

declare type getAdminUsersRequest = {
  params: getCategoryRequestParams;
  path?: getCategoryRequestPath;
  body?: getCategoryRequestBody;
};

/** [사용자] 유저 전체 리스트 확인 응답 */
declare type getAdminUsersResponse = Array<UserResponseDto[]>;
/** [사용자] 유저 상세 정보 확인 요청 */
declare type getAdminUserDetailRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type getAdminUserDetailRequestBody = {};
declare type getAdminUserDetailRequestParams = {};
declare type getAdminUserDetailRequest = {
  params?: getAdminUserDetailRequestParams;
  path: getAdminUserDetailRequestPath;
  body?: getAdminUserDetailRequestBody;
};
/** [사용자] 유저 상세 정보 확인 응답 */
declare type getAdminUserDetailResponse = UserResponseDto | null;
/** [사용자] 회원가입 요청 */
declare type createAdminUserRequestPath = {};
declare type createAdminUserRequestBody = {
  accountId: string;
  password: string;
  email: string;
};
declare type createAdminUserRequestParams = {};
declare type createAdminUserRequest = {
  params?: createAdminUserRequestParams;
  path?: createAdminUserRequestPath;
  body: createAdminUserRequestBody;
};
/** [사용자] 회원 가입 응답 */
declare type createAdminUserResponse = UserResponseDto | null;
/** [사용자] 유저 정보 수정 요청 */
declare type updateAdminUserRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type updateAdminUserRequestBody = {
  email: string;
  password?: string;
  role: string;
};
declare type updateAdminUserRequestParams = {};
declare type updateAdminUserRequest = {
  params?: updateAdminUserRequestParams;
  path: updateAdminUserRequestPath;
  body: updateAdminUserRequestBody;
};
/** [사용자] 유저 정보 수정 응답 */
declare type updateAdminUserResponse = void;
/** [사용자] 유저 삭제 요청 */
declare type deleteAdminUserRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type deleteAdminUserRequestBody = {};
declare type deleteAdminUserRequestParams = {};
declare type deleteAdminUserRequest = {
  params?: deleteAdminUserRequestParams;
  path: deleteAdminUserRequestPath;
  body?: deleteAdminUserRequestBody;
};
/** [사용자] 유저 삭제 응답 */
declare type deleteAdminUserResponse = void;
