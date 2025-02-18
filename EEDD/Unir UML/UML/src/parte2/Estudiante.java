package parte2;

public class Estudiante {
    private String nombre;
    private String apellidos;
    private static int codigo;
    private int numeroSemestre;
    private double notaFinal;

    public Estudiante(String nombre, String apellidos, int numeroSemestre, double notaFinal) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroSemestre = numeroSemestre;
        this.notaFinal = notaFinal;
        codigo++;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public int getCodigo() {
        return codigo;
    }

    public int getNumeroSemestre() {
        return numeroSemestre;
    }

    public double getNotaFinal() {
        return notaFinal;
    }

    @Override
    public String toString() {
        return "Estudiante{" +
                "nombre='" + nombre + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", numeroSemestre=" + numeroSemestre +
                ", notaFinal=" + notaFinal +
                '}';
    }
}
