// eslint-disable-next-line no-unused-vars
import React from 'react'

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      label: '',
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSearchTitleChange = this.onSearchTitleChange.bind(this);
    this.onSelectLabelChange = this.onSelectLabelChange.bind(this);
  }

  onSearchTitleChange(evt) {
    const prevLabel = this.state.label;
    this.setState({
      title: evt.target.value,
      label: prevLabel
    }, () => {
      this.props.onSubmitParentHandler(this.state);
    });
  }

  
  onSelectLabelChange(evt) {
    const prevTitle = this.state.title;

    this.setState({
      title: prevTitle,
      label: evt.target.value
    }, () => {
      this.props.onSubmitParentHandler(this.state)
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmitParentHandler(this.state)
  }

  render() {
    return (
      <form 
        className='form__wrapper form--search'
        onSubmit={this.onFormSubmit}
      >
        <input 
          type="search" className='form--input' 
          placeholder='Find note by title...'
          value={this.state.title}
          onChange={this.onSearchTitleChange}
        />
        <select 
          className='form--select'
          value={this.state.label}
          onChange={this.onSelectLabelChange}
        >
          <option value=''>All</option>
          {
            this.props.labels.map(label => (
              <option 
                key={label.id} value={label.id}
              >
                {label.name}
              </option>
            ))
          }
        </select>
      </form>
    );
  }
}

export default SearchNotes;

