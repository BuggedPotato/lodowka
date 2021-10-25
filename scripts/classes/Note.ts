import { XYBase } from "../interfaces/intXYBase";

export class StickyNote
{
    private id : number;
    private size : XYBase;
    private position : XYBase;

    public text : string;
    public zIndex : number;

    private getTopIndex : ()=> number;  // returns the zIndex for the note on the top ?
    private fridgeDeleteNote : (id:number)=> void; // deleted the note of appropriate index from fridge's array of notes

    constructor( id : number, topIndexF : ()=> number, delNote : (id:number)=> void, size : XYBase = { x: 160, y: 160 }, pos : XYBase = { x: 100, y: 100 }, text : string = "Hello there!" )
    {
        this.id = id;
        this.getTopIndex = topIndexF;
        this.fridgeDeleteNote = delNote;
        this.size = size;
        this.position = pos;
        this.text = text;
        this.zIndex = 100; //TODO
    }


    // returns a div of this note
    public getNoteHTML() : HTMLDivElement
    {  
        let el : HTMLDivElement = document.createElement( "div" );
        el.classList.add( "note" );
        el.id = this.id.toString();
        el.style.width = this.size.x.toString() + "px";
        el.style.height = this.size.y.toString() + "px";
        el.style.top = this.position.y.toString() + "px";
        el.style.left = this.position.x.toString() + "px";
        el.innerText = this.text;
        el.draggable = true;

        let del : HTMLImageElement = document.createElement( "img" );
        del.classList.add( "delNote" );
        del.src = "./gfx/crossIcon.png"; // from main directory *shrug*
        el.appendChild( del );

        let resize : HTMLImageElement = document.createElement( "img" );
        resize.classList.add( "resizeNote" );
        resize.src = "./gfx/resizeIcon.jpeg";
        el.appendChild( resize );
        this.setEvents( el, del, resize );

        return el;
    }

    // assigns the event listeners to elements
    private setEvents( tisMe : HTMLDivElement, btnDel : HTMLImageElement, btnResize : HTMLImageElement ) : void
    {
        tisMe.addEventListener( "mousedown", (e:MouseEvent)=>{
            this.zIndex = this.getTopIndex();
            // console.log( this.zIndex );
            console.log( "zIndex: " + this.zIndex );
            tisMe.style.zIndex = this.zIndex.toString();


            this.doTheDragThingy( e, tisMe );
        } );

        // deletes HTML self
        btnDel.addEventListener( "click", (e:MouseEvent)=>{
             btnDel.parentNode.parentNode.removeChild( tisMe );
             this.fridgeDeleteNote( this.id );
        } );

        btnResize.addEventListener( "mousedown", (e:MouseEvent)=>{
            this.resizeMe( e, btnResize, tisMe );
       } );
    }

    // handles dragging the note around the fridge
    private doTheDragThingy( event : MouseEvent, tisMe : HTMLDivElement ) : void
    {
        tisMe.style.backgroundColor = "#ffebcc";

        var mouseStart : XYBase = { x: event.clientX, y: event.clientY };
        var divStart : XYBase = { x: tisMe.offsetLeft, y: tisMe.offsetTop };
        var delta : XYBase = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };

        document.addEventListener( "mousemove", handleMove, true );
        document.addEventListener( "mouseup", handleUp, true );
        event.stopPropagation();
        event.preventDefault();

        function handleMove( e : MouseEvent ) : void
        {
            let x : number = e.clientX - delta.x;
            let y : number = e.clientY - delta.y;
            tisMe.style.left = x.toString() + "px";
            tisMe.style.top = y.toString() + "px";
            this.position = { x: x, y: y };
            e.stopPropagation(); 
        }

        function handleUp( e : MouseEvent ) : void
        {
            document.removeEventListener( "mousemove", handleMove, true );
            document.removeEventListener( "mouseup", handleUp, true );
            tisMe.style.backgroundColor = "papayawhip";
            e.stopPropagation();
        } 
    }

    // handles resizing the note
    private resizeMe( event : MouseEvent, img : HTMLImageElement, noteDiv : HTMLDivElement ) : void
    {
        var mouseStart : XYBase = { x: event.clientX, y: event.clientY };
        var divStart : XYBase = { x: img.offsetLeft, y: img.offsetTop };
        var delta : XYBase = { x: mouseStart.x - divStart.x, y: mouseStart.y - divStart.y };

        document.addEventListener( "mousemove", handleMove, true );
        document.addEventListener( "mouseup", handleUp, true );
        event.stopPropagation();
        event.preventDefault();

        function handleMove( e : MouseEvent ) : void
        {
            let x : number = e.clientX - delta.x + 20;
            let y : number = e.clientY - delta.y + 20;
            x = x <= 100 ? parseInt( noteDiv.style.width.replace( "px", "" ) ) : x;
            y = y <= 100 ? parseInt( noteDiv.style.height.replace( "px", "" ) ) : y;

            noteDiv.style.width = x.toString() + "px";
            noteDiv.style.height = y.toString() + "px";

            this.size = { x: x, y: y };

            e.stopPropagation(); 
        }

        function handleUp( e : MouseEvent ) : void
        {
            document.removeEventListener( "mousemove", handleMove, true );
            document.removeEventListener( "mouseup", handleUp, true );
            e.stopPropagation();
        } 
    }


    public getId() : number
    {
        return this.id;
    }

    public getSize() : XYBase
    {
        return this.size;
    }
}
