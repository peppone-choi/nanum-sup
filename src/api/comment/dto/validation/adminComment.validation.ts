import { REGEX } from "@/api/common/validation";
import * as yup from "yup";

/** 댓글 목록 조회 */

export const adminGetCommentValidator = {};

const adminGetCommentDetailPathValidator = yup.object({
  commentId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "commentId 필수 입력값입니다."),
});

/** 댓글 상세 조회 */

export const adminGetCommentDetailValidator = {
  path: adminGetCommentDetailPathValidator,
};

export const adminCreateCommentBodyValidator = yup.object({
  title: yup.string().required("댓글명은 필수 입력값입니다.").max(500, "댓글명은 15자 이내로 입력해주세요."),
});

/** 댓글 생성 */
export const adminCreateCommentValidator = {
  body: adminGetCommentValidator,
};

const adminEditCommentBodyValidator = yup.object({
  title: yup.string().max(15, "댓글명은 15자 이내로 입력해주세요."),
  content: yup.string(),
});

const adminEditCommentPathValidator = yup.object({
  commentId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "commentId는 필수 입력값입니다."),
});

/** 댓글 수정  */
export const adminEditCommentValidator = {
  body: adminEditCommentBodyValidator,
  path: adminEditCommentPathValidator,
};

const adminDeleteCommentPathValidator = yup.object({
  commentId: yup.string().matches(REGEX.EMPTY_VARIABLE_PATH, "commentId는 필수 입력값입니다."),
});

/** 댓글 삭제  */
export const adminDeleteCommentValidator = {
  path: adminDeleteCommentPathValidator,
};
