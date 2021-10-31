import { Fridge } from "./Fridge";

export abstract class DBHandle
{
    public static getFridgeData<T>( name : string ) : Promise< Object >
    {
        const headers : HeadersInit = { "Content-Type": 'application/x-www-form-urlencoded' };
        const body : BodyInit = "data=" + JSON.stringify( { mode: "getFridge", name: name } );
        return fetch(
            "./php/dbhandle.php",
            { method: "post", body, headers })
            .then( response =>{
                if( !response.ok )
                    throw new Error( response.statusText );
                    // console.log( response.json() );
                return response.json() //as Promise< Array<Object> >;
            } )
            .then( data =>{ 
                return data[0] } );
    }


    public static async saveFridge<T>( f : Fridge ) : Promise<T>
    {
        const headers : HeadersInit = { "Content-Type": 'application/x-www-form-urlencoded' };
        const body : BodyInit = "data=" + JSON.stringify( { mode: "saveFridge", fridge: JSON.stringify( f ) } );
        return fetch(
            "./php/dbhandle.php",
            { method: "post", body, headers })
            .then( response =>{
                if( !response.ok )
                    throw new Error( response.statusText );
                    // console.log( response.json() );
                return response.json() as Promise<T>;
            } )
    }
}