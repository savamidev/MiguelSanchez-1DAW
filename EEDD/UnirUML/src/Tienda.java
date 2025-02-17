public class Tienda {

    private String nombre;
    private String propietario;
    private Integer idTributario;
    private static Intenger numComputadores;

    public Tienda(String nombre, String propietario, Integer idTributario, Integer numComputadores) {
        this.nombre = nombre;
        this.propietario = propietario;
        this.idTributario = idTributario;
        this.numComputadores = numComputadores;
    }

    public boolean tiendaLlena() {}

    public boolean tiendaVacia() {}

    public void addComputador(Computador computador) {}

    public boolean eliminarComputador(String marcaComputador) {}

    public int buscar(String marcaComputador) {}

    public void imprimir() {}

}
