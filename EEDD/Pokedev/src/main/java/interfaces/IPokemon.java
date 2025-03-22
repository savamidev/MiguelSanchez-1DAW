package interfaces;

import enums.Naturaleza;
import enums.Tipo;

public interface IPokemon {

    String getNamePokemon();
    void setNamePokemon(String namePokemon);

    Tipo getTipo();
    void setTipo(Tipo tipo);

    Naturaleza getNatuleza();
    void setNaturaleza(Naturaleza naturaleza);
}
