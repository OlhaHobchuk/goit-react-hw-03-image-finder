import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.currentTarget === event.target || event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleKeyDown}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt="galeryImage" />
        </div>
      </div>
    );
  }
}
