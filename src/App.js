import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ListGalleryContainer from './components/ListGallery/ListGalleryContainer';
import { Route, Redirect } from 'react-router-dom';
import SinglePhotoContainer from './components/SinglePhoto/SinglePhotoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Redirect from='/' to='/photoList' />
      <Route path='/photoList' render={() => <ListGalleryContainer />} />
      <Route path='/singlePhoto' render={() => <SinglePhotoContainer />} />

    </div>
  );
}

export default App;
