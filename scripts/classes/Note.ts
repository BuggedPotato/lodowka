import { notStrictEqual } from "assert";
import { XYBase } from "../interfaces/intXYBase";



class StickyNote
{
    private id : number;
    private size : XYBase;
    public readonly text : string;
    public zIndex : number;
    
    constructor( id : number, size = { x: 160, y: 160 }, text = "Hello there!" )
    {
        this.id = id;
        this.size = size;
        this.text = text;
        this.zIndex = 100; //TODO
    }

    // returns new note of this class instance
    public getNoteHTML() : HTMLDivElement
    {  
        let el : HTMLDivElement = document.createElement( "div" );
        el.classList.add( "note" );
        el.id = this.id.toString();
        el.style.width = this.size.x.toString() + "px";
        el.style.height = this.size.y.toString() + "px";
        el.innerText = this.text;

        let del : HTMLImageElement = document.createElement( "img" );
        del.classList.add( "delNote" );
        del.src = "./gfx/crossIcon.png"; // from main directory *shrug*
        el.appendChild( del );

        let resize : HTMLImageElement = document.createElement( "img" );
        resize.classList.add( "resizeNote" );
        resize.src = "./gfx/resizeIcon.jpeg";
        el.appendChild( resize );

        return el;
    }


    public deleteNote() : void
    {
        let a = document.getElementById( this.id.toString() );
        a.parentNode.removeChild( a );

        notes
    }





    public getId() : number
    {
        return this.id
    }

    public getSize() : XYBase
    {
        return this.size;
    }
}

export {StickyNote};