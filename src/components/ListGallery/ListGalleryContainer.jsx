import React from 'react'
import {connect} from 'react-redux'
import ListGallery from './ListGallery'
import { updatePhotosAC , toSinglePhotoAC, changePageAC} from '../../redux/galleryReducer'


const mapStateToProps = (state) => {
    return{
        listGallery: state.listGallery
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updatePhotos(newPhotos){
            dispatch(updatePhotosAC(newPhotos))
        },
        getPhotoUrl(url){
            dispatch(toSinglePhotoAC(url))
        },
        changePage(pageNumber){
            dispatch(changePageAC(pageNumber))
        }
    }
}


const ListGalleryContainer = connect(mapStateToProps, mapDispatchToProps)(ListGallery);

export default ListGalleryContainer;