package parte2;

import java.util.ArrayList;

public class CursoUniversitario {
    
    private ArrayList<Estudiante> listaEstudiantes;

    public CursoUniversitario() {
        listaEstudiantes = new ArrayList<>();
    }

    public void addEstudiante(Estudiante estudiante) {
        if (isDuplicate(estudiante)) {
            throw new IllegalStateException("El estudiante ya está registrado");
        }
        listaEstudiantes.add(estudiante);
    }

    private boolean isDuplicate(Estudiante estudiante) {
        return listaEstudiantes.contains(estudiante);
    }

    public boolean isValidID(int id) {
        for (Estudiante estudiante: listaEstudiantes) {
            if(estudiante.getCodigo() == id) {
                return false;
            }
        }
        return true;
    }

    public void buscarEstudiante(Estudiante estudiante) {
       if (listaEstudiantes.contains(estudiante)) {
           System.out.println(estudiante.toString());
       } else {
           System.out.println("Estudiante no encontrado");
       }
    }



}
