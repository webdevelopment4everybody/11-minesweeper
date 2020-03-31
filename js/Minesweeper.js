class House{
    constructor( address,floors,windows,doors, roof ){
        this.address = address;
        this.floors = floors;
        this.windows = windows;
        this.doors = doors;
        this.roof=roof;

       this.init();
        
    }
    init(){
        this.kiekTuriAukstu();
        this.arDegaStogas();
    }
    //metodas
    arDegaStogas(){
        return console.log(`Namas adresu ${this.address} nedega`);
    }
    kiekTuriAukstu(){
        return console.log(`Namas adresu ${this.address} turi ${this.floors} aukstu`);
        
    }
    nugriautiAuksta(){
        if(this.floors === 0){
            return  console.log( 'Namas nugriautas iki pamatu');
        }else{
            this.floors--;
        }
    }
    pastatytiAuksta(){
        this.floors++;
    }

}

const pirmasNamas =new House('Ged pr',3, 30, 1, true);
// console.log(pirmasNamas);


const antrasNamas =new House('Pakalniskes',1, 1, 1, true);
// console.log(antrasNamas);


// antrasNamas.arDegaStogas();
// antrasNamas.kiekTuriAukstu();
// antrasNamas.nugriautiAuksta();

