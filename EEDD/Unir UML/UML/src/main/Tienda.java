package main;

import java.util.ArrayList;

public class Tienda {
    private String nombre = "";
    private String propietario = "";
    private int identificador = 0;
    private static int numeroProductos = 0;
    private ArrayList<Computadora> computadoras;

    public Tienda(String nombre, String propietario, int identificador, int numeroProductos) {
        this.nombre = nombre;
        this.propietario = propietario;
        this.identificador = identificador;
        this.numeroProductos = numeroProductos;
    }

    public boolean tiendaLlena() {
        if (computadoras.size() == numeroProductos) {
            return true;
        }
        return false;
    }

    public boolean tiendaVacia() {
        if (computadoras == null) {
            return true;
        }
        return false;
    }

    public void addComptador(Computadora computadora) throws Exception {
        if (tiendaLlena()) {
            throw new Exception("Tienda llena, no es posible añadir ordenadores");
        }

        computadoras.add(computadora);
        System.out.println("Computadora añadida correctamente.");
    }

    public void eliminar(String marcaComputadora) {
        boolean check = false;
        for (Computadora computadora : computadoras) {
            if (computadora.getMarca().equals(marcaComputadora)) {
                computadoras.remove(computadora);
                System.out.println("Se ha eliminado correctamente.");
                check = true;
            }
        }
        if (!check) {
            System.out.println("La marca no ha sido encontrada.");
        }
    }

    public void buscar(String marcaComputadora) {
        boolean check = false;
        for (Computadora computadora : computadoras) {
            if (computadora.getMarca().equals(marcaComputadora)) {
                System.out.println(computadora);
                check = true;
            }
        }
        if (!check) {
            System.out.println("La marca no ha sido encontrada.");
        }
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}
