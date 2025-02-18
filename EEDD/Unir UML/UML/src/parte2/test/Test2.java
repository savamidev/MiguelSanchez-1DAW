package parte2.test;

import parte2.CursoUniversitario;

public class Test2 {
    public static void main(String[] args) {
        CursoUniversitario GSDAW = new CursoUniversitario();

        GSDAW.addEstudianteList();
        GSDAW.addEstudianteList();


        GSDAW.buscarEstudiante();
        System.out.println(GSDAW.calcularPromedio());
        GSDAW.cantidadAptos();

    }
}
