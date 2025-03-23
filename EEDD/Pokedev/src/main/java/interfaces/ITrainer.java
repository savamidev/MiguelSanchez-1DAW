package interfaces;

import entidades.Item;
import entidades.Pokemon;

import java.util.List;

public interface ITrainer {

    List<Pokemon> getPokemons();
    void addPokemon(Pokemon pokemon);
    void removePokemon(Pokemon pokemon);

    Boolean batalla(Pokemon pokemon);
    Boolean capturarPokemon(Pokemon pokemon);

    void addItem(Item item);
    void usarItem(Pokemon pokemon);
}
