import { StickyNote } from "./Note";
import { Func4Notes } from "../interfaces/intFunc4Notes";

export class Fridge
{
    public readonly name : string;
    public totalNotes : number;
    public currentNotes : number;
    public stickyNotes : StickyNote[] = [];
    private topIndex : number = 0;

    private functions4Notes : Func4Notes = {
        getTopIndex: ()=>
        {
            this.topIndex++;
            return this.topIndex;
        },
        deleteNote: (id:number)=>
        {
            this.stickyNotes = this.stickyNotes.filter( (el)=>
            {
                if( el.id != id )
                    return true;
                else
                {
                    this.currentNotes--;
                    this.updateFridge();
                    return false;
                }
            } );
        // console.table( this.stickyNotes );
        }
    }



    constructor( name : string, total : number = 0, current : number = 0 )
    {
        this.name = name;
        this.totalNotes = total;
        this.currentNotes = current;
    }


    public addStickyNote() : void
    {
        let note : StickyNote = new StickyNote( this.topIndex+1, this.functions4Notes );
        this.stickyNotes.push( note );
        this.currentNotes = this.stickyNotes.length;
        this.topIndex++;
        this.totalNotes++;

        this.updateFridge();
    }

    public renderNotes( htmlId : string ) : void
    {
        this.stickyNotes.map( ( note )=>{
            if( !document.getElementById( note.id.toString() ) )
                document.getElementById( htmlId ).appendChild( note.getNoteHTML() );
        } );
    }

    public getNoteOfId( searchedId : number ) : StickyNote | undefined
    {
        return this.stickyNotes.find( element => element.id == searchedId );
    }

    public updateFridge() : void
    {
        document.getElementById( "totalNotes" ).innerText = "Przebieg: " + this.totalNotes.toString();
        document.getElementById( "currentNotes" ).innerText = "Karteczki: " + this.currentNotes.toString();
    }
}