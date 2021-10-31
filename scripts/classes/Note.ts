import { XYBase } from "../interfaces/intXYBase";
import { Func4Notes } from "../interfaces/intFunc4Notes";
import { TinyMCEHandle } from "./TinyMCEHandle";

export class StickyNote
{
    public readonly id : number;
    private size : XYBase;
    private position : XYBase;

    // object from Fridge with functions to do stuff with parent ¯\_(ツ)_/¯
    private parentFunctions : Func4Notes;

    public text : string;
    public zIndex : number;
    


    constructor( id : number, parentFunctions : Func4Notes, size : XYBase = { x: 160, y: 160 }, pos : XYBase = { x: 100, y: 100 }, text : string = "Hello there!" )
    {
        this.id = id;
        this.parentFunctions = parentFunctions;
        this.size = size;
        this.position = pos;
        this.text = text;
        this.zIndex = 100; //TODO? meh
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

        let textbox : HTMLDivElement = document.createElement( "div" );
        textbox.classList.add( "textbox" );
        textbox.innerHTML = "<div>" + this.text + "</div>";
        el.appendChild( textbox );

        let del : HTMLImageElement = document.createElement( "img" );
        del.classList.add( "icon" );
        del.classList.add( "delNote" );
        del.src = "./gfx/crossIcon.png"; // from main directory *shrug*
        el.appendChild( del );

        let resize : HTMLImageElement = document.createElement( "img" );
        resize.classList.add( "icon" );
        resize.classList.add( "resizeNote" );
        resize.src = "./gfx/resizeIcon.jpeg";
        el.appendChild( resize );

        let edit : HTMLImageElement = document.createElement( "img" );
        edit.classList.add( "icon" );
        edit.classList.add( "editNote" );
        edit.src = "./gfx/editIcon.png";
        el.appendChild( edit );

        this.setEvents( el, del, resize, edit );

        return el;
    }

    // assigns the event listeners to elements
    private setEvents( tisMe : HTMLDivElement, btnDel : HTMLImageElement, btnResize : HTMLImageElement, btnEdit : HTMLImageElement ) : void
    {
        tisMe.addEventListener( "mousedown", (e:MouseEvent)=>{
            this.zIndex = this.parentFunctions.getTopIndex();
            // console.log( this.zIndex );
            console.log( "zIndex: " + this.zIndex );
            tisMe.style.zIndex = this.zIndex.toString();


            this.doTheDragThingy( e, tisMe );
        } );

        // deletes HTML self
        btnDel.addEventListener( "click", (e:MouseEvent)=>{
             btnDel.parentNode.parentNode.removeChild( tisMe );
             this.parentFunctions.deleteNote( this.id );
        } );

        btnResize.addEventListener( "mousedown", (e:MouseEvent)=>{
            this.resizeMe( e, btnResize, tisMe );
       } );

       btnEdit.addEventListener( "click", (e:MouseEvent)=>{
            setEditorContent( this );
            TinyMCEHandle.showEditForm( this.id );
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

    public getSize() : XYBase
    {
        return this.size;
    }
}
