import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="searchLabel">Video Search</label>
                        <input className="searchInput" type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar