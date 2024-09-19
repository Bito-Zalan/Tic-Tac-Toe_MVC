class Modell {
     #lista = [];
     #allapot;
     #lepesszam;

    constructor(){
        this.#allapot = "X";
        this.#lista = [" "," "," "," "," "," "," "," "," "];
        this.#lepesszam = 0;
    }

    setAllapot(index){
        if (this.#allapot === "X") {
            this.#allapot = "O";
        } else{
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        this.#lepesszam ++;
    }

    getErtek() {
        return this.#allapot;
    }
}
export default Modell;