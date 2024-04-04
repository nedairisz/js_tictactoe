import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import { tesztAtlohoz } from "./teszt.js";
import { fuggolegesTeszt } from "./fuggolegesTeszt.js";

window.addEventListener("load", init);

function init() {
  palya_valasztas();
  jatekKezdese();
  tesztAtlohoz()
  fuggolegesTeszt();
}
