export interface Subreddit {
    name: string;
    imgPath: string;
}

export const subreddits = {
    namespaced: true,
    state: {
        subreddits: [
            {
                name: 'r/pcmasterrace',
                imgPath:
                    'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
            },
            {
                name: 'r/pcmasterrace',
                imgPath:
                    'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
            },
            {
                name: 'r/pcmasterrace',
                imgPath:
                    'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
            },
        ],
    },
    mutations: {
        addSubreddit(state: any, subreddit: Subreddit) {
            state.subreddits.push(subreddit);
        },
        removeSubreddit(state: any, index: number) {
            state.subreddits.splice(index, 1);
        },
    },
    actions: {},
};
