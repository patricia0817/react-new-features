import React, { useState } from 'react';

const AddNoteForm = ( { dispatch } ) => {
  const [ title, setTitle ] = useState( '' );
  const [ body, setBody ] = useState( '' );

  const addNote = ( e ) => {
    e.preventDefault();
    dispatch( { type: 'ADD_NOTE', title, body } );
    setTitle( '' );
    setBody( '' );
  }

  return (
    <div>
      <p>Add note</p>
      <form onSubmit={ addNote }>
        <input value={ title } onChange={ ( e ) => setTitle( e.target.value ) } />
        <textarea onChange={ ( e ) => setBody( e.target.value ) } placeholder='Add note body' value={ body }></textarea>
        <button>Add note</button>
      </form>
    </div>
  )
}

export { AddNoteForm as default }