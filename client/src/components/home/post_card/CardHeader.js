import React from 'react'

import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import {  deletePost } from '../../../redux/actions/postAction'
import { BASE_URL } from '../../../utils/config'
import { aprovarPostPendiente } from '../../../redux/actions/postAproveAction'

const CardHeader = ({ post }) => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()


    const handleAprovePost = () => {
        if (window.confirm("¿Deseas aprobar este post?")) {
            dispatch(aprovarPostPendiente({post, auth}));
            history.push("/postsPendientes");
        }
    };
    


    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } })
    }

    const handleDeletePost = () => {
        if (window.confirm("Are you sure want to delete this post?")) {
            dispatch(deletePost({ post, auth, socket }))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }

    return (
        <div className="card_header">


            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    more_horiz
                </span>

                <div className="dropdown-menu">
                    {
                        auth.user._id === post.user._id &&
                        <>
                            <div className="dropdown-item" onClick={handleAprovePost}>
                                <span className="material-icons">create</span> Aprovar Post
                            </div>

                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span className="material-icons">create</span> Edit Post
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span className="material-icons">delete_outline</span> Remove Post
                            </div>
                        </>
                    }

                    <div className="dropdown-item" onClick={handleCopyLink}>
                        <span className="material-icons">content_copy</span> Copy Link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
