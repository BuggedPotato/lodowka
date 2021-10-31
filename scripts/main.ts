import { Fridge } from "./classes/Fridge";
import { DBHandle } from "./classes/DBHandle";
import { StickyNote } from "./classes/Note";

const urlParams = new URLSearchParams(window.location.search);

const a : string = urlParams.get( "fridgeName" );
// console.log( a );
if( !a )
{
    window.location.replace( "./start.html" );
}


var fridge : Fridge = new Fridge( a );
getFridge( fridge, a);
// console.log( "fridge:" );
// console.log( fridge );

async function getFridge( inFridge : Fridge, name : string )
{
    let tmp : Object = await DBHandle.getFridgeData( name );
    let f : Object = JSON.parse( tmp.Data );
    let arr : Array<Object> = JSON.parse( tmp.StickyNotesTab );
    console.table( f );
    console.table( arr );

    inFridge.totalNotes = f.totalNotes;
    inFridge.currentNotes = f.currentNotes;
    inFridge.stickyNotes = arr.map( (el)=>{
        return new StickyNote( el.id, inFridge.functions4Notes, el.size, el.position, el.text );
    } );

    inFridge.renderNotes( "fridge" );
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

document.getElementById( "leBtn" ).addEventListener( "click", async ()=>{
    let b : Object = await DBHandle.saveFridge( fridge );
    // console.log( "f:" );
    // let b : Object = await DBHandle.getFridgeData( a );
    // console.log( b );
    // console.log( JSON.parse( b.fridge ) );
} );

