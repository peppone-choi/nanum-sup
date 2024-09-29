import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/user/service/user.service.type";
import { FollowService } from "@/api/follow/service/follow.service.type";
import { PostsService } from "@/api/posts/service/posts.service.type";

export default class UserViewController {
  private _userService: UserService;
  private _followService: FollowService;
  private _postService: PostsService;
  constructor(userService: UserService, followService: FollowService, postService: PostsService) {
    this._userService = userService;
    this._followService = followService;
    this._postService = postService;
    this.myPage = this.myPage.bind(this);
    this.userDetailPage = this.userDetailPage.bind(this);
    this.userEditPage = this.userEditPage.bind(this);
    this.withDrawPage = this.withDrawPage.bind(this);
  }

  async myPage(req: Request, res: Response, next: NextFunction) {
    try {
      const myInfo = await this._userService.getUserDetail(req.user.userId);
      const following = await this._followService.getFollowingByUserId(req.user.userId);
      const follower = await this._followService.getFollowerByUserId(req.user.userId);
      res.render("client/users/myPage", {
        user: myInfo,
        following,
        follower,
      });
    } catch (error) {
      next(error);
    }
  }

  async userEditPage(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userService.getUserDetail(req.user.userId);
      res.render("client/users/userEdit", {
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async userDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userService.getUserDetail(req.params.userId);
      const following = await this._followService.getFollowingByUserId(req.params.userId);
      const follower = await this._followService.getFollowerByUserId(req.params.userId);
      const posts = await this._postService.findByUserId(req.params.userId);
      res.render("client/users/userDetail", {
        user,
        following,
        follower,
        posts,
      });
    } catch (error) {
      next(error);
    }
  }

  async withDrawPage(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userService.getUserDetail(req.user.userId);
      res.render("client/users/userDelete", {
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}
