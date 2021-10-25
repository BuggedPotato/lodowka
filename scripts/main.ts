import { StickyNote } from "./classes/Note";
import { Fridge } from "./classes/Fridge";
import * as globals from "./Globals";


var fridge = new Fridge( "This a fridge" );

document.getElementById( "newNote" ).addEventListener( "click", ()=>{
    console.log( "opachkii" );

    fridge.addStickyNote();
    fridge.renderNotes( "fridge" );
} );


// let a = new StickyNote( 0, { width: 100, height: 100 } );
// console.log( a );