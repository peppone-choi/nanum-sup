/** [사용자] 유저 전체 리스트 확인 요청 */
declare type getUsersRequestPath = {};

declare type getUsersRequestBody = {};

declare type getUsersRequestParams = {};

declare type getUsersRequest = {
  params: getCategoryRequestParams;
  path?: getCategoryRequestPath;
  body?: getCategoryRequestBody;
};

/** [사용자] 유저 전체 리스트 확인 응답 */
declare type getUsersResponse = Array<UserResponseDto[]>;
/** [사용자] 유저 상세 정보 확인 요청 */
declare type getUserDetailRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type getUserDetailRequestBody = {};
declare type getUserDetailRequestParams = {};
declare type getUserDetailRequest = {
  params?: getUserDetailRequestParams;
  path: getUserDetailRequestPath;
  body?: getUserDetailRequestBody;
};
/** [사용자] 유저 상세 정보 확인 응답 */
declare type getUserDetailResponse = UserResponseDto | null;
/** [사용자] 회원가입 요청 */
declare type createUserRequestPath = {};
declare type createUserRequestBody = {
  accountId: string;
  password: string;
  email: string;
};
declare type createUserRequestParams = {};
declare type createUserRequest = {
  params?: createUserRequestParams;
  path?: createUserRequestPath;
  body: createUserRequestBody;
};
/** [사용자] 회원 가입 응답 */
declare type createUserResponse = UserResponseDto | null;
/** [사용자] 유저 정보 수정 요청 */
declare type updateUserRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type updateUserRequestBody = {
  email: string;
  password?: string;
  role: string;
};
declare type updateUserRequestParams = {};
declare type updateUserRequest = {
  params?: updateUserRequestParams;
  path: updateUserRequestPath;
  body: updateUserRequestBody;
};
/** [사용자] 유저 정보 수정 응답 */
declare type updateUserResponse = UserResponseDto | null;
/** [사용자] 유저 삭제 요청 */
declare type deleteUserRequestPath = {
  /** 유저 ID */
  userId: string;
};
declare type deleteUserRequestBody = {};
declare type deleteUserRequestParams = {};
declare type deleteUserRequest = {
  params?: deleteUserRequestParams;
  path: deleteUserRequestPath;
  body?: deleteUserRequestBody;
};
/** [사용자] 유저 삭제 응답 */
declare type deleteUserResponse = void;
