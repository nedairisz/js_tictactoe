import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";

import { tesztvizszintes } from "./teszt_vizszintes_ell.js";

import { fuggolegesTeszt } from "./fuggolegesTeszt.js";


window.addEventListener("load", init);

function init() {
  palya_valasztas();
  jatekKezdese();
  tesztvizszintes();
  fuggolegesTeszt();
}
