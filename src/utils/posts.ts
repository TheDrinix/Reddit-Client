import { Post } from '../models/post';

enum PostType {
    Text = 'TEXT',
    Image = 'IMAGE',
    MultiImage = 'M-IMAGE',
    Video = 'VIDEO',
    NR_Video = 'NON-REDDIT-VIDEO',
}

export const formatPostsResponse = (res: any) => {
    const resData = res.data.children;
    const postArray: Post[] = resData.map((post: any) => {
        const postData = post.data;
        const title = postData.title;
        const numOfComments: number = postData.num_comments;
        const upvotes: number = postData.ups;
        let postType: string;
        let data: undefined | string | string[];

        if (postData.selftext) {
            postType = PostType.Text;
            data = postData.selftext;
        } else if (postData.post_hint === 'image' || postData.is_gallery) {
            if (!postData.is_gallery) {
                postType = PostType.Image;
                const url: string = postData.preview.images[0].source.url;
                const index = url.search('&amp');
                if (index !== -1) {
                    data = url.slice(0, index + 1) + url.slice(index + 5);
                } else {
                    data = url;
                }
            } else {
                postType = PostType.MultiImage;
                data = Object.values(postData.media_metadata).map(
                    (image: any) => image.s.u
                );
                console.log(data);
            }
        } else if (postData.post_hint === 'hosted:video') {
            postType = PostType.Video;
            data = postData.media.reddit_video.fallback_url;
        } else if (postData.post_hint === 'rich:video') {
            postType = PostType.NR_Video;
            const videoEmbed = postData.media.oembed.html.split(' ');
            videoEmbed.forEach((item: string) => {
                if (item.startsWith('src="')) {
                    data = item.slice(5, -1);
                }
            });

            /*&lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/BEgIGh_dAVw?feature=oembed&amp;enablejsapi=1\" frameborder=\"0\" allow=\" autoplay; clipboard-write; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;*/
        } else {
            postType = 'empty';
        }

        return new Post(title, postType, numOfComments, upvotes, data);
    });
    return postArray;
};
