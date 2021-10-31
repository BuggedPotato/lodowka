import { StickyNote } from "./classes/Note";
import { Fridge } from "./classes/Fridge";
import { TinyMCEHandle } from "./classes/TinyMCEHandle";
import { DBHandle } from "./classes/DBHandle";

const urlParams = new URLSearchParams(window.location.search);

const a : string = urlParams.get( "fridgeName" );
// console.log( "fridgeName: " + fridgeName );
var fridge : Fridge = new Fridge( a );

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
// console.log( DBHandle.getFridgeData( fridge.name ) );\

document.getElementById( "leBtn" ).addEventListener( "click", ()=>{
    // console.log( JSON.stringify( fridge ) );
    DBHandle.saveFridge( fridge );
} );
