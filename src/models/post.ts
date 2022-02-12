export class Post {
    constructor(
        public title: string,
        public dataType: string,
        public numComments: number,
        public upvotes: number,
        public url: string,
        public author: string,
        public data?: any
    ) {}
}
