import {transformPost} from "../transformers/index.js"


export const getPost = async (postId) =>
    fetch(`http://localhost:3001/posts/${postId}`)
        .then((loadedPost) => loadedPost.json())
        .then((loadedPost) => loadedPost && transformPost(loadedPost))
