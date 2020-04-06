class BombCounter {
    constructor( parentHeader, bombCount ) {
        this.parentHeader = parentHeader;
        this.bombCount = bombCount;

        this.render();
    }

    render() {
        const HTML = `<div class="counter bombs">${this.convert(this.bombCount)}</div>`;
        this.parentHeader.insertAdjacentHTML('beforeend', HTML);
    }

    convert( number ) {
        if ( number < 100 ) {
            return '0'+number;
        }
        if ( number < 10 ) {
            return '00'+number;
        }
        return number;
    }

    
}

export default BombCounter;