class Persona {
    constructor(nombre, apellido){
      this.nombre = nombre,
      this.apellido = apellido
    }
    saludar (){
      console.log('hola!'+ this.nombre);
    }
  }
  
  class Empleado extends Persona{
    constructor(nombre, apellido, empleo,sueldo){
      super(nombre, apellido);
      this.empleo= empleo,
      this.sueldo=sueldo
    }
  }
  var toni=new Empleado('Toni','tralice','Profesor',100);
  console.log(toni);
  var Moy=new Empleado('Moises','Duran','Ingeniero',200);
  console.log(Moy);