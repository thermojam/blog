import {addComment, getComments, getPost} from "../api"
import {ROLE} from "../constants/index.js"
import {sessions} from "../sessions.js"

export const addPostComment = async (userSession, userId, postId, content) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        }
    }

    await addComment(userId, postId, content)

    const post = await getPost(postId);

    const comments = await getComments(postId);

    return {
        error: null,
        res: {
            ...post,
            ...comments
        }
    }
}
