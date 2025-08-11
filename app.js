// Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");

// Se defiene un arreglo de registro con datos de alumnos
var registro = [
    // Se muestra lista de alumnos por medio de objetos
    {nombre: "Nicholas Lopez",edad: "23", zonaResidencia: "Estado de Mexico", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "nicholas@ou.com"},
    {nombre: "Ismael Lopez",edad: "29", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "ISMAEL@ebac.mx"},
    {nombre: "Santiago Estrada",edad: "30", zonaResidencia: "Guadalajara", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "santiago@ebac.mx"},
    {nombre: "Luis Aranda",edad: "45", zonaResidencia: "Monterrey", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "luis@ebac.mx"}
];

//Función que permite agregar a un nuevo alumno al arreglo de registro
function agregarAlumno(){

    // Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad");
    var nombrePrograma = prompt("Ingresa el programa a estudiar");
    var email = prompt("Ingresa el correo electronico");

    // Crea un objeto que se llama nuevoAlumno con los datos ingresados 
    var nuevoAlumno = {nombre:nombre, edad:edad, zonaResidencia:zonaResidencia, nombrePrograma:nombrePrograma, email:email};
    
    //Agrega la información nuevoAlumno al arreglo
    registro.push(nuevoAlumno);
    alert("Alumno agregado exitosamente.");
}
// Función para consultar los registros de los alumnos
function consultarRegistro(){

    // Este ciclo for intera sobre cada uno de los registros del arreglo
  for(var i = 0; i < registro.length; i++){
    
    // Esta lista de consol.log permite ver al usuario el registro en la consola
    console.log("Nombre: " + registro[i].nombre);
    console.log("Edad: " + registro[i].edad);
    console.log("Zona de residencia: " + registro[i].zonaResidencia);
    console.log("Nombre de programa: " + registro[i].nombrePrograma);
    console.log("Email: " + registro[i].email);
    console.log("\n")
   };
}

// Esta función permite generar un nuevo arreglo que no contega la infomación del alumno deseado
function eliminarAlumno(){
    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar")
    
    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);

}

// Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
do{
// Variable que toma la elección del usuario para ejecutar la función indicada
    var opcion = prompt("Seleccione una opción \n1. Agregar registro \n2. Consultar registro del alumno \n3. Eliminar registro \n4. Salir");

    // Se declara este if pra dar a elegir al usuario la opción que quiera
if (opcion === "1"){
    agregarAlumno();
} else if(opcion === "2"){
    alert("Mostrar el registro");
    consultarRegistro();
} else if(opcion === "3"){
    eliminarAlumno();
} else if(opcion === "4"){
    alert("Salir del programa");
} else {
    alert("Opción invalida, elige otra opción");
}

//Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo
var continuar = prompt ("¿Deseas hacer otra accion? (S/N)")
//while que se encarga de cerrar el ciclo
} while(continuar === "s");





