package entidades;

import enums.Naturaleza;
import enums.Tipo;
import interfaces.IPokemon;


public class Pokemon implements IPokemon {

    private String name;
    private Tipo tipo;
    private Naturaleza naturaleza;

    /**
     * Constructor de Pokemon.
     *
     * @param name        nombre del Pokémon.
     * @param tipo        tipo del Pokémon.
     * @param naturaleza naturaleza del Pokémon.
     */
    public Pokemon(String name, Tipo tipo, Naturaleza naturaleza) {
        this.name = name;
        this.tipo = tipo;
        this.naturaleza = naturaleza;
    }

    @Override
    public String getNamePokemon() {
        return this.name;
    }

    @Override
    public void setNamePokemon(String namePokemon) {
        this.name = namePokemon;
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
    public Naturaleza getNaturaleza() {
        return this.naturaleza;
    }

    @Override
    public void setNaturaleza(Naturaleza naturaleza) {
        this.naturaleza = naturaleza;
    }

    @Override
    public String toString() {
        return "Pokemon{" +
                "name='" + getNamePokemon() + '\'' +
                ", tipo=" + getTipo() +
                ", naturaleza=" + getNaturaleza() +
                '}';
    }
}
