package test;

import entidades.Profesor;
import entidades.Trainer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProfesorTest {

    private Profesor profesor;
    private Trainer trainer;

    @BeforeEach
    void setUp() {
        profesor = new Profesor("Oak", "PokeAcademy");
        trainer = new Trainer("Ash");
    }

    @Test
    void getDepartamento() {
        assertEquals("PokeAcademy", profesor.getDepartamento());
    }

    @Test
    void setDepartamento() {
        profesor.setDepartamento("PokeAcademy2");
        assertEquals("PokeAcademy2", profesor.getDepartamento());
    }

    @Test
    void darPokemon() {
        assertNotNull(trainer, "El entrenador no debería ser nulo.");
        assertNotNull(trainer.getPokemons(), "La lista de pokemons del entrenador no debería ser nula.");

        profesor.darPokemon(trainer);
        assertNotNull(trainer.getPokemons(), "La lista de pokemons del entrenador no debería ser nula.");
        assertEquals(1, trainer.getPokemons().size(), "El entrenador debería tener un pokemon.");
    }
}