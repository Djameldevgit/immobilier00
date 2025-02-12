import React, { useEffect } from 'react'
 

import LoadIcon from '../../images/loading.gif'
import { useSelector  } from 'react-redux';
import PostsPendientes from '../../components/home/PostsPendientes';
 
let scroll = 0;
const Index = () => {

  const { homePostsAprove  } = useSelector(state => state)
 

  window.addEventListener('scroll', () => {
    if (window.location.pathname === '/') {
      scroll = window.pageYOffset
      return scroll;
    }
  })

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: 'smooth' })
    }, 100)
  }, [])
   


  return (
  
      
        <div className="home">






          {
            homePostsAprove.loading
              ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
              : (homePostsAprove.posts === 0 && homePostsAprove.posts.length === 0)
                ?    <h2 className="text-center">Aucun résultat trouvé pour cette recherche</h2>
                : <PostsPendientes />
          }








        </div>

    
  )
}

export default Index
