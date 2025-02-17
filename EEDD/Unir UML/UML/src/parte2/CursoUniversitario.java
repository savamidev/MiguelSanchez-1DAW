package parte2;

import java.util.ArrayList;
import java.util.stream.Stream;

public class CursoUniversitario {
    
    private ArrayList<Estudiante> listaEstudiantes;

    public void addEstudiante(Estudiante estudiante) {
        if (!comproIDEstudiante(estudiante)) {
            addEstudiante(estudiante);
        }
    }

    public boolean comproIDEstudiante(Estudiante estudiante) {
       for (Estudiante estudianteList : listaEstudiantes) {
        return estudianteList.getCodigo() == estudiante.getCodigo()
       }
    }

    public void buscarEstudiante(Estudiante estudiante) {
        if (listaEstudiantes.contains(estudiante)) {
            estudiante.toString();
        } else {
            System.out.println("Estudiante no encontrado");
        }
    }



}
