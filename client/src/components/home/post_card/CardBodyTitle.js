import React, { useState } from 'react'
 
const CardBodyTitle = ({ post, theme }) => {
    const [readMore, setReadMore] = useState(false)


    return (
        <div className="card_body">
           


            <div className="card_body-content"
                style={{
                    filter: theme ? 'invert(1)' : 'invert(0)',
                    color: theme ? 'white' : '#111',
                }}>
                <span>
                    {
                        post.title.length < 60
                            ? post.title
                            : readMore ? post.title + ' ' : post.title.slice(0, 60) + '.....'
                    }
                </span>
                {
                    post.title.length > 60 &&
                    <span className="readMore" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Hide title' : 'Read more'}
                    </span>
                }

            </div>
            
        </div>
    )
}

export default CardBodyTitle
