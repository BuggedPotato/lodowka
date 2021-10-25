import { StickyNote } from "./Note";

export class Fridge
{
    private name : string;
    public totalNotes : number;
    public currentNotes : number;
    public stickyNotes : StickyNote[] = [];
    private topIndex : number = 0;


    // functions passed down to children (notes)
    public getCurrentNotes : ()=> number = ()=>
    {
        this.topIndex++;
        return this.topIndex;
    }
    private deleteNote : (id:number)=> void = (id:number)=>
    {
        this.stickyNotes = this.stickyNotes.filter( (el)=>
        {
            if( el.getId() != id )
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



    constructor( name : string, total : number = 0, current : number = 0 )
    {
        this.name = name;
        this.totalNotes = total;
        this.currentNotes = current;
    }

    

    public addStickyNote() : void
    {
        let note : StickyNote = new StickyNote( this.topIndex+1, this.getCurrentNotes, this.deleteNote );
        this.stickyNotes.push( note );
        this.currentNotes = this.stickyNotes.length;
        this.topIndex++;
        this.totalNotes++;

        this.updateFridge();
    }

    public renderNotes( htmlId : string ) : void
    {
        this.stickyNotes.map( ( note )=>{
            if( !document.getElementById( note.getId().toString() ) )
                document.getElementById( htmlId ).appendChild( note.getNoteHTML() );
        } );
    }

    public updateFridge() : void
    {
        document.getElementById( "totalNotes" ).innerText = "Przebieg: " + this.totalNotes.toString();
        document.getElementById( "currentNotes" ).innerText = "Karteczki: " + this.currentNotes.toString();
    }
}