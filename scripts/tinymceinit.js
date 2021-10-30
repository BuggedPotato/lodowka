tinymce.init({
    selector: '#editingTextArea',
    custom_ui_selector: '.btnTinyMCE', // ????

    skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
    width: '50vw',
    height: '40vh',
    max_height: '80vh',
    min_height: 200,

    toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent',
    branding: false            
});

// adds a listener which saves the input from editor into the HTML note and into the note in Fridge
function setListener( leFridge )
{
    document.getElementById( "editor" ).addEventListener( "submit", (e)=>{
        e.preventDefault();

        let content = tinymce.get( "editingTextArea" ).getContent();
        console.log( content );

        let noteId = document.getElementById( "wysiwyg" ).dataset.editingNote;
        let targetedNote = document.getElementById( noteId );
        targetedNote.children[0].innerHTML = content; // this is the textbox

        // oh my god it works
        // console.log( leFridge );
        let noteObj = leFridge.getNoteOfId( parseInt( noteId ) );
        // console.log( noteObj );
        noteObj.text = content;
        // console.table( leFridge.stickyNotes );
    } );
}

// sets the text inside the editor to the clicked note's text
function setEditorContent( note )
{
    tinymce.activeEditor.setContent( note.text );
}