package interfaces;

import entidades.Pokemon;

public interface IItem {

    String getNombreItem();
    void setNombreItem(String name);

    String getDescripcion();
    void setDescripcion(String descripcion);

    void efecto(Pokemon pokemon);

}
