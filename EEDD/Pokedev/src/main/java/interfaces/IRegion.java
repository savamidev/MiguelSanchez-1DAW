package interfaces;

import entidades.Gimnasio;
import entidades.Pokemon;
import entidades.Trainer;

import java.util.List;

public interface IRegion {

    // Acceso al nombre de la Región
    String getNameRegion();
    void setNameRegion(String nameRegion);

    // Gestión de gyms en Región
    void addGym(Gimnasio gimnasio);
    void removeGym(Gimnasio gimnasio);
    List<Gimnasio> getGyms();

    // Gestión de entrenadores
    void addTrainer(Trainer trainer);
    void removeTrainer(Trainer trainer);
    List<Trainer> getTrainers();

    // Gestión de pokemons
    void addPokemon(Pokemon pokemon);
    void removePokemon(Pokemon pokemon);
    List<Pokemon> getPokemons();

    // Sistema de búsqueda
    void findGym(String name);
    void findTrainer(String name);
    void findPokemon(String name);

}
