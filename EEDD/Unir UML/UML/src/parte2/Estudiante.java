package parte2;

public class Estudiante {
    private String nombre = "";
    private String apellidos = "";
    private static int codigo = 1;
    private int id;
    private int numeroSemestre = 0;
    private double notaFinal = 0.0;

    public Estudiante(String nombre, String apellidos, int numeroSemestre, double notafinal) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numeroSemestre = numeroSemestre;
        this.notaFinal = notafinal;
        this.id = codigo;
        codigo++;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public int getNumeroSemestre() {
        return numeroSemestre;
    }

    public double getNotaFinal() {
        return notaFinal;
    }

    public int getId() {
        return id;
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
