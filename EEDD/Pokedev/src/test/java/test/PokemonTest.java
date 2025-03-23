package test;

import entidades.Pokemon;
import enums.Naturaleza;
import enums.Tipo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PokemonTest {

    private Pokemon pokemon;

    @BeforeEach
    void setUp() {
        pokemon = new Pokemon("Pikachu", Tipo.ELECTRICO, Naturaleza.AUDACIOSA);
    }

    @Test
    void getNamePokemon() {
        assertEquals("Pikachu", pokemon.getNamePokemon());
    }

    @Test
    void setNamePokemon() {
        pokemon.setNamePokemon("Charizar");
        assertEquals("Charizar", pokemon.getNamePokemon());
    }

    @Test
    void getTipo() {
        assertEquals("Pikachu", pokemon.getNamePokemon());
    }

    @Test
    void setTipo() {
        pokemon.setTipo(Tipo.FUEGO);
        assertEquals(Tipo.FUEGO, pokemon.getTipo());
    }

    @Test
    void getNaturaleza() {
        assertEquals(Naturaleza.AUDACIOSA, pokemon.getNaturaleza());
    }

    @Test
    void setNaturaleza() {
        pokemon.setNaturaleza(Naturaleza.CALMADA);
        assertEquals(Naturaleza.CALMADA, pokemon.getNaturaleza());
    }

    @Test
    void testToString() {
        assertEquals("Pokemon{name='Pikachu', tipo=ELECTRICO ⚡, naturaleza=AUDACIOSA 🚀}", pokemon.toString());
    }

}