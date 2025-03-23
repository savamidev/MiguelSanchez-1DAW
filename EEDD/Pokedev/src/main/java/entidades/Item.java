package entidades;

import enums.Naturaleza;
import interfaces.IItem;

import java.util.Random;

public class Item implements IItem {

    private String name;
    private String descripcion;

    /**
     * Constructor de Item.
     *
     * @param name        nombre del item.
     * @param descripcion descripción del item.
     */
    public Item(String name, String descripcion) {
        this.name = name;
        this.descripcion = descripcion;
    }

    @Override
    public String getNombreItem() {
        return this.name;
    }

    @Override
    public void setNombreItem(String name) {
        this.name = name;
    }

    @Override
    public String getDescripcion() {
        return this.descripcion;
    }

    @Override
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * Aplica un efecto sobre un Pokemon cambiando su naturaleza.
     * <p>
     * Se selecciona una naturaleza aleatoria distinta a la actual del Pokémon.
     *
     * @param pokemon el Pokemon al que se aplicará el efecto.
     */
    @Override
    public void efecto(Pokemon pokemon) {
        Random random = new Random();
        Naturaleza[] valores = Naturaleza.values();

        int randomNatu;
        Naturaleza nuevaNaturaleza;
        do {
            randomNatu = random.nextInt(valores.length);
            nuevaNaturaleza = valores[randomNatu];
        } while (nuevaNaturaleza.equals(pokemon.getNaturaleza()));

        pokemon.setNaturaleza(nuevaNaturaleza);
    }

    @Override
    public String toString() {
        return "Item{" +
                "name='" + this.name + '\'' +
                ", descripcion='" + this.descripcion + '\'' +
                '}';
    }
}
