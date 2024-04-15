import { atlo_ell } from "./fuggvenyek.js";

export function tesztAtlohoz() {
    {
      let lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      let vart = "   @   "; 
      console.assert(
        vart === atlo_ell(3, lista),
        "%o",
        `várt: ${vart}, lista: ${lista}`,
        "A várt eredmény nem stimmel!"
      );
    }
    {
        let lista = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        let vart = "XXX@XXX"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      {
        let lista = ["O", "X", "X", "X", "X", "X", "X", " ", " "];
        let vart = "OXX@XX  "; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }
      {
        let lista = ["O", "O", "O", "O", "O", "O", "O", "O", "O"];
        let vart = "OOO@OOO"; 
        console.assert(
          vart === atlo_ell(3, lista),
          "%o",
          `várt: ${vart}, lista: ${lista}`,
          "A várt eredmény nem stimmel!"
        );
      }e 
  }
