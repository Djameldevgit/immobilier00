import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const DescriptionPost = ({ post }) => {
    const { languageReducer } = useSelector(state => state);
    const { t } = useTranslation();

    // Extraer idioma correctamente
    const language = languageReducer.language || "en";

    return (
        <div className="description-container" >
            <h3 className="description-title" style={{
            display: 'flex',
            justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
            flexDirection: 'row', // Para alinear los hijos verticalmente
        }} >{t("details", { lng: language })}</h3>
            <div className="post-info"  >
                
                <div className="info-item" style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-comment"></i>
                    <span>{t("comments", { lng: language })}: {post.comments.length || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-thumbs-up"></i>
                    <span>{t("likes", { lng: language })}: {post.likes.length || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-map"></i>
                    <span>{t("location", { lng: language })}: {post.commune || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-envelope"></i>
                    <span>{t("email", { lng: language })}: {post.email || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-user-circle"></i>
                    <span>{t("seller", { lng: language })}: {post.informacion || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-comments"></i>
                    <span>{t("allowComments", { lng: language })}: {post.comentarios || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-eye"></i>
                    <span>{t("views", { lng: language })}: {post.contadordevisitas || t("notSpecified", { lng: language })}</span>
                </div>
                <div className="info-item"style={{
                    display: 'flex',
                    justifyContent: languageReducer.language === 'ar' ? 'right' : 'flex-start', // Alinea a la derecha si es árabe
                    flexDirection: 'row', // Para alinear los hijos verticalmente
                }}>
                    <i className="fas fa-clock"></i>
                    <span>{t("adDuration", { lng: language })}: {post.duraciondelanuncio || t("notSpecified", { lng: language })}</span>
                </div>
            </div>
        </div>
    );
};

export default DescriptionPost;
