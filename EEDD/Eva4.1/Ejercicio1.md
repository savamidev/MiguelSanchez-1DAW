```mermaid
    classDiagram


    class EmpresaPoseedora {
    }
    

    class Asesor {
    }

    class Vendedor {

    }

    EmpresaPoseedora "1" -- "0..n" Vendedor : tiene
    Vendedor -- Vendedor : capta
   

```