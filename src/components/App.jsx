import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'api/imageRequest';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchWord: '',
    images: [],
    page: 1,
    largeImageURL: '',
    error: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchWord, page } = this.state;
    if (prevState.searchWord !== searchWord || prevState.page !== page) {
      this.setState({ loading: true });
      fetchImages(searchWord, page)
        .then(images => {
          console.log(images);
          if (images.hits.length === 0) {
            this.setState({
              images: [],
            });
            alert(
              'Sorry, there are no images matching your search query. Please try again.'
            );

            return;
          }
          if (prevState.searchWord !== searchWord) {
            this.setState({
              images: [...images.hits],
            });
            return;
          }
          this.setState({
            images: [...prevState.images, ...images.hits],
          });
        })
        .catch(this.onError)
        .finally(() => this.setState({ loading: false }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = searchWord => {
    if (searchWord === this.state.searchWord) {
      return;
    }

    this.setState({ searchWord, page: 1 });
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL,
    }));
  };

  onError(error) {
    alert(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  render() {
    const { loading, images, showModal, largeImageURL } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery toggleModal={this.toggleModal} images={images} />
            {loading && <Loader />}
            {images.length > 0 && !loading && (
              <Button onLoadMore={this.onLoadMore} text="Load more" />
            )}
            {showModal && (
              <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
            )}
            <ToastContainer
              theme="colored"
              position="top-right"
              autoClose={1000}
            />
          </>
        )}
      </div>
    );
  }
}
