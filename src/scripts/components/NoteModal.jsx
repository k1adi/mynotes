// eslint-disable-next-line no-unused-vars
import React from 'react'

class NoteModal extends React.Component {
  constructor(props) {
    super(props)
    const { id, label, title, body, archived } = this.props.note;

    this.state = {
      id,
      label,
      title,
      body,
      archived,
      titleLength: 0,
      currentNote: this.props.note,
    }

		this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onInputTitleHandler = this.onInputTitleHandler.bind(this);
  }

  onInputTitleHandler(evt) {
    if(evt.target.value.length <= 50) {
      this.setState(() => ({
        title: evt.target.value,
        titleLength: evt.target.value.length
      }));
    }
  }

  onSubmitFormHandler(evt) {
    evt.preventDefault();
    this.props.onHideModal()
    this.props.onSubmitParentHandler(this.state)
  }

  render() {
    return (
      <div className={`modal__wrapper ${this.props.isModalVisible ? '' : 'hide'} `}
      >
        <div className='modal__content'>
          <div className='modal__card'>
            <div className='modal__card__header'>
              <h2 className='modal__card__title'>{`${this.props.formName} Note`}</h2>
              <button 
                className='modal__card__close'
                onClick={() => this.props.onHideModal()}
              >
                ✕
              </button>
            </div>

            <div className='modal__card__body'>
              <form 
                className='form__wrapper'
                onSubmit={this.onSubmitFormHandler}
              >
                <div className='input-wrapper'>
                  <label htmlFor="noteTitle">Title</label>
                  <input 
                    type='text' name='noteTitle' id='noteTitle'
                    placeholder='Note title...'
                    className='form--input'
                    value={this.state.title}
                    onChange={this.onInputTitleHandler}
                    required
                  />
                  <small className='form--help'>
                    <span>{this.state.titleLength}</span>/50
                  </small>
                </div>

                <div className='input-wrapper'>
                  <label htmlFor="noteDesc">Description</label>
                  <textarea 
                    name="noteDesc"
                    id='noteDesc'
                    rows='6'
                    className='form--input'
                    placeholder='Note Description...'
                    value={this.state.body}
                    onChange={(evt) => this.setState({ body: evt.target.value })}
                    required
                  >
                  </textarea>
                </div>

                <div className='input-wrapper'>
                  <label htmlFor="noteLabel">Label</label>
                  <select
                    id='noteLabel'
                    className='form--select'
                    value={this.state.label}
                    onChange={(evt) => this.setState({label: evt.target.value})}
                    required
                  >

                  {this.props.formName == 'Add' && (
                    <option value=" " disabled hidden selected>Select a Label</option>
                  )}

                  {
                    this.props.labels.map(label => (
                      <option 
                        key={label.id} 
                        value={label.id}
                      >
                          {label.name}
                      </option>
                    ))
                  }
                  </select>
                </div>
              
                { this.props.formName === 'Edit' && (
                  <div className='input-wrapper'>
                    <input 
                      type="checkbox" name="noteArchive" id="noteArchive"
                      className='form--checkbox'
                      checked={this.state.archived}
                      onChange={(evt) => this.setState({ archived: evt.target.checked })}
                    />
                    <label htmlFor="noteArchive">Archive</label>
                  </div>
                )}

                <div className='form__button'>
                  <input 
                    type='submit' 
                    className='button button--main'
                    value={this.props.formName === 'Add' ? 'Submit' : 'Update'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default NoteModal;
