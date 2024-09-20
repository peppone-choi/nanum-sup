export class CategoryResponseDTO {
    categoryId: string;
    title: string;
    // author: {
    //     id: string;
    //     userName: string;
    // };
    post: {
        id: string;
    }[];

    constructor(params: ICategory) {
        this.categoryId = params.id;
        this.title = params.title;
        // this.author = {
        //     id: params.author.id,
        //     userName: params.author.profile.firstName,
        // };
        this.post = params.post?.map((post) => ({ id: post.id })) || [];
    }
}
