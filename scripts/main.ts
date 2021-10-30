import { StickyNote } from "./classes/Note";
import { Fridge } from "./classes/Fridge";
import { TinyMCEHandle } from "./classes/TinyMCEHandle";


var fridge : Fridge = new Fridge( "This a fridge" );

document.getElementById( "newNote" ).addEventListener( "click", ()=>{
    // console.log( "opachkii" );

    fridge.addStickyNote();
    fridge.renderNotes( "fridge" );
} );

document.body.onload = ()=>{
    // transfers 'fridge' to JS <------ I spent so much f*ing time on this
    setListener( fridge );
    // oh and adds some listeners I guess
};