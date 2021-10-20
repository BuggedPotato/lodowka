import { Size } from "./interfaces/intSize";

class StickyNote
{
    private id : number;
    private size : Size;
    public text : string;
    
    constructor( id, size = { width: 160, height: 160 }, text = "Hello there!" )
    {
        this.id = id;
        this.size = size;
        this.text = text;
    }
}