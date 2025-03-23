package entidades;

import enums.Naturaleza;
import enums.NombresPokemon;
import enums.Tipo;

/**
 * Utilizada para crear instancias aleatorias de Pokemon utilizando valores
 * aleatorios de nombres, tipos y naturalezas.
 */
public class FactoriaPokemon {

    /**
     * Crea y retorna un objeto Pokemon con atributos aleatorios.
     *
     * @return una instancia de Pokemon con nombre, tipo y naturaleza aleatorios.
     */
    public static Pokemon crearPokemon() {
        NombresPokemon[] nombresPokemons = NombresPokemon.values();
        String nombre = nombresPokemons[(int) (Math.random() * nombresPokemons.length)].getNombre();

        Tipo[] tipos = Tipo.values();
        Naturaleza[] naturalezas = Naturaleza.values();
        Tipo tipoAleatorio = tipos[(int) (Math.random() * tipos.length)];
        Naturaleza naturalezaAleatoria = naturalezas[(int) (Math.random() * naturalezas.length)];

        return new Pokemon(nombre, tipoAleatorio, naturalezaAleatoria);
    }
}
