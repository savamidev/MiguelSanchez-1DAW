package main;

public class Tienda {
    private String nombre;
    private String propietario;
    private int identificador;
    private static int numeroProductos;

    public Tienda(String nombre, String propietario, int identificador, int numeroProductos) {
        this.nombre = nombre;
        this.propietario = propietario;
        this.identificador = identificador;
        this.numeroProductos = numeroProductos;

    }

    public boolean tiendaLlena() {
        return numeroProductos > 100;
    }

    public boolean tiendaVacia() {
        return numeroProductos == 0;
    }

    public void addComptador(Computadora computadora) {
        numeroProductos++;
    }

    // elimiar

    public int buscar(Computadora computadora) {
        return numeroProductos;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}
