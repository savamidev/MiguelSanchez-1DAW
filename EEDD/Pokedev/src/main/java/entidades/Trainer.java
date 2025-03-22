package entidades;

import interfaces.ITrainer;

import java.util.ArrayList;
import java.util.List;

public class Trainer extends Persona implements ITrainer {

    private List<Pokemon> pokemons = new ArrayList<>();

    public Trainer(String name) {
        super(name);
    }

    @Override
    public List<Pokemon> getPokemons() {
        return this.pokemons;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
    }

    @Override
    public void removePokemon(Pokemon pokemon) {

    }

    @Override
    public void batalla() {

    }

    @Override
    public String toString() {
        return "Trainer{" +
                "pokemons=" + this.pokemons +
                ", name='" + this.name + '\'' +
                '}';
    }
}
