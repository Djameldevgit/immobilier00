import React from 'react';
 
const DescriptionPost = ({ post }) => {
    return (
        <div className="description-container">
            <h3 className="description-title">Detalles del Post</h3>
            <div className="post-info">
                <div className="info-item">
                    <i className="fas fa-comment"></i>
                    <span>Comentarios: {post.comments.length || "0"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-thumbs-up"></i>
                    <span>Likes: {post.likes.length || "0"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-map"></i>
                    <span>Ubicación: {post.commune || "No especificado"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <span>Email: {post.email || "No especificado"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-user-circle"></i>
                    <span>Vendedor: {post.informacion || "No especificado"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-comments"></i>
                    <span>Permitir comentarios: {post.comentarios || "No especificado"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-eye"></i>
                    <span>Visitas: {post.contadordevisitas || "No especificado"}</span>
                </div>
                <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <span>Duración del anuncio: {post.duraciondelanuncio || "No especificado"}</span>
                </div>
            </div>
        </div>
    );
};

export default DescriptionPost;