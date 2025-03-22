package entidades;

import interfaces.IRegion;

import java.util.List;

public class Region implements IRegion {

    private String name;
    private List<Gimnasio> gyms;
    private List<Trainer> trainers;
    private List<Pokemon> pokemons;

    public Region(String name) {
        this.name = name;
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

    }

    @Override
    public void removeGym(Gimnasio gimnasio) {

    }

    @Override
    public List<Gimnasio> getGyms() {
        return this.gyms;
    }

    @Override
    public void addTrainer(Trainer trainer) {

    }

    @Override
    public void removeTrainer(Trainer trainer) {

    }

    @Override
    public List<Trainer> getTrainers() {
        return this.trainers;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {

    }

    @Override
    public void removePokemin(Pokemon pokemon) {

    }

    @Override
    public List<Pokemon> getPokemons() {
        return this.pokemons;
    }

    @Override
    public Gimnasio findGym(String name) {
        return null;
    }

    @Override
    public Trainer findTrainer(String name) {
        return null;
    }

    @Override
    public Pokemon findPokemon(String name) {
        return null;
    }

    @Override
    public String toString() {
        return "Region{" +
                "name='" + this.name + '\'' +
                ", gyms=" + this.gyms +
                ", trainers=" + this.trainers +
                ", pokemons=" + this.pokemons +
                '}';
    }
}
