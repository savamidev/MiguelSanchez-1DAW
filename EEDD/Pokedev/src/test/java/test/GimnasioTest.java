package test;

import entidades.Gimnasio;
import entidades.Medalla;
import entidades.Pokemon;
import entidades.Trainer;
import enums.Naturaleza;
import enums.Tipo;
import interfaces.ITrainer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GimnasioTest {

    private Gimnasio gimnasio;
    private Trainer leader;
    private Trainer trainer;
    private Medalla medalla;
    private Pokemon pokemonLeader;
    private Pokemon pokemonTrainer;

    @BeforeEach
    void setUp() {
        leader = new Trainer( "Caza Bichos Juan");
        trainer = new Trainer("Ash Ketchum");
        pokemonLeader = new Pokemon("Butterfree", Tipo.AGUA, Naturaleza.CALMADA);
        pokemonTrainer = new Pokemon("Pikachu", Tipo.ELECTRICO, Naturaleza.AUDACIOSA);
        medalla = new Medalla("Medalla de Ciudad Celeste", "Medalla de Ciudad Celeste en Kanto");
        gimnasio = new Gimnasio("Gimnasio de Ciudad Celeste", leader, medalla, Tipo.PLANTA);
    }

    @Test
    void getNameGimnasio() {
        assertEquals("Gimnasio de Ciudad Celeste", gimnasio.getNameGimnasio());
    }

    @Test
    void setNameGimnasio() {
        gimnasio.setNameGimnasio("Gimnasio de Ciudad Celestón");
        assertEquals("Gimnasio de Ciudad Celestón", gimnasio.getNameGimnasio());
    }

    @Test
    void getLaeder() {
        assertEquals(leader, gimnasio.getLaeder());
    }

    @Test
    void setLeader() {
        Trainer leader2 = new Trainer("Caza Bichos Pedro");
        gimnasio.setLeader(leader2);
        assertEquals(leader2, gimnasio.getLaeder());
    }

    @Test
    void getMedalla() {
        assertEquals(medalla, gimnasio.getMedalla());
    }

    @Test
    void setMedalla() {
        Medalla medalla2 = new Medalla("Medalla de Ciudad Plateada", "Medalla de Ciudad Plateada en Kanto");
        gimnasio.setMedalla(medalla2);
        assertEquals(medalla2, gimnasio.getMedalla());
    }

    @Test
    void getTipo() {
        assertEquals(Tipo.PLANTA, gimnasio.getTipo());
    }

    @Test
    void setTipo() {
        gimnasio.setTipo(Tipo.FUEGO);
        assertEquals(Tipo.FUEGO, gimnasio.getTipo());
    }

    @Test
    void batalla() {
        assertNotNull(leader);
        assertNotNull(trainer);

        assertNotNull(leader.getPokemons());
        assertNotNull(trainer.getPokemons());

        assertEquals(0, leader.getPokemons().size());
        assertEquals(0, trainer.getPokemons().size());

        leader.addPokemon(pokemonLeader);
        trainer.addPokemon(pokemonTrainer);

        assertEquals(1, leader.getPokemons().size());
        assertEquals(1, trainer.getPokemons().size());

        if (gimnasio.batalla(trainer)) {
            assertEquals(medalla, trainer.getMedallas().contains(medalla));
        } else {
            assertFalse(trainer.getMedallas().contains(medalla));
        };
    }

    @Test
    void testToString() {
        String expected = "Gimnasio{name='Gimnasio de Ciudad Celeste', leader=Trainer{pokemons=[], name='Caza Bichos Juan'}, medalla=Medalla{name='Medalla de Ciudad Celeste', descripcion='Medalla de Ciudad Celeste en Kanto'}, tipo=PLANTA 🍃}";
        assertEquals(expected, gimnasio.toString());

    }
}