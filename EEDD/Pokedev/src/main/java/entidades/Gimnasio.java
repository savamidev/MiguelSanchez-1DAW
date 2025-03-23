package entidades;

import enums.Tipo;
import interfaces.IGimnasio;

public class Gimnasio implements IGimnasio {

    private String name;
    private Trainer leader;
    private Medalla medalla;
    private Tipo tipo;

    /**
     * Constructor de la clase Gimnasio.
     *
     * @param name    nombre del gimnasio.
     * @param leader  entrenador líder del gimnasio.
     * @param medalla medalla otorgada al vencer el gimnasio.
     * @param tipo    tipo del gimnasio (utilizado para determinar efectividad en batallas).
     */
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

    /**
     * Simula una batalla entre el gimnasio y un entrenador.
     *
     * @param trainer el entrenador que desafía al gimnasio.
     * @return true si el entrenador gana la batalla, false en caso contrario.
     */
    @Override
    public Boolean batalla(Trainer trainer) {
        // Comprobamos que el entrenador tiene al menos un Pokémon
        if (trainer.getPokemons().isEmpty()) {
            System.out.println("El entrenador " + trainer.getNamePersona() + " no tiene Pokémon para batallar.");
            return false;
        }

        // Se selecciona el primer Pokémon del entrenador
        Pokemon pokemonEntrenador = trainer.getPokemons().get(0);
        boolean victoria = false;

        // Matriz de efectividad basada en el tipo del Pokémon del entrenador y el tipo del gimnasio
        switch (pokemonEntrenador.getTipo()) {
            case FUEGO:
                // FUEGO es efectivo contra PLANTA y HIELO
                victoria = (this.tipo == Tipo.PLANTA || this.tipo == Tipo.HIELO);
                break;
            case AGUA:
                // AGUA es efectivo contra FUEGO y TIERRA
                victoria = (this.tipo == Tipo.FUEGO || this.tipo == Tipo.TIERRA);
                break;
            case PLANTA:
                // PLANTA es efectivo contra AGUA y TIERRA
                victoria = (this.tipo == Tipo.AGUA || this.tipo == Tipo.TIERRA);
                break;
            case ELECTRICO:
                // ELECTRICO es efectivo contra AGUA
                victoria = (this.tipo == Tipo.AGUA);
                break;
            case TIERRA:
                // TIERRA es efectiva contra ELECTRICO y FUEGO
                victoria = (this.tipo == Tipo.ELECTRICO || this.tipo == Tipo.FUEGO);
                break;
            case HIELO:
                // HIELO es efectivo contra PLANTA y TIERRA
                victoria = (this.tipo == Tipo.PLANTA || this.tipo == Tipo.TIERRA);
                break;
        }

        // Mensajes informativos de la batalla
        System.out.println("El entrenador " + trainer.getNamePersona() + " desafía al Gimnasio " + this.getNameGimnasio());
        System.out.println("Su Pokémon: " + pokemonEntrenador.getNamePokemon() + " (" + pokemonEntrenador.getTipo() + ")");
        System.out.println("El Gimnasio es de tipo: " + this.tipo);
        if (victoria) {
            System.out.println("¡Has ganado la batalla del Gimnasio!");
            trainer.addMedalla(this.medalla);
        } else {
            System.out.println("Has perdido la batalla del Gimnasio.");
        }

        return victoria;
    }

    @Override
    public String toString() {
        return "Gimnasio{" +
                "name='" + getNameGimnasio() + '\'' +
                ", leader=" + getLaeder() +
                ", medalla=" + getMedalla() +
                ", tipo=" + getTipo() +
                '}';
    }
}
