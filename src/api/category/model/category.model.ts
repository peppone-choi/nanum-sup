// import { IPost } from "@/api/posts/@types/post.type";

export class Category implements ICategory {
    id: string;
    title: string;
    admin?: IUser;
    subAdmin?: IUser[];

    constructor(params: ICategory) {
        this.id = params.id;
        this.title = params.title;
        this.admin = params.admin;
        this.subAdmin = params.subAdmin;
    }
}
