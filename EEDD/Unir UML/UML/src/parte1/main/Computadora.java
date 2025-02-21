package main;

public class Computadora {
    private String marca;
    private int cantidadMemoria;
    private String carateristicaProcesador;
    private String sistemaOperativo;
    private double precio;

    public Computadora(String marca, int cantidadMemoria, String caracteristicaProcesador, String sistemaOperativo, double precio) {
        this.marca = marca;
        this.cantidadMemoria = cantidadMemoria;
        this.carateristicaProcesador = caracteristicaProcesador;
        this.sistemaOperativo = sistemaOperativo;
        this.precio = precio;
    }
    

    public String getMarca() {
        return marca;
    }
}
