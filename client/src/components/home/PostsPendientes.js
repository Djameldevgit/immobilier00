import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 

import LoadIcon from '../../images/loading.gif';
import LoadMoreBtn from '../LoadMoreBtn';
import { getDataAPI } from '../../utils/fetchData';
 
import PostCard from '../PostCard';
import { POST_TYPES_APROVE } from '../../redux/actions/postAproveAction';
 
const Postspendientes = () => {
  const { homePostsAprove, auth } = useSelector((state) => state);
  console.log(homePostsAprove)
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postspedientes = homePostsAprove.posts.filter((p) => p.estado === 'pendiente');
    setPosts(postspedientes);
  }, [homePostsAprove.posts]);
  
  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(`posts/pendientes?limit=${homePostsAprove.page * 9}`, auth.token);

      dispatch({
        type: POST_TYPES_APROVE.GET_POSTS_PENDIENTES,
        payload: { ...res.data, page: homePostsAprove.page + 1 },
      });
  
      setLoad(false);
    };
  
    return (
      <div className="post_thumb">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      {load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />}

      <LoadMoreBtn
        result={homePostsAprove.result}
        page={homePostsAprove.page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Postspendientes;
 