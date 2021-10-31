import { Fridge } from "./classes/Fridge";
import { DBHandle } from "./classes/DBHandle";
import { StickyNote } from "./classes/Note";
import { XYBase } from "./interfaces/intXYBase";

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
    let tmp : helpQ = await DBHandle.getFridgeData( name ) as helpQ;
    if( !tmp )
    {
        inFridge.functions4Notes.saveMe();
        return;
    }

    let f : helpF = JSON.parse( tmp.Data );
    console.log( f );
    let arr : Array<Object> = JSON.parse( tmp.StickyNotesTab );

    inFridge.totalNotes = f.totalNotes;
    inFridge.currentNotes = f.currentNotes;
    inFridge.setTop( f.topIndex );
    inFridge.stickyNotes = arr.map( ( el : helpS )=>{
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

interface helpQ{
    Data : string;
    ID : string;
    Nazwa : string;
    StickyNotesTab : string;
}
interface helpF{
    currentNotes : number;
    functions4Notes : Object;
    name : string;
    stickyNotes : Array<Object>;
    topIndex : number;
    totalNotes : number;
}
interface helpS{
    id : number;
    parentFunctions : Object;
    position : XYBase;
    size : XYBase;
    text : string;
    zIndex : number;
}
