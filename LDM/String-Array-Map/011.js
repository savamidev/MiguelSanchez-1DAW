"use strict";

class GestorCurso {
  constructor(nombre, especialidad, duracion) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.duracion = duracion;
    this.estudiantes = new Set();
  }

  /**
   * Agrega un estudiante al curso.
   * Solicita al usuario el nombre y apellidos del estudiante.
   * Si el estudiante ya está registrado, muestra un mensaje de advertencia.
   * @returns {void} No retorna ningún valor.
   */
  addEstudiante() {
    let nombre = prompt("Introduce el nombre del estudiante:");
    let apellidos = prompt("Introduce los apellidos del estudiante:");

    const estudiante = { nombre, apellidos };

    if (!this.isExistsEstudiante(estudiante)) {
      this.estudiantes.add(estudiante);

      console.log(
        `Estudiante ${estudiante.nombre} ${estudiante.apellidos} agregado al curso ${this.nombre}.`
      );
    } else {
      console.log(
        `El estudiante ${estudiante.nombre} ${estudiante.apellidos} ya está registrado en el curso.`
      );
    }
  }

  /**
 * Elimina un estudiante de la lista de estudiantes del curso.
 * Solicita al usuario el nombre y apellidos del estudiante a eliminar.
 * Si el estudiante existe, se elimina de la base de datos; de lo contrario, se muestra un mensaje de error.
 * 
 * @returns {void} No retorna ningún valor.
 */
  removeEstudiante() {
    let nombre = prompt("Introduce el nombre del estudiante a eliminar:");
    let apellidos = prompt("Introduce los apellidos del estudiante a eliminar:");

    const estudianteDelete = { nombre, apellidos };

    if (this.isExistsEstudiante(estudianteDelete)) {
      this.estudiantes.delete(estudianteDelete);
      
      console.log(
        `El estudiante ${estudianteDelete.nombre} ${estudianteDelete.apellidos} ha sido eliminado correctamente.`
      );
    } else {
      console.log(
        `El estudiante ${estudianteDelete.nombre} ${estudianteDelete.apellidos} no se encuentra en nuestra base de datos.`
      );
    }
  }

  //-------------

  // Métodos generales

  /**
   * Comprueba si un estudiante está en el curso.
   * @param {object} estudiante - Estudiante creado.
   * @returns {boolean} - True si el estudiante está en el curso, false en caso contrario.
   */
  isExistsEstudiante(estudiante) {
    return this.estudiantes.has(estudiante);
  }
}
