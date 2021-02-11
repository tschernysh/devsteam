import React from 'react'
import s from './PhotoPiece.module.css'

const PhotoPiece = (props) => {
    return(
    <div onClick={ () => {props.toSinglePhoto(props.photoUrl.full) } } className={s.photo__piece}>
        <div className={s.photo__name}>{props.photoName == null ? 'unknown' : props.photoName}</div> 
        <img src={props.photoUrl.small} alt=""/>
        <div className="">{props.userName == null ? 'unknown' : props.userName}</div>
    </div>
    )
}
    



export default PhotoPiece ;