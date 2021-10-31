import { Fridge } from "./Fridge";

export abstract class DBHandle
{
    // public static getQueryFridge() : string
    // {
    //     const headers : HeadersInit = { "Content-Type": 'application/x-www-form-urlencoded' };
    //     const body : BodyInit = "data=" + JSON.stringify( { mode: "queryName" } );

    //     let resp : Promise<string> = fetch(
    //         "./php/dbhandle.php",
    //         { method: "post", body, headers })
    //         .then( response =>{
    //             if( !response.ok )
    //                 throw new Error( response.statusText );
    //             console.log( response.body );
    //             return response.json();
    //         } )
    //         .then( data => {
    //             console.log( data );
    //             return data;
    //         } );

    //     console.log( resp );
    //     return resp.toString();
    // }

    public static getFridgeData<T>( name : string ) : Promise< Object >
    {
        const headers : HeadersInit = { "Content-Type": 'application/x-www-form-urlencoded' };
        const body : BodyInit = "data=" + JSON.stringify( { mode: "getFridge", name: name } );
        let tmp = fetch(
            "./php/dbhandle.php",
            { method: "post", body, headers })
            .then( response =>{
                if( !response.ok )
                    throw new Error( response.statusText );
                    // console.log( response.json() );
                return response.json() as Promise< Array<Object> >;
            } )
            .then( data =>{ 
                return data[0] } );

        return tmp;
    }


    public static saveFridge<T>( f : Fridge ) : void
    {
        const headers : HeadersInit = { "Content-Type": 'application/x-www-form-urlencoded' };
        const body : BodyInit = "data=" + JSON.stringify( { mode: "saveFridge", fridge: JSON.stringify( f ) } );
        fetch(
            "./php/dbhandle.php",
            { method: "post", body, headers })
            .then( response =>{
                if( !response.ok )
                    throw new Error( response.statusText );
                    // console.log( response.json() );
                return response.json() as Promise<T>;
            } );
    }
}