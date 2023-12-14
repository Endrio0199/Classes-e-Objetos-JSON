class formaDeBolo {
	constructor (saborDaMassa, saborRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
    }
    
    toString(){
    	console.log (`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    
    assar(){
    	console.log ("O bolo de " + this.saborDaMassa + " já está no forno" )
    }	
} 

let boloFesta = new formaDeBolo ("chocolate", "nutella")
let boloPremium = new formaDeBolo ("Baunilha", "morango")

boloFesta.toString()
boloPremium.toString()
boloFesta.assar()
boloPremium.assar()
