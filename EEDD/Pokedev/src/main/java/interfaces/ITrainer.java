package interfaces;

import entidades.Item;
import entidades.Medalla;
import entidades.Pokemon;

import java.util.List;

public interface ITrainer {

    List<Pokemon> getPokemons();
    void addPokemon(Pokemon pokemon);
    void removePokemon(Pokemon pokemon);

    Boolean batalla(Pokemon pokemon);
    Boolean capturarPokemon(Pokemon pokemon);

    void addItem(Item item);
    List<Item> getItems();
    void usarItem(Pokemon pokemon);

    void addMedalla(Medalla medalla);
    List<Medalla> getMedallas();
    void removeMedalla(Medalla medalla);

}
