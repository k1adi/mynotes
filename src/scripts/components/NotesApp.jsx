// eslint-disable-next-line no-unused-vars
import React from 'react';
import ButtonShowModal from './ButtonShowModal';
import NoteModal from './NoteModal';
import NoteDetail from './NoteDetail';
import SearchNotes from './SearchNotes';
import NotesTabs from './NotesTabs';

import { FaPencil } from "react-icons/fa6";
import { getSelectedNote, noteObject } from '../utils/data-notes';


class NotesApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noteDetailIsVisible: false,
			noteModalAddIsVisible: false,
			noteModalEditIsVisible: false,
			selectedNote: noteObject,
		};

		this.onGetDetailNoteHandler = this.onGetDetailNoteHandler.bind(this);
		this.onToggleNoteModalHandler = this.onToggleNoteModalHandler.bind(this);
		this.onToggleCardDetailHandler = this.onToggleCardDetailHandler.bind(this);
	}

	onToggleNoteModalHandler() {
		this.setState((prevState) => ({
			noteModalAddIsVisible: !prevState.noteModalAddIsVisible,
			selectedNote: noteObject,
		}));
	}

	onGetDetailNoteHandler(id) {
		this.setState((prevState) => ({
			noteModalEditIsVisible: !prevState.noteModalEditIsVisible,
			selectedNote: getSelectedNote(this.props.notes, id)
		}));
	}

	onToggleCardDetailHandler(id) {
		this.setState((prevState) => ({
			noteDetailIsVisible: !prevState.noteDetailIsVisible,
			selectedNote: getSelectedNote(this.props.notes, id)
		}));
	}

	render() {
		return (
			<div className='container--wrap'>
				{this.state.noteModalAddIsVisible && (
					<NoteModal
						formName='Add'
						labels={this.props.labels}
						note={this.state.selectedNote}
						isModalVisible={this.state.noteModalAddIsVisible}
						onSubmitParentHandler={this.props.onCreateNoteHandler}
						onHideModal={this.onToggleNoteModalHandler}
					/>
				)}

				{this.state.noteModalEditIsVisible && (
					<NoteModal
						formName='Edit'
						labels={this.props.labels}
						note={this.state.selectedNote}
						isModalVisible={this.state.noteModalEditIsVisible}
						onSubmitParentHandler={this.props.onEditNoteHandler}
						onHideModal={this.onGetDetailNoteHandler}
					/>
				)}

				{this.state.noteDetailIsVisible && (
					<NoteDetail
						labels={this.props.labels}
						note={this.state.selectedNote}
						isModalVisible={this.state.noteDetailIsVisible}
						onToggleCardDetail={this.onToggleCardDetailHandler}
					/>
				)}

				<div className='wrapper--add-note'>
					<ButtonShowModal
						classList='button button--main button--large'
						btnIcon={<FaPencil className='icon'/>}
						btnText='Create New Note'
						onShowModalHandler={this.onToggleNoteModalHandler}
					/>
				</div>

				<div className='wrapper--search-note'>
					<SearchNotes 
						labels={this.props.labels}
            onSubmitParentHandler={this.props.onSearchHandler}
					/>
				</div>

				<div className='wrapper--tab-note'>
					<NotesTabs 
						notes={this.props.notes}
						labels={this.props.labels}
						onOpenDetail={this.onToggleCardDetailHandler}
						onEditNote={this.onGetDetailNoteHandler}
						onDeleteNote={this.props.onDeleteNote}
					/>
				</div>
			</div>
		);
	}
}

export default NotesApp;