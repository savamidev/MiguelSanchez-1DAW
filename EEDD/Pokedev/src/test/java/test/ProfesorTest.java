package test;

import entidades.Profesor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProfesorTest {

    private Profesor profesor;

    @BeforeEach
    void setUp() {
         profesor = new Profesor("Oak", "PokeAcademy");
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

}