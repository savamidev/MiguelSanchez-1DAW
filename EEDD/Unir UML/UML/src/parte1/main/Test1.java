package parte1.main;

public class Test1 {
    
    public static void main(String[] args) throws Exception {
        
        Tienda tienda = new Tienda("Dell", "Miguel", 1, 2);

        System.out.println(tienda.tiendaVacia());
        System.out.println(tienda.tiendaLlena());

        tienda.addComptador(new Computadora("Acer", 500, "i5", "W10", 500));
        tienda.addComptador(new Computadora("Asus", 1500, "i7", "W10", 1500));

        tienda.eliminar("Acer");
        tienda.buscar("Asus");
    }
}
