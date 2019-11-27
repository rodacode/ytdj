import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <input type="text" className="form-control" onChange={this.handleChange} name='video-search' placeholder='Search...' value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;