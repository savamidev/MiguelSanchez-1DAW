"use strict"

class CursoOnline {
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
    let apellidos = prompt(
      "Introduce los apellidos del estudiante a eliminar:"
    );

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

  /**
   * Une los estudiantes de este curso con los estudiantes de otro curso.
   *
   * Este método recibe un objeto de curso como parámetro y crea una unión de
   * estudiantes únicos utilizando un conjunto Set. Los estudiantes duplicados
   * se eliminan automáticamente, asegurando que cada estudiante aparezca solo
   * una vez en el resultado.
   *
   * @param {object} otroCurso - El otro curso del cual se unirán los estudiantes.
   * @returns {Set} Un conjunto (Set) de estudiantes que incluye todos los
   *                estudiantes de ambos cursos.
   */
  bindEstudiantes(otroCurso) {
    let bindListSet = new Set([...this.estudiantes, ...otroCurso.estudiantes]);

    return bindListSet;
  }

  /**
   * Devulve la lista de estudiantes comunes entre este curso y otro curso.
   *
   * Este método compara los estudiantes de este curso con los estudiantes
   * de otro curso y devuelve un conjunto Set que contiene solo aquellos
   * estudiantes que están presentes en ambos cursos.
   *
   * @param {object} otroCurso - El otro curso del cual se compararán los estudiantes.
   * @returns {Set} Un conjunto Set de estudiantes que están presentes en ambos cursos.
   */
  commonEstudiantes(otroCurso) {
    let commonListSet = new Set(
      [...this.estudiantes].filter((item) => otroCurso.estudiantes.has(item))
    );

    return commonListSet;
  }

  /**
   * Comprueba si un estudiante está en el curso.
   * @param {object} estudiante - Estudiante creado.
   * @returns {boolean} - True si el estudiante está en el curso, false en caso contrario.
   */
  isExistsEstudiante(estudiante) {
    return this.estudiantes.has(estudiante);
  }

  /**
   * Vacía el conjunto de estudiantes del curso.
   */
  vaciarEstudiantes() {
    let confirmation = prompt(
      "Por seguridad, desea eliminar la lista de estudiantes? (Si o no)",
      "no"
    );

    if (confirmation.toLowerCase() === "si") {
      this.estudiantes.clear();
      console.log(`El curso "${this.nombre}" ha sido borrado correctamente.`);
    
    } else {
      console.log(`Operación cancelada. El curso "${this.nombre}" conserva sus estudiantes.`);
    }
  }
}


}
