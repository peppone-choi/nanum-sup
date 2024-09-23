import * as yup from "yup";

/** 유저 상세 조회 Validator */
const getUserDetailPathValidator = yup.object({
  userId: yup.string().required("유저 ID는 필수 입력값입니다."),
});

export const getUserDetailValidator = {
  path: getUserDetailPathValidator,
};

/** 유저 생성 Validator */

const createUserBodyValidator = yup.object({
  accountId: yup.string().required().max(30),
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export const createUserValidator = {
  body: createUserBodyValidator,
};

/** 유저 정보 수정 Validator */

const updateUserPathValidator = yup.object({
  userId: yup.string().required(),
});

const updateUserBodyValidator = yup.object({
  email: yup.string().email(),
  password: yup.string(),
  role: yup.string(),
});

export const updateUserValidator = {
  path: updateUserPathValidator,
  body: updateUserBodyValidator,
};

/** 유저 삭제 Validator */
const deleteUserPathValidator = yup.object({
  userId: yup.string().required(),
});

export const deleteUserValidator = {
  path: deleteUserPathValidator,
};
