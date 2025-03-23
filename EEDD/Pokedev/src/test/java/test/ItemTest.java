package test;

import entidades.Item;
import entidades.Pokemon;
import enums.Naturaleza;
import enums.Tipo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ItemTest {

    private Item item;
    private Pokemon pikachu;

    @BeforeEach
    void setUp() {
        item = new Item("Cambio de naturaleza", "Cambia la naturaleza de un pokemon");
        pikachu = new Pokemon("Pikachu", Tipo.ELECTRICO, Naturaleza.AUDACIOSA);

    }

    @Test
    void getNombreItem() {
        assertEquals("Cambio de naturaleza", item.getNombreItem());
    }

    @Test
    void setNombreItem() {
        item.setNombreItem("Cambio de naturaleza 2");
        assertEquals("Cambio de naturaleza 2", item.getNombreItem());
    }

    @Test
    void getDescripcion() {
        assertEquals("Cambia la naturaleza de un pokemon", item.getDescripcion());
    }

    @Test
    void setDescripcion() {
        item.setDescripcion("Cambia la naturaleza de un pokemon 2");
        assertEquals("Cambia la naturaleza de un pokemon 2", item.getDescripcion());
    }

    @Test
    void efecto() {
    }

    @Test
    void testToString() {
        assertEquals("Item{name='Cambio de naturaleza', descripcion='Cambia la naturaleza de un pokemon'}", item.toString());
    }
}