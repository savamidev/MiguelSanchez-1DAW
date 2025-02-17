package main;

public class Test1 {
    
    public static void main(String[] args) {
        
        Tienda dell = new Tienda("Tienda Cuántica", "Pepito Pérez", 123456, 0);
        dell.addComptador(new Computadora("Acer", 50, "Intel iCore 7", "Windows", 1850000));
        dell.addComptador(new Computadora("Toshiba", 80, "Intel iCore 5", "Windows", 1550000));
        dell.addComptador(new Computadora("Apple", 100, "Intel iCore 7", "MacOS", 250000));

        System.out.println(dell.tiendaLlena());
        System.out.println(dell.tiendaVacia());

    }
}
