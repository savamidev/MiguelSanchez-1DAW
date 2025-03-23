package test;

import entidades.*;
import enums.Naturaleza;
import enums.Tipo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RegionTest {

    private Region region;
    private Gimnasio gym;
    private Medalla medalla;
    private Pokemon pokemon;
    private Trainer trainer;
    private Trainer leader;

    @BeforeEach
    void setUp() {
        region = new Region("Kanto");
        trainer = new Trainer("Ash Ketchum");
        leader = new Trainer("Brock");
        medalla = new Medalla("Medalla Rayo", "Representa la habilidad de un entrenador para manejar Pokémon de tipo Eléctrico");
        pokemon = new Pokemon("Pikachu", Tipo.ELECTRICO, Naturaleza.AUDACIOSA);
        gym = new Gimnasio("Gimnasio Eléctrico",leader, medalla, Tipo.ELECTRICO);
    }

    @Test
    void getNameRegion() {
        assertEquals("Kanto", region.getNameRegion());
    }

    @Test
    void setNameRegion() {
        region.setNameRegion("Johto");
        assertEquals("Johto", region.getNameRegion());
    }

    @Test
    void addGym() {
        assertNotNull(region.getGyms());

        region.addGym(gym);
        assertEquals(1, region.getGyms().size());
        assertTrue(region.getGyms().contains(gym));

    }

    @Test
    void removeGym() {

        assertNotNull(region.getGyms());

        region.addGym(gym);
        assertEquals(1, region.getGyms().size());
        assertTrue(region.getGyms().contains(gym));

        region.removeGym(gym);
        assertEquals(0, region.getGyms().size());
        assertFalse(region.getGyms().contains(gym));
    }

    @Test
    void getGyms() {
        assertNotNull(region.getGyms());
        assertEquals(0, region.getGyms().size());

        region.addGym(gym);
        assertEquals(1, region.getGyms().size());
        assertTrue(region.getGyms().contains(gym));
    }

    @Test
    void addTrainer() {
        assertNotNull(region.getTrainers());
        assertEquals(0, region.getTrainers().size());

        region.addTrainer(trainer);
        assertEquals(1, region.getTrainers().size());
        assertTrue(region.getTrainers().contains(trainer));
    }

    @Test
    void removeTrainer() {
        assertNotNull(region.getTrainers());
        assertEquals(0, region.getTrainers().size());

        region.addTrainer(trainer);
        assertEquals(1, region.getTrainers().size());
        assertTrue(region.getTrainers().contains(trainer));

        region.removeTrainer(trainer);
        assertEquals(0, region.getTrainers().size());
        assertFalse(region.getTrainers().contains(trainer));
    }

    @Test
    void getTrainers() {
        assertNotNull(region.getTrainers());
        assertEquals(0, region.getTrainers().size());

        region.addTrainer(trainer);
        assertEquals(1, region.getTrainers().size());
        assertTrue(region.getTrainers().contains(trainer));
    }

    @Test
    void addPokemon() {
        assertNotNull(region.getPokemons());
        assertEquals(0, region.getPokemons().size());

        region.addPokemon(pokemon);
        assertEquals(1, region.getPokemons().size());
        assertTrue(region.getPokemons().contains(pokemon));
    }

    @Test
    void removePokemon() {
        assertNotNull(region.getPokemons());
        assertEquals(0, region.getPokemons().size());

        region.addPokemon(pokemon);
        assertEquals(1, region.getPokemons().size());
        assertTrue(region.getPokemons().contains(pokemon));

        region.removePokemon(pokemon);
        assertEquals(0, region.getPokemons().size());
        assertFalse(region.getPokemons().contains(pokemon));
    }

    @Test
    void getPokemons() {
        assertNotNull(region.getPokemons());
        assertEquals(0, region.getPokemons().size());

        region.addPokemon(pokemon);
        assertEquals(1, region.getPokemons().size());
        assertTrue(region.getPokemons().contains(pokemon));
    }

    @Test
    void findGym() {
        assertNotNull(region.getGyms());
        assertEquals(0, region.getGyms().size());

        region.addGym(gym);
        assertEquals(1, region.getGyms().size());
        assertTrue(region.getGyms().contains(gym));
    }

    @Test
    void findTrainer() {
        assertNotNull(region.getTrainers());
        assertEquals(0, region.getTrainers().size());

        region.addTrainer(trainer);
        assertEquals(1, region.getTrainers().size());
        assertTrue(region.getTrainers().contains(trainer));
    }

    @Test
    void findPokemon() {
        assertNotNull(region.getPokemons());
        assertEquals(0, region.getPokemons().size());

        region.addPokemon(pokemon);
        assertEquals(1, region.getPokemons().size());
        assertTrue(region.getPokemons().contains(pokemon));
    }

    @Test
    void testToString() {
        region.addTrainer(trainer);
        region.addGym(gym);
        region.addPokemon(pokemon);

        assertEquals("Region{" +
                "name='Kanto'" +
                ", gyms=[" + gym.toString() + "]" +
                ", trainers=[" + trainer.toString() + "]" +
                ", pokemons=[" + pokemon.toString() + "]" +
                '}', region.toString());
    }
}