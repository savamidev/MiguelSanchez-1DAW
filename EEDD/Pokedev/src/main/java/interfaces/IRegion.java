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
    void removePokemin(Pokemon pokemon);
    List<Pokemon> getPokemons();

    // Sistema de búsqueda
    Gimnasio findGym(String name);
    Trainer findTrainer(String name);
    Pokemon findPokemon(String name);

}
