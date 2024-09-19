class Elem{
    #index;

    constructor(szuloElem,index){
        this.szuloElem = szuloElem;
        this.#index = index;
        this.kattinthato = true;
        this.palyaMegjelenit();
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");
        this.elem.on("click", () => {
            if (this.kattinthato) {
                this.sajatEsemeny("kivalaszt");
                this.kattinthato = false;
            }
        })
    }

    palyaMegjelenit(){
        let txt = "";
        txt += `
            <div class="elem">
            <p></p>
            </div>
        `
        txt += "";
        this.szuloElem.append(txt);
    }

    setErtek(jel){
        this.pElem.html(jel);
    }
    getIndex(){
        return this.#index;
    }

    sajatEsemeny(esemenynev){
        const e = new CustomEvent(esemenynev, { detail: this});
        window.dispatchEvent(e);
    }
}

export default Elem