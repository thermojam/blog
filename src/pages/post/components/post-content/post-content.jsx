import styled from "styled-components"
import {H2, Icon} from "../../../../components/index.js"

const PostContentContainer = ({
                                  className,
                                  post: {
                                      id,
                                      title,
                                      imageUrl,
                                      content,
                                      publishedAt,
                                  },
                              }) => {
    return (
        <div className={className}>
            <img src={imageUrl || undefined} alt={title}/>
            <H2>{title}</H2>
            <div className="special-panel">
                <div className="published-at">
                    <Icon id='fa-calendar-o'
                          margin='0 10px 0 0'
                          onClick={() => {
                          }}/>
                    {publishedAt}
                </div>
                <div className="buttons">
                    <Icon id='fa-pencil-square-o'
                          margin='4px 10px 0 0'
                          onClick={() => {
                          }}/>
                    <Icon id='fa-trash-o'
                          margin='0 10px 0 0'
                          onClick={() => {
                          }}/>
                </div>
            </div>
            <div className="content-block">{content}</div>
        </div>

    )
}

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 20px 0;
    }

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: -20px 0 20px;
        font-size: 18px;
    }

    & .content-block {
        font-size: 20px;
    }

    & .published-at {
        display: flex;
        align-items: center;
    }

    & .buttons {
        display: flex;
        align-items: center;
    }


`;
