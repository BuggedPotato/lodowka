import { Fridge } from "./classes/Fridge";
import { DBHandle } from "./classes/DBHandle";
import { StickyNote } from "./classes/Note";

const urlParams = new URLSearchParams(window.location.search);

const a : string = urlParams.get( "fridgeName" );
if( !a )
{
    window.location.replace( "./start.html" );
}

var fridge : Fridge = new Fridge( a );
getFridge( fridge, a);

async function getFridge( inFridge : Fridge, name : string )
{
    let tmp : Object = await DBHandle.getFridgeData( name );
    if( !tmp )
    {
        inFridge.functions4Notes.saveMe();
        return;
    }

    let f : Object = JSON.parse( tmp.Data );
    let arr : Array<Object> = JSON.parse( tmp.StickyNotesTab );

    inFridge.totalNotes = f.totalNotes;
    inFridge.currentNotes = f.currentNotes;
    inFridge.setTop( f.topIndex );
    inFridge.stickyNotes = arr.map( (el)=>{
        return new StickyNote( el.id, inFridge.functions4Notes, el.size, el.position, el.text, el.zIndex );
    } );

    inFridge.renderNotes( "fridge" );
    inFridge.updateFridge();
}


document.getElementById( "newNote" ).addEventListener( "click", ()=>{
    fridge.addStickyNote();
    fridge.renderNotes( "fridge" );
} );

document.body.onload = ()=>{
    // transfers 'fridge' to JS <------ I spent so much f*ing time on this
    setListener( fridge );
    // oh and adds some listeners I guess
};


