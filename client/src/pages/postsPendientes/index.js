import React, { useEffect } from 'react'

import Status from '../../components/home/Status'
import PostsPendientes from '../../components/home/PostsPendientes'
 

 

let scroll = 0;

const Index = () => {
     

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home  mx-0">
         
                <Status />

                {
                 
                        <PostsPendientes />
                }
                
            
            
             
        </div>
    )
}

export default Index
