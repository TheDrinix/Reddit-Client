export interface Subreddit {
    name: string;
    imgPath: string;
}

export const subreddits = {
    namespaced: true,
    state: {
        subreddits: [
            {
                name: 'r/popular',
                imgPath: new URL(
                    '../assets/popular3x_87028.png',
                    import.meta.url
                ),
            },
        ],
        searchResults: [],
        searchResultsLoading: false,
    },
    mutations: {
        addSubreddit(state: any, subreddit: Subreddit) {
            const index = state.searchResults.findIndex(
                (res: Subreddit) => res.name === subreddit.name
            );
            state.searchResults.splice(index, 1);
            state.subreddits.push(subreddit);
        },
        removeSubreddit(state: any, index: number) {
            state.subreddits.splice(index, 1);
        },
        loadSavedSubreddits(state: any) {
            const loaded = localStorage.getItem('savedSubreddits');
            if (loaded) {
                state.subreddits = JSON.parse(loaded);
            }
        },
        saveSearchResults(state: any, searchResults: Subreddit[]) {
            state.searchResults = searchResults;
        },
    },
    actions: {
        async search({ state, commit }: any, searchTerm: string) {
            const searchResults: Subreddit[] = [];
            state.searchResultsLoading = true;
            if (searchTerm) {
                const response = await fetch(
                    `https://www.reddit.com/subreddits/search.json?q=${searchTerm.toLowerCase()}&include_over_18=on`
                );
                if (response.ok) {
                    const jsonResponse = await response.json();
                    const urls: string[] = jsonResponse.data.children.map(
                        (res: any) => {
                            return `https://www.reddit.com${res.data.url.slice(
                                0,
                                -1
                            )}/about.json`;
                        }
                    );
                    let jsonResponses;
                    try {
                        const responses = await Promise.all(
                            urls.slice(0, 10).map((url: string) => fetch(url))
                        );
                        jsonResponses = await Promise.all(
                            responses.map((res: any) => res.json())
                        );
                    } catch (error) {
                        console.error(error);
                    }
                    if (!jsonResponses) {
                        return;
                    }
                    jsonResponses.forEach((res: any, index: number) => {
                        searchResults.push({
                            name: res.data.display_name_prefixed,
                            imgPath: res.data.icon_img,
                        });
                    });
                }
            }
            state.searchResultsLoading = false;
            const filteredResult = searchResults.filter((res: Subreddit) => {
                return !state.subreddits.some(
                    (subreddit: Subreddit) =>
                        res.name.toLowerCase() === subreddit.name.toLowerCase()
                );
            });
            commit('saveSearchResults', filteredResult);
        },
    },
};
