import {Comment} from "./components"
import {useState} from "react"
import {Icon} from "../../../../components/index.js"
import {useDispatch, useSelector} from "react-redux"
import {selectUserId} from "../../../../selectors"
import {useServerRequest} from "../../../../hooks"
import {addCommentAsync} from "../../../../actions"
import styled from "styled-components"


const CommentsContainer = ({className, comments, postId}) => {
    const [newComment, setNewComment] = useState('')
    const userId = useSelector(selectUserId)
    const dispatch = useDispatch()
    const requestServer = useServerRequest()

    const onNewCommentAdd = (userId, postId, content) => {
        dispatch(addCommentAsync(requestServer, userId, postId, content),)
    }

    return (
        <div className={className}>
            <div className="new-comment">
                <textarea name="comment" value={newComment} placeholder='Комментарий ..'
                          onChange={({target}) => setNewComment(target.value)}>
                </textarea>
                <Icon id='fa-paper-plane-o'
                      margin='0 0 0 10px'
                      onClick={() => onNewCommentAdd(userId, postId, newComment)}/>
            </div>
            <div className="comments">
                {comments.map(({id, author, content, publishedAt}) => (
                    <Comment
                        key={id}
                        id={id}
                        author={author}
                        content={content}
                        publishedAt={publishedAt}
                    >
                    </Comment>
                ))}
            </div>

        </div>

    )
}

export const Comments = styled(CommentsContainer)`
    width: 580px;
    display: flex;
    margin: 20px auto;

    & .new-comment {
        display: flex;
        width: 100%;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        resize: none;
        width: 100%;
        height: 120px;
        padding: 10px;
        font-size: 18px;
    }
`;
