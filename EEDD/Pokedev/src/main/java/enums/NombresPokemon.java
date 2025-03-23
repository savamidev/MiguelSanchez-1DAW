package enums;

public enum NombresPokemon {
    PIKACHU("Pikachu"),
    BULBASAUR("Bulbasaur"),
    CHARMANDER("Charmander"),
    SQUIRTLE("Squirtle"),
    EEVEE("Eevee"),
    SNORLAX("Snorlax"),
    JIGGLYPUFF("Jigglypuff"),
    MEOWTH("Meowth"),
    PSYDUCK("Psyduck"),
    GENGAR("Gengar");

    private final String nombre;

    NombresPokemon(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }
}
