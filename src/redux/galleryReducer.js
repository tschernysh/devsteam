const UPDATE_PHOTOS = 'UPDATE-PHOTOS'
const TO_SINGLE_PHOTO = 'TO-SINGLE-PHOTO'
const CHANGE_PAGE = 'CHANGE-PAGE'

let initial = {
    photos: [],
    page: 1,
    per_page: 21,
    photosCount: 1050,
    singlePhotoUrl: ''
}

const galleryReducer = (state = initial , action) => {
    switch(action.type){
        case UPDATE_PHOTOS:
            return{
                ...state,
                photos: action.newPhotos
            }
        case TO_SINGLE_PHOTO:
            return{
                ...state,
                singlePhotoUrl: action.photoUrl
            }
        case CHANGE_PAGE:
            return{
                ...state,
                page: action.number
            }
        default:
            return state
    }
}

export const toSinglePhotoAC = (url) => ({
    type: TO_SINGLE_PHOTO,
    photoUrl: url
})
export const updatePhotosAC = (photos) => ({
    type: UPDATE_PHOTOS,
    newPhotos: photos
})
export const changePageAC = (pageNumber) => ({
    type: CHANGE_PAGE,
    number: pageNumber
})
export default galleryReducer;