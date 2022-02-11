export class Post {
    constructor(
        public title: string,
        public dataType: string,
        public numComments: number,
        public upvotes: number,
        public data?: any
    ) {}
}
