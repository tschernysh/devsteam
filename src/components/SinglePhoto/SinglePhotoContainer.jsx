import React from 'react'
import { connect } from 'react-redux'
import SinglePhoto from './SinglePhoto'

const mapStateToProps = (state) => {
    debugger
    return{
        singlePhotoUrl: state.listGallery.singlePhotoUrl
    }
}



const SinglePhotoContainer = connect(mapStateToProps)(SinglePhoto)

export default SinglePhotoContainer