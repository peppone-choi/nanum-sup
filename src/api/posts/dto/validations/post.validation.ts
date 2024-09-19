import { REGEX } from "@/api/common/validations";
import * as yup from "yup";


/** 게시글 목록 조회 validator */
export const getPostsValidator = {};

const getPostDetailValidator = yup.object({
  postId: yup
   .string()
   .matches(REGEX.EMPTY_VARIABLE_PATH, "게시글ID는 필수 입력사항입니다.")
   .required(),
});

/** 게시글 상세 조회 validator */
export const getPostDetailValidator = {
  path: getPostDetailPathValidator,
};