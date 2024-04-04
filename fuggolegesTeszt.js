import { fuggoleges_ell } from "./fuggvenyek.js";

export function fuggolegesTeszt(){
    const meret = 3;
    {
        let lista=[" "," "," "," "," "," "," "," "," "]
        let vart ="   @   @   @"
        fuggoleges_ell(meret, lista)
        console.assert(vart === fuggoleges_ell(meret, lista),"(3, lista)", "A várt eredmény nem stimmel!")
    }
    {
        let lista=["X","O","X","X","X","O","X","O","O"]
        let vart ="XOX@XXO@XOO@"
        fuggoleges_ell(meret, lista)
        console.assert(vart === fuggoleges_ell(meret, lista),"(3, lista)", "A várt eredmény nem stimmel!")  
    }
    {
        let lista=["X"," ","O"," ","X","O","X"," ","O"]
        let vart ="X O@ XO@X O@"
        fuggoleges_ell(meret, lista)
        console.assert(vart === fuggoleges_ell(meret, lista),"(3, lista)", "A várt eredmény nem stimmel!")  
    }
    {
        let lista=[" ","O","X","X","O"," "," ","O","X"]
        let vart =" OX@XO @ OX@"
        fuggoleges_ell(meret, lista)
        console.assert(vart === fuggoleges_ell(meret, lista),"(3, lista)", "A várt eredmény nem stimmel!")  
    }
    {
        let lista=["X"," ","O","O","X"," ","O"," ","X"]
        let vart ="X O@XO @O X@"
        fuggoleges_ell(meret, lista)
        console.assert(vart === fuggoleges_ell(meret, lista),"(3, lista)", "A várt eredmény nem stimmel!")  
    }
}


