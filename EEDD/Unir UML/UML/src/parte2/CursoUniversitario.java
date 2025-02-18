package parte2;

import java.util.ArrayList;
import java.util.Scanner;

public class CursoUniversitario {

     private static Scanner sc = new Scanner(System.in);

    private ArrayList<Estudiante> listaEstudiantes;

    public CursoUniversitario() {
        listaEstudiantes = new ArrayList<>();
    }

    // Añadir estudiante
    public void addEstudianteList() {
        while (true) {
            try {
                System.out.println("Introduce el nombre del estudiante:");
                String nombre = sc.nextLine().trim();

                System.out.println("Intoduce los apellidos:");
                String apellidos = sc.nextLine().trim();

                System.out.println("Introduce el número del semestre: ");
                String input1 = sc.nextLine().trim();
                int semestre = Integer.parseInt(input1);
                verifiSemestre(semestre);

                System.out.println("Introduce la nota final:");
                String input2 = sc.nextLine().trim().replace(",", ".");
                double notaFinal = Double.parseDouble(input2);
                verifiNotaFinal(notaFinal);

                listaEstudiantes.add(new Estudiante(nombre, apellidos,semestre, notaFinal));
                break;
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
                sc.nextLine();
            }
        }
    }

    private Estudiante createEstudiante(Estudiante estudiante) throws IllegalArgumentException {
        if (isDuplicado(estudiante.getId())) {
            throw new IllegalArgumentException("Se ha detectado duplicidad en ID.");
        }
        return estudiante;
    }

    private void verifiSemestre(int semestre) throws IllegalArgumentException {
        if (semestre < 1 || semestre > 2) {
            throw new IllegalArgumentException("El semestre debe de ser: 1 o 2.");
        }
    }

    private void verifiNotaFinal(double notaFinal) throws IllegalArgumentException {
        if (notaFinal < 0 || notaFinal > 10) {
            throw new IllegalArgumentException("La nota final debe estar entre 0 y 10.");
        }
    }


    // Buscar estudiante
    public void buscarEstudiante() {
        try{
            System.out.println("Introduce el id del estudiante a buscar:");
            String id = sc.next();

            dataBaseEstudiante(Integer.parseInt(id));

            System.out.println(String.format("El estudiante con id %s se encuentra en nuestra BBDD", id));

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            sc.nextLine();
        }
    }

    private void dataBaseEstudiante(int id) throws IllegalArgumentException {
        if (!isDuplicado(id)) {
            throw new IllegalArgumentException("Estudiante no registrado en nuestra BBDD.");
        }
    }


    // Calcular promedio
    public double calcularPromedio() {
        return (sumaNotas() / listaEstudiantes.size());
    }

    private double sumaNotas() {
        double suma = listaEstudiantes.stream()
                .mapToDouble(Estudiante::getNotaFinal)
                .sum();
        return suma;
    }

    //
    public void cantidadAptos() {
        for (Estudiante estudiante : listaEstudiantes) {
            if (estudiante.getNotaFinal() >= 3) {
                System.out.println(estudiante.toString());
            }
        }
    }

    // Métodos generales
    private boolean isDuplicado(int id) {
        for (Estudiante estudiante : listaEstudiantes) {
            if (estudiante.getId() == id) {
                return true;
            }
        }
        return false;
    }

    private Estudiante selecEstudiante(int id) {
        for (Estudiante estudiante : listaEstudiantes) {
            if (estudiante.getId() == id) {
                return estudiante;
            }
        }
        return null;
    }

}
