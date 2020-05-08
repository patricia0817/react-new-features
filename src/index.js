import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const NoteApp = () => {
  const notesData = JSON.parse( window.localStorage.getItem( 'notes' ) )
  const [ notes, setNotes ] = useState( notesData || [] );
  const [ title, setTitle ] = useState( '' );
  const [ body, setBody ] = useState( '' );

  useEffect( () => {
    window.localStorage.setItem( 'notes', JSON.stringify( notes ) )
  } )

  const addNote = ( e ) => {
    e.preventDefault();
    setNotes( [
      ...notes,
      { title, body }
    ] )
    setTitle( '' );
    setBody( '' );
  }

  const removeNote = ( title ) => {
    setNotes( notes.filter( ( note ) => ( note.title !== title ) ) )
  }

  return (
    <div>
      <h1>Notes</h1>
      { notes.map( ( note ) => (
        <div key={ note.title }>
          <h3>{ note.title }</h3>
          <p>{ note.body }</p>
          <button onClick={ () => removeNote( note.title ) }>X</button>
        </div>
      ) ) }
      <p>Add note</p>
      <form onSubmit={ addNote }>
        <input value={ title } onChange={ ( e ) => setTitle( e.target.value ) } />
        <textarea onChange={ ( e ) => setBody( e.target.value ) } placeholder='Add note body' value={ body }></textarea>
        <button>Add note</button>
      </form>
    </div>
  )
}

// const App = ( props ) => {
//   const [ count, setCount ] = useState( props.count );
//   const [ text, setText ] = useState( '' );

//   useEffect( () => {
//     console.log( 'use effect ran' );
//     document.title = count;
//   } )

//   return (
//     <div>
//       <p>The current { text || 'count' } is { count }</p>
//       <button onClick={ () => { setCount( count + 1 ) } }>+1</button>
//       <button onClick={ () => { setCount( props.count ) } }>Reset</button>
//       <button onClick={ () => { setCount( count - 1 ) } }>-1</button>
//       <input value={ text } onChange={ ( e ) => { setText( e.target.value ) } } />
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render( <NoteApp />, document.getElementById( 'root' ) );
// ReactDOM.render( <App count={ 0 } />, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
