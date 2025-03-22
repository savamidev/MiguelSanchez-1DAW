package entidades;

import enums.Tipo;
import interfaces.IGimnasio;

public class Gimnasio implements IGimnasio {

    private String name;
    private Trainer leader;
    private Medalla medalla;
    private Tipo tipo;

    public Gimnasio(String name, Trainer leader, Medalla medalla, Tipo tipo) {
        this.name = name;
        this.leader = leader;
        this.medalla = medalla;
        this.tipo = tipo;
    }


    @Override
    public String getNameGimnasio() {
        return this.name;
    }

    @Override
    public void setNameGimnasio(String nameGimnasio) {
        this.name = nameGimnasio;
    }

    @Override
    public Trainer getLaeder() {
        return this.leader;
    }

    @Override
    public void setLeader(Trainer leader) {
        this.leader = leader;
    }

    @Override
    public Medalla getMedalla() {
        return this.medalla;
    }

    @Override
    public void setMedalla(Medalla medalla) {
        this.medalla = medalla;
    }

    @Override
    public Tipo getTipo() {
        return this.tipo;
    }

    @Override
    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    @Override
    public void batalla(Trainer trainer) {

    }

    @Override
    public String toString() {
        return "Gimnasio{" +
                "name='" + this.name + '\'' +
                ", leader=" + this.leader +
                ", medalla=" + this.medalla +
                ", tipo=" + this.tipo +
                '}';
    }
}
