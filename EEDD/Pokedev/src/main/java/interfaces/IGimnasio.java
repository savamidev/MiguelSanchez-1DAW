package interfaces;

import entidades.Medalla;
import enums.Tipo;
import entidades.Trainer;

public interface IGimnasio {

    // Gestión de nombre
    String getNameGimnasio();
    void setNameGimnasio(String nameGimnasio);

    Trainer getLaeder();
    void setLeader(Trainer leader);

    Medalla getMedalla();
    void setMedalla(Medalla medalla);

    Tipo getTipo();
    void setTipo(Tipo tipo);

    void batalla(Trainer trainer);

}
