package entidades;

import interfaces.IRegion;

import java.util.ArrayList;
import java.util.List;


public class Region implements IRegion {

    private String name;
    private List<Gimnasio> gyms;
    private List<Trainer> trainers;
    private List<Pokemon> pokemons;

    /**
     * Constructor de Region.
     *
     * @param name nombre de la región.
     */
    public Region(String name) {
        this.name = name;
        gyms = new ArrayList<>();
        trainers = new ArrayList<>();
        pokemons = new ArrayList<>();
    }

    @Override
    public String getNameRegion() {
        return this.name;
    }

    @Override
    public void setNameRegion(String nameRegion) {
        this.name = nameRegion;
    }

    @Override
    public void addGym(Gimnasio gimnasio) {
        if (!this.gyms.contains(gimnasio)) {
            this.gyms.add(gimnasio);
        }
    }

    @Override
    public void removeGym(Gimnasio gimnasio) {
        if (this.gyms.contains(gimnasio)) {
            this.gyms.remove(gimnasio);
        }
    }

    @Override
    public List<Gimnasio> getGyms() {
        return this.gyms;
    }

    @Override
    public void addTrainer(Trainer trainer) {
        if (!this.trainers.contains(trainer)) {
            this.trainers.add(trainer);
        }
    }

    @Override
    public void removeTrainer(Trainer trainer) {
        if (trainers.contains(trainer)) {
            this.trainers.remove(trainer);
        }
    }

    @Override
    public List<Trainer> getTrainers() {
        return this.trainers;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        if (!this.pokemons.contains(pokemon)) {
            this.pokemons.add(pokemon);
        }
    }

    @Override
    public void removePokemon(Pokemon pokemon) {
        if (this.pokemons.contains(pokemon)) {
            this.pokemons.remove(pokemon);
        }
    }

    @Override
    public List<Pokemon> getPokemons() {
        return this.pokemons;
    }

    @Override
    public void findGym(String name) {
        if (!this.gyms.isEmpty()) {
            for (Gimnasio gym : this.gyms) {
                if (gym.getNameGimnasio().equals(name)) {
                    System.out.println("Gym found: " + gym.toString());
                }
            }
        }
    }

    @Override
    public void findTrainer(String name) {
        if (!this.trainers.isEmpty()) {
            for (Trainer trainer : this.trainers) {
                if (trainer.getNamePersona().equals(name)) {
                    System.out.println("Gym found: " + trainer.toString());
                }
            }
        }
    }

    @Override
    public void findPokemon(String name) {
        if (!this.pokemons.isEmpty()) {
            for (Pokemon pokemon : this.pokemons) {
                if (pokemon.getNamePokemon().equals(name)) {
                    System.out.println("Gym found: " + pokemon.toString());
                }
            }
        }
    }

    @Override
    public String toString() {
        return "Region{" +
                "name='" + this.name + '\'' +
                ", gyms=" + this.gyms.toString() +
                ", trainers=" + this.trainers.toString() +
                ", pokemons=" + this.pokemons.toString() +
                '}';
    }
}
