import { atlo_ell } from "./fuggvenyek.js";

export function tesztAtlohoz() {
    { // összes üres
      let lista = [" ", " ", " ", " ", " ", " "," "," "," "];
      let vart = "   @   "; 
      console.assert(
        vart === atlo_ell(3, lista),
        "%o",
        `várt: ${vart}, lista: ${lista}`,
        "A várt eredmény nem stimmel!"
      );
    }
    { // mind X
        let lista = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        let vart = "XXX@XXX"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      { // mind O
        let lista = ["O", "O", "O", "O", "O", "O", "O", "O", "O"];
        let vart = "OOO@OOO"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      { // van győztes és nincs minden kitöltve
        let lista = ["X", "X", "O", " ", "X", "O", "O", " ", "X"];
        let vart = "XXX@OXO"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      { // van győztes és mind ki van töltve
        let lista = ["O", "X", "X", "O", "O", "O", "X", "X", "O"];
        let vart = "OOO@XOX"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      { // nincs győztes és nincs mind kitöltve
        let lista = ["X", " ", "X", " ", "O", "O", " ", " ", " "];
        let vart = "XO @XO "; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      { // nincs győztes és mind ki van töltve
        let lista = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
        let vart = "XXO@XXO"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      
  }
