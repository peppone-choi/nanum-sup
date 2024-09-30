import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const getPostsValidator = {};

const getPostDetailPathValidator = yup.object({
  postId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "게시글ID는 필수 입력값입니다."),
});

/** 게시글 상세 조회 Validator */
export const getPostDetailValidator = {
  path: getPostDetailPathValidator,
};

const createPostBodyValidator = yup.object({
  title: yup.string().required("제목이 입력되지 않았습니다. 제목을 입력해주세요.").max(50, "제목은 50자 이하로 입력해주세요."),
  content: yup.string().required("내용이 입력되지 않았습니다. 내용을 입력해주세요.").max(200, "내용은 200자 이하로 입력해주세요."),
});

/** 게시글 생성 Validator */
export const createPostValidator = {
  body: createPostBodyValidator,
};

const updatePostBodyValidator = yup.object({
  title: yup.string().optional().max(50, "제목은 50자 이하로 입력해주세요."),
  content: yup.string().optional(),
});

const updatePostPathValidator = yup.object({
  postId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "게시글ID는 필수 입력값입니다."),
});

/** 게시글 수정 Validator */
export const updatePostValidator = {
  body: updatePostBodyValidator,
  path: updatePostPathValidator,
};

const deletePostPathValidator = yup.object({
  postId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "게시글ID는 필수 입력값입니다."),
});

/** 게시글 삭제 Validator */
export const deletePostValidator = {
  path: deletePostPathValidator,
};
