import React from "react";

class SearchBar extends React.Component {
    onFormSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }
  render() {
    return (
      <div className = "ui segment">
        <form onSubmit = {this.onFormSubmit} className = "ui form">
        <div className = "field"> 
          <label>Image search!</label>
          <input type="text" onChange = {e => this.setState({term: this.onInputChange})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
