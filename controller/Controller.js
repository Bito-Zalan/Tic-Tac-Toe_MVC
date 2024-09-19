import Modell from "../model/Modell.js";
import Elem from "../view/Elem.js";

class Controller{

    constructor(){

        this.MODELL = new Modell();
        for (let index = 0; index < 9; index++) {
            new Elem($(".jatekter"), index); 
        }

        $(window).on("kivalaszt", (event) => {
            this.MODELL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODELL.getErtek());
        })
    }
   
}
export default Controller;