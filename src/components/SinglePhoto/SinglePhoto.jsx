import React from 'react'
import s from './SinglePhoto.module.css'


const SinglePhoto = (props) => {
    return(
        <div className={s.single__block}>
            {props.singlePhotoUrl == '' ? 'Click on any photo in "List of Photos" to see it in fullsize' : <img src={props.singlePhotoUrl} alt=""/> }
        </div>
    )
}

export default SinglePhoto