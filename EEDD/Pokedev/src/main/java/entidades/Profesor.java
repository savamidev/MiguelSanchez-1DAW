package entidades;

import interfaces.IProfesor;

public class Profesor extends Persona implements IProfesor {

    private String departamento;

    public Profesor(String name, String departamento) {
        super(name);
        this.departamento = departamento;
    }

    @Override
    public String getDepartamento() {
        return this.departamento;
    }

    @Override
    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    @Override
    public String toString() {
        return "Profesor{" +
                "departamento='" + this.departamento + '\'' +
                ", name='" + this.name + '\'' +
                '}';
    }
}
