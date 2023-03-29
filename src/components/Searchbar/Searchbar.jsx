import { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  handleSearchChange = event => {
    this.setState({ searchWord: event.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchWord.trim() === '') {
      toast.error('Please, enter something');
      return;
    }
    this.props.onSubmit(this.state.searchWord);

    event.currentTarget.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.buttonLabel}>
              <FcSearch />
            </span>
          </button>

          <input
            name="searchWord"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}
