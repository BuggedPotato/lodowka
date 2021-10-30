export abstract class TinyMCEHandle
{
    // public static readonly scriptSource : string = "https://cdn.tiny.cloud/1/s50o1drzeq136sblv5lon7ji7r5esiq2o5ycwl1kwwypxa91/tinymce/5/tinymce.min.js";

    public static showEditForm( id : number ) : void
    {
        let wysiwyg : HTMLDivElement = <HTMLDivElement> document.getElementById( "wysiwyg" );
        wysiwyg.style.display = "flex";
        wysiwyg.dataset.editingNote = id.toString();
        TinyMCEHandle.addButtonsToStatus();
    }

    private static hideEditForm( e : MouseEvent ) : void
    {
        e.preventDefault();
        document.getElementById( "wysiwyg" ).style.display = "none";
        TinyMCEHandle.removeButtonsFromStatus();
    }

    private static addButtonsToStatus()
    {
        let statusBar : HTMLDivElement = document.getElementsByClassName( "tox-statusbar__text-container" )[0] as HTMLDivElement;
        let btnCancel : HTMLButtonElement = document.createElement( "button" );
        btnCancel.classList.add( "btnTinyMCE" );
        btnCancel.id = "TinyMCECancel";
        statusBar.appendChild( btnCancel );

        let btnSave : HTMLButtonElement = document.createElement( "button" );
        btnSave.classList.add( "btnTinyMCE" );
        btnSave.id = "TinyMCESave";
        btnSave.type = "submit";
        statusBar.appendChild( btnSave );

        btnCancel.addEventListener( "click", TinyMCEHandle.hideEditForm );
        // btnSave.addEventListener( "click", TinyMCEHandle.saveText )
    }

    private static removeButtonsFromStatus()
    {
        let statusBar : HTMLDivElement = document.getElementsByClassName( "tox-statusbar__text-container" )[0] as HTMLDivElement;
        let btnCancel : HTMLButtonElement = document.getElementById( "TinyMCECancel" ) as HTMLButtonElement;
        let btnSave : HTMLButtonElement = document.getElementById( "TinyMCESave" ) as HTMLButtonElement;
        statusBar.removeChild( btnCancel );
        statusBar.removeChild( btnSave );
    }

    // private static saveText( e : Event )
    // {
    //     e.preventDefault();
    //     // tinymce.Editor.getElement();
    //     // console.log( "dadad: " + editor );
    // }
}