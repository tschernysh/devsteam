import React from 'react'
import * as axios from 'axios'
import PhotoPiece from './PhotoPiece/PhotoPiece'
import s from './ListGallery.module.css'


class ListGallery extends React.Component{
    
    componentDidMount(){

        axios
            .get(`https://api.unsplash.com/search/photos?page=${this.props.listGallery.page}&per_page=${this.props.listGallery.per_page}&query=london&client_id=6FRCojYLwmOTdPywGnAswpkbNn73zkHNt8c7Yvkx0II`)
            .then(Response => {
                this.props.updatePhotos(Response.data.results);
            })
    }
    toSinglePhoto = (url) => {
        this.props.getPhotoUrl(url)
    }

    changePage = (newNumber) => {
        this.props.changePage(newNumber);
        axios
            .get(`https://api.unsplash.com/search/photos?page=${newNumber}&per_page=${this.props.listGallery.per_page}&query=london&client_id=6FRCojYLwmOTdPywGnAswpkbNn73zkHNt8c7Yvkx0II`)
            .then(Response => {
                this.props.updatePhotos(Response.data.results);
            })
    }

    
    render(){

        let pagesCount = Math.ceil(this.props.listGallery.photosCount / this.props.listGallery.per_page);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }    


        return(
            <div>
                <div className={s.pages__btn}>
                    {pages.map(p => <span onClick={ () => {this.changePage(p)}} className={this.props.listGallery.page == p && s.active__page }>{p}</span>)}
                </div>

            <div className={s.gallery}>
                {this.props.listGallery.photos.map(p => <PhotoPiece toSinglePhoto={this.toSinglePhoto} photoName={p.alt_description} photoUrl={p.urls} userName={p.user.username} />)}
            </div>
            </div>
            
        );
    }
}


export default ListGallery;