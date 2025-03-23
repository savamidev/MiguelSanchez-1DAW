package interfaces;

import entidades.Persona;
import entidades.Trainer;

public interface IProfesor {

    String getDepartamento();
    void setDepartamento(String departamento);
    void darPokemon(Trainer trainer);
}
