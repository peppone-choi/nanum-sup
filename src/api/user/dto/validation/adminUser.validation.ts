import path from "path";
import * as yup from "yup";

export const adminGetUsersValidator = {};

/** 유저 상세 조회 Validator */
const adminGetUserDetailPathValidator = yup.object({
  userId: yup.string().required("유저ID는 필수 입력값입니다."),
});

export const adminGetUserDetailValidator = {
  path: adminGetUserDetailPathValidator,
};

/** 유저 생성 Validator */
const adminCreateUserBodyValidator = yup.object({
  userId: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const adminCreateUserValidator = {
  body: adminCreateUserBodyValidator,
};

/** 유저 정보 수정 Validator */

const adminUpdateUserPathValidator = yup.object({
  userId: yup.string().required(),
});

const adminUpdateUserBodyValidator = yup.object({
  email: yup.string().required(),
  password: yup.string(),
  role: yup.string().required(),
});

export const adminUpdateUserValidator = {
  path: adminUpdateUserPathValidator,
  body: adminUpdateUserBodyValidator,
};

/** 유저 삭제 Validator */
const adminDeleteUserPathValidator = yup.object({
  userId: yup.string().required(),
});

export const adminDeleteUserValidator = {
  path: adminDeleteUserPathValidator,
};
