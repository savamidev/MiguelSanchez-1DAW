package entidades;

import interfaces.IProfesor;


public class Profesor extends Persona implements IProfesor {

    private String departamento;

    /**
     * Constructor de Profesor.
     *
     * @param name         nombre del profesor.
     * @param departamento departamento al que pertenece el profesor.
     */
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

    /**
     * Otorga un Pokémon a un entrenador.
     *
     * Utiliza la fábrica de Pokémon para crear un nuevo Pokémon y lo añade al entrenador
     *
     * @param trainer el entrenador que recibirá el Pokémon.
     */
    @Override
    public void darPokemon(Trainer trainer) {
        if (trainer == null) {
            System.out.println("No se proporcionó un entrenador válido.");
            return;
        }
        trainer.addPokemon(FactoriaPokemon.crearPokemon());
    }

    @Override
    public String toString() {
        return "Profesor{" +
                "departamento='" + this.departamento + '\'' +
                ", name='" + this.name + '\'' +
                '}';
    }
}
