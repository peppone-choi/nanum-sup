export class category implements ICategory {
    id: string;
    title: string;
    // post: IPost;
    // author: IUSer;

    constructor(params: ICategory) {
        this.id = params.id;
        this.title = params.title;
        // this.post = params.post;
        // this.author = params.author;
    }
}
