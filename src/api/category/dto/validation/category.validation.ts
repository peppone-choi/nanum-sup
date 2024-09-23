import { REGEX } from "@/api/common/validation";
import * as yup from "yup";

/** 카테고리 목록 조회 */
export const getCategoryValidator = {};

const getCategoryDetailPathValidator = yup.object({
    categoryId: yup
        .string()
        .matches(REGEX.EMPTY_VARIABLE_PATH, "categoryId 필수 입력값입니다."),
});

/** 카테고리 상세 조회 */
export const getCategoryDetailValidator = {
    path: getCategoryDetailPathValidator,
};
