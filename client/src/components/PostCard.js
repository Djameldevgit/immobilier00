import React from 'react'
import CardHeader from './home/post_card/CardHeader'
import CardBodyCarousel from './home/post_card/CardBodyCarousel';
import InputComment from './home/InputComment'
import CardFooterCommentLikes from './home/post_card/CardFooterCommentLikes';
import Comments from './home/Comments'
import ButtonDetails from './home/post_card/ButtonDetails';
import DescriptionAttributePost from './home/post_card/DescriptionAttributePost';
import DescriptionPost from './home/post_card/DescriptionPost';
import InformationUserPost from './home/post_card/InformationUserPost';
import { useLocation } from "react-router-dom";
import CardBodyTitle from './home/post_card/CardBodyTitle';

 const PostCard = ({ post, theme }) => {

    const location = useLocation();
    const isPostDetailPage = location.pathname.startsWith(`/post/${post._id}`);
    return (
        <div className="card my-3">
         
            <CardBodyTitle  post={post}/>
            <CardBodyCarousel post={post} theme={theme} />
            <CardFooterCommentLikes post={post} />
            {isPostDetailPage && <DescriptionAttributePost post={post} />}
            <ButtonDetails post={post} /> 
            {isPostDetailPage && <DescriptionPost post={post} />}
            {isPostDetailPage && <InformationUserPost post={post} />}
           
            {isPostDetailPage && <Comments post={post} />}
            {isPostDetailPage && <InputComment post={post} />}

        </div>
    )
}

export default PostCard
