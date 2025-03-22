package interfaces;

import entidades.Pokemon;

import java.util.List;

public interface ITrainer {

    List<Pokemon> getPokemons();
    void addPokemon(Pokemon pokemon);
    void removePokemon(Pokemon pokemon);

    void batalla();
}
