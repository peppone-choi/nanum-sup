import { CommentResponseDTO } from "../dto/commentResponse.dto";

declare type adminGetCommentsRequest = {
  params?: adminGetCommentsRequestParams;
  path: adminGetCommentsRequestPath;
  body?: adminGetCommentsRequestBody;
};
declare type adminGetCommentRequestParams = {};
declare type adminGetCommentRequestPath = {
  commentId: string;
};
declare type adminGetCommentRequestBody = {};
declare type adminGetCommentResponse = CommentResponseDTO;

declare type adminCreateCommentRequestBody = {};

declare type adminCreateCommentRequest = {
  params?: adminCreateCommentRequestParams;
  path?: adminCreateCommentRequestPath;
  body: adminCreateCommentRequestBody;
};

declare type adminEditCommentResponse = void;
