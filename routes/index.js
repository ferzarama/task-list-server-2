class Tarea {
  constructor(indicador, descripcion) {
    this.indicador = indicador;
    this.descripcion = descripcion;
    this.completada = false;
  }
}

class ListaDeTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(indicador, descripcion) {
    const nuevaTarea = new Tarea(indicador, descripcion);
    this.tareas.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
  }

  eliminarTarea(indicador) {
    this.tareas = this.tareas.filter((tarea) => tarea.indicador !== indicador);
    console.log("Tarea eliminada con indicador:", indicador);
  }

  completarTarea(indicador) {
    const tarea = this.tareas.find((tarea) => tarea.indicador === indicador);
    if (tarea) {
      tarea.completada = true;
      console.log("Tarea completada con indicador:", indicador);
    } else {
      console.log("No se encontró ninguna tarea con indicador:", indicador);
    }
  }
}

const listaTareas = new ListaDeTareas();

listaTareas.agregarTarea("1", "Hacer la compra");
listaTareas.agregarTarea("2", "Preparar la presentación");

console.log("Lista de tareas:", listaTareas.tareas);

listaTareas.eliminarTarea("1");

listaTareas.completarTarea("2");

console.log("Lista de tareas actualizada:", listaTareas.tareas);
