
import React from 'react';
import Carousel from '../../Carousel';
 
 
const CardBodyCarousel = ({ post  }) => {
    return (
        <div>
            <div className="card_body">
                {post.images.length > 0 && (
                    <div className="carousel-container">
                        <Carousel images={post.images} id={post._id} />
                    </div>
                )}
             
                
            </div>
           

        </div>

    );
};

export default CardBodyCarousel;
