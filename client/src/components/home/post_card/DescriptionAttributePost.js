import React from 'react';
 
const DescriptionAttributePost = ({ post }) => {
    return (
        <div className="description-container">
            <h3 className="description-title">Atributos del Post</h3>
            <ul className="attributes-list">
                {post.attributes && Object.keys(post.attributes).length > 0 ? (
                    Object.entries(post.attributes).map(([key, value]) => (
                        <li key={key} className="attribute-item">
                            <span className="attribute-key">{key}:</span>
                            <span className="attribute-value">{value}</span>
                        </li>
                    ))
                ) : (
                    <li className="attribute-item">No hay atributos disponibles</li>
                )}
            </ul>
        </div>
    );
};

export default DescriptionAttributePost;