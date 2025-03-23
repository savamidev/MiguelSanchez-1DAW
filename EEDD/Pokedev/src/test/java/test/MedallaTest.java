package test;

import entidades.Medalla;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MedallaTest {

    private Medalla medalla;

    @BeforeEach
    void setUp() {
        medalla = new Medalla("Medalla de Oro", "Medalla de Oro para el primer lugar");

    }

    @Test
    void getNameMedalla() {
        assertEquals("Medalla de Oro", medalla.getNameMedalla());
    }

    @Test
    void setNameMedalla() {
        medalla.setNameMedalla("Medalla de Plata");
        assertEquals("Medalla de Plata", medalla.getNameMedalla());
    }

    @Test
    void getDescripcion() {
        assertEquals("Medalla de Oro para el primer lugar", medalla.getDescripcion());
    }

    @Test
    void setDescripcion() {
        medalla.setDescripcion("Medalla de Plata para el segundo lugar");
        assertEquals("Medalla de Plata para el segundo lugar", medalla.getDescripcion());
    }

    @Test
    void testToString() {
        assertEquals("Medalla{name='Medalla de Oro', descripcion='Medalla de Oro para el primer lugar'}", medalla.toString());
    }
}