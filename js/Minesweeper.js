import Cell from './Cell.js';

class Minesweeper {
    constructor( target, width, height, bombsPercentage ) {
        this.target = target;
        this.DOM = null;
        this.DOMfield = null;
        this.width = width;
        this.height = height;
        this.bombsPercentage = bombsPercentage;
        this.bombsCount = 1;

        this.clickCount = 0;
        this.cells = [];

        this.init();
    }

    init() {
        this.validate();
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
        let HTML = `<div class="header">
                        <div class="counter bombs">099</div>
                        <div class="smile">:)</div>
                        <div class="counter timer">000</div>
                    </div>
                    <div class="field"></div>`;
        this.DOM.classList.add('minesweeper');
        this.DOM.innerHTML = HTML;
        this.DOMfield = this.DOM.querySelector('.field');

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
        console.log('cell: '+cellIndex);
        
        if ( this.clickCount === 0 ) {
            this.createBombs( cellIndex );
        }
        this.clickCount++;
    }
}

const game = new Minesweeper('#game', 10, 10, 15);

console.log(game);