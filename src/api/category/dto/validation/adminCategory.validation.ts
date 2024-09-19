import { REGEX } from "@/api/common/validation";
import * as yup from "yup";

/** 카테고리 목록 조회 */

export const adminGetCategoryValidator = {};

const adminGetCategoryDetailPathValidator = yup.object({
    categoryId: yup
        .string()
        .matches(REGEX.EMPTY_VARIABLE_PATH, "categoryId 필수 입력값입니다."),
});

/** 카테고리 상세 조회 */

export const adminGetCategoryDetailValidator = {
    path: adminGetCategoryDetailPathValidator,
};

const adminCreateCategoryBodyValidator = yup.object({
    title: yup
        .string()
        .required("카테고리명은 필수 입력값입니다.")
        .max(500, "카테고리명은 15자 이내로 입력해주세요."),
});

/** 카테고리 생성 */
export const adminCreateCategoryValidator = {
    body: adminGetCategoryValidator,
};

const adminUpdateCategoryBodyValidator = yup.object({
    title: yup.string().max(15, "카테고리명은 15자 이내로 입력해주세요."),
    content: yup.string(),
});

const adminUpdateCategoryPathValidator = yup.object({
    categoryId: yup
        .string()
        .matches(REGEX.EMPTY_VARIABLE_PATH, "categoryId는 필수 입력값입니다."),
});

/** 카테고리 수정  */
export const adminUpdateCategoryValidator = {
    body: adminUpdateCategoryBodyValidator,
    path: adminUpdateCategoryPathValidator,
};

const adminDeleteCategoryPathValidator = yup.object({
    categoryId: yup
        .string()
        .matches(REGEX.EMPTY_VARIABLE_PATH, "categoryId는 필수 입력값입니다."),
});

/** 카테고리 삭제  */
export const adminDeleteCategoryValidator = {
    path: adminDeleteCategoryPathValidator,
};
