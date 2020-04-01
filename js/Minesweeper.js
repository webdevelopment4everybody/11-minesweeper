class Minesweeper{
    constructor(target,width,height,bombsPercentage){
        this.target = target;
        this.DOM=null;
        this.width = width;
        this.height = height;
        this.bombsPercentage = bombsPercentage;
        this.bombsCount = 1;

        // this.cell

        this.init();
    }
    init(){
        this.validate();
        this.render();
    }
    validate(){
        //check if valid target selector
        const DOM = document.querySelector(this.target);
        if(!DOM){
           throw 'Kritine klaida!Reikia nurodyti tinkama selektoriu, kur generuoti zaidima.';
            
        }
        this.DOM=DOM;

        //check for correct size
        if(typeof(this.width) !== 'number' ||
            this.width < 1 ||
            this.width % 1 >0 ){ 
            throw ('Netinkamas plotis!');

        }
        if(typeof(this.height) !== 'number' ||
        this.height < 1 ||
        this.height % 1 >0 ){ 
        throw ('Netinkamas aukstis!');

        }
        if(this.width * this.height < 2 ){
            throw 'Bendras lentos plotas per mazas';
        }
        if(typeof(this.bombsPercentage) !== 'number' ||
        this.bombsPercentage <= 0 ||
        this.bombsPercentage >= 100 ){ 
        throw ('Netinkamas bombu kiekis!');

        }
        //calculate bombs count
        const bombsCount = Math.floor(this.width * this.height * this.bombsPercentage / 100);
        if( bombsCount > 0  ){
            this.bombsCount =bombsCount;
             
        }
    }
    render(){
        let cellHTML = '';
        for(let i=0; i<this.width *this.height; i++){
            cellHTML +=`<div class= "cell">${i}</div>`;
        }
        let HTML = `<div class = "header">
                        <div class= "counter bombs">099</div>
                        <div class= "smile">:)</div>
                        <div class= "counter timer">000</div>
                    </div>
                    <div class="field">
                        
                        ${cellHTML}
                    </div>`
                   
        this.DOM.classList.add('minesweeper');
        this.DOM.innerHTML= HTML;
        const cells = this.DOM.querySelectorAll('.cell');
        console.log(cells);
        for(let i=0; i<cells.length;i++){
            cells[i].addEventListener('click', (event) => this.cellClick(event));


        }
        
    }
    cellClick(event){
        console.log(event.target.innerText, this.target, this.bombsPercentage);
        

    }
}
const game = new Minesweeper('#game',10,10,15);

console.log(game);
