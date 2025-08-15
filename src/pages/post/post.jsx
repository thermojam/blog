import { PostContent, Comments } from "./components/index.js"
import { useParams } from 'react-router-dom'
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { useServerRequest} from "../../hooks"
import {loadPostAsync} from "../../actions/index.js"
import {selectPost} from "../../selectors"
import styled from "styled-components"

const PostContainer = ({className}) => {
    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    const post = useSelector(selectPost)

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))

    }, [dispatch, requestServer, params.id])

    return (
        <div className={className}>
            <PostContent post={post} />
            <Comments comments={post.comments} postId={post.id}/>
        </div>
    )
}

export const Post = styled(PostContainer)`
    padding: 40px 80px;

`;
