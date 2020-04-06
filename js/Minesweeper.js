import Cell from './Cell.js';
import BombCounter from './BombCounter.js';
import Smile from './Smile.js';
import Timer from './Timer.js';

class Minesweeper {
    constructor( target, width, height, bombsPercentage ) {
        this.target = target;
        this.DOM = null;
        this.DOMfield = null;
        this.width = width;
        this.height = height;
        this.bombsPercentage = bombsPercentage;
        this.bombsCount = 1;

        this.canPlay = true;
        this.clickCount = 0;
        this.bombCounter = null;
        this.smile = null;
        this.timer = null;
        this.cells = [];

        this.init();
    }

    init() {
        this.validate();
        this.render();
    }

    resetGame() {
        this.canPlay = true;
        this.clickCount = 0;
        this.cells = [];
        this.render();
    }

    validate() {
        // check if valid target selector
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'Kritine klaida, reikia nurodyti tinkama selectoriu kur generuoti zaidima!';
        }
        this.DOM = DOM;

        // check for correct size
        if ( typeof(this.width) !== 'number' ||
             this.width < 1 ||
             this.width % 1 > 0 ) {
            throw 'Netinkamas plotis!';
        }
        if ( typeof(this.height) !== 'number' ||
             this.height < 1 ||
             this.height % 1 > 0 ) {
            throw 'Netinkamas aukstis!';
        }
        if ( this.width * this.height < 2 ) {
            throw 'Bendras lentos plotas yra per mazas.';
        }
        if ( typeof(this.bombsPercentage) !== 'number' ||
             this.bombsPercentage <= 0 ||
             this.bombsPercentage >= 100 ) {
            throw 'Netinkamas bombu kiekis!';
        }

        // calculate bombs count
        const bombsCount = Math.floor(this.width * this.height * this.bombsPercentage / 100);
        if ( bombsCount > 0 ) {
            this.bombsCount = bombsCount;
        }
    }

    render() {
        let HTML = `<div class="header"></div>
                    <div class="field"></div>`;
        this.DOM.classList.add('minesweeper');
        this.DOM.innerHTML = HTML;
        this.DOMheader = this.DOM.querySelector('.header');
        this.DOMfield = this.DOM.querySelector('.field');

        this.bombCounter = new BombCounter(this.DOMheader, this.bombsCount);
        this.smile = new Smile(this.DOMheader, this);
        this.timer = new Timer(this.DOMheader);

        for ( let i=0; i<this.width * this.height; i++ ) {
            this.cells.push( new Cell(i, this) );
        }
    }

    createBombs( cellIndex ) {
        let list = [];
        while ( list.length < this.bombsCount ) {
            const position = Math.floor( Math.random() * this.width * this.height );

            if ( list.indexOf(position) === -1 && position !== cellIndex ) {
                list.push( position );
                this.cells[position].addBomb();
            }
        }
    }

    checkCell( cellIndex ) {
        if ( !this.canPlay ) {
            return;
        }

        console.log('cell: '+cellIndex);
        
        // jei tai pirmas paspaudimas - generuojame bombas
        if ( this.clickCount === 0 ) {
            this.createBombs( cellIndex );
        }
        this.clickCount++;

        // atidarome paspausta langeli
        if ( this.cells[cellIndex].hasBomb ) {
            // jei sis langelis po savimi turi bomba
                // GAME OVER
                this.gameOver();
        } else {
            // jei bombos nera, tai
                // tikriname aplinkinius langelius ir skaiciuojame kiek yra aplinkui bombu
                    // jeigu ju yra 0, tai
                        // tesiame tikrinima aplinkiniuose ir t.t.
                    // jeigu daugiau nei 0, tai
                        // atvaizduojame langelyje bombu skaiciu
        }
    }

    gameOver() {
        this.canPlay = false;
        this.smile.sad();
        console.log('GAME OVER...');
    }
}

const game = new Minesweeper('#game', 10, 10, 15);

console.log(game);