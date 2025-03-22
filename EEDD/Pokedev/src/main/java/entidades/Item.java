package entidades;

import interfaces.IItem;

public class Item implements IItem {

    private String name;
    private String descripcion;

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

    @Override
    public void efecto(Pokemon pokemon) {

    }

    @Override
    public String toString() {
        return "Item{" +
                "name='" + this.name + '\'' +
                ", descripcion='" + this.descripcion + '\'' +
                '}';
    }
}
