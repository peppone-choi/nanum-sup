import UserResponseDto from "../dto/userResponse.dto";

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
/** [사용자] 회원가입 요청 */
/** [사용자] 회원 가입 응답 */
/** [사용자] 유저 정보 수정 요청 */
/** [사용자] 유저 정보 수정 응답 */
/** [사용자] 유저 삭제 요청 */
/** [사용자] 유저 삭제 응답 */
