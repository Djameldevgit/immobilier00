 
import CardHeader from './CardHeader';

const CardBodyTitle = ({ post }) => {
    
    return (
        <div className="card_body">

            <div className="title0">
                {post.subCategory}

            </div>
            <div className="title2">
                {post.title}
            </div>
            <div  className='card-header' >
               <CardHeader post={post} />  
            </div>
            

        </div>
    )
}

export default CardBodyTitle
