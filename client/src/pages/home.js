import React, { useEffect ,useState} from 'react'

 
import Posts from '../components/home/Posts'
 

import { useDispatch, useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import { getPosts } from '../redux/actions/postAction'
  
 
let scroll = 0;

const Home = () => {
    const { homePosts ,auth} = useSelector(state => state)
 const dispatch = useDispatch()
    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    const [prevPostCount, setPrevPostCount] = useState(homePosts.posts.length);

    useEffect(() => {
        if (homePosts.posts.length > prevPostCount) {
            dispatch(getPosts(auth.token)); 
            setPrevPostCount(homePosts.posts.length);
        }
    }, [homePosts.posts.length, dispatch, auth.token, prevPostCount]);

  
    return (
        <div className="home  mx-0">
         
           

                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }
                
            
            
             
        </div>
    )
}

export default Home
