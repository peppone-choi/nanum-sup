import * as yup from "yup";

/** 유저 상세 조회 Validator */
const getUserDetailPathValidator = yup.object({
  userId: yup.string().required("유저ID는 필수 입력값입니다."),
});

export const getUserDetailValidator = {
  path: getUserDetailPathValidator,
};

/** 유저 생성 Validator */

const createUserBodyValidator = yup.object({
  userId: yup.string().required(),
  email: yup.string().required(),
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
  email: yup.string().required(),
  password: yup.string(),
  role: yup.string().required(),
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
