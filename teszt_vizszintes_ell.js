import { vizszintes_ell } from "./fuggvenyek.js";

export function tesztvizszintes(){
    {
        /* 1. Teszteset */
        let lista=[" "," "," "," "," "," "," "," "," "]
        let vart="   @   @   @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 2. Teszteset */
        let lista=["O","X","X","X","O","O","O"," "," "]
        let vart="OXX@XOO@O  @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 3. Teszteset */
        let lista=["O","X","O","O","O","X","O"," "," "]
        let vart="OXO@OOX@O  @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 4. Teszteset */
        let lista=[" ","X","X","O","X","O","O","O"," "]
        let vart=" XX@OXO@OO @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 5. Teszteset */
        let lista=["X","X","X","O","O","X","O"," "," "]
        let vart="XXX@OOX@O  @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 6. Teszteset */
        let lista=["O","X","X","O","O","O","X","X"," "]
        let vart="OXX@OOO@XX @"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 7. Teszteset */
        let lista=["O"," "," "," ","O","O","X","X","X"]
        let vart="O  @ OO@XXX@"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    {
        /* 8. Teszteset */
        let lista=["O","X","O","X","O","X","O","X","O"]
        let vart="OXO@XOX@OXO@"
        vizszintes_ell(3, lista) 
        console.assert(vart === vizszintes_ell(3, lista),"(3, lista)","A várt eredmény nem stimmel!")
    };
    /* Még teszteset: 
        csupa x, 
        csupa o, 
        általános, nincs győzelem, de nincs mind kitöltve
        általános, van győzelem(x is,o is), de nincs mind kitöltve
        általános, nincs győzelem, de mind kivan töltve
        általános, van győzelem(x is,o is), de mind kivan töltve
     */
}
