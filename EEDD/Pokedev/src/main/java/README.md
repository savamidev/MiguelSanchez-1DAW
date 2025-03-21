```mermaid
    classDiagram
    class IRegion {
        <<interface>>
        addGym(gym : Gym) : void
        addTrainer(trainer : Trainer) : void
        addPokemon(pokemon : Pokemon) :void
        getGym() : List<Gym>
        getTrainer() : List<Trainer>
        getPokemon() : List<Pokemon>
    }
    
    class Region {
        name : String
        gyms : List<Gym>
        trainers : List<Trainer>
        pokemons : List<Pokemon>
    }

    class IGimnasio {
        <<interface>>
    }
    
    class Gimnasio {
        
    }

    class IPokemon {
        <<interface>>
    }
    
    class Pokemon {
        
    }
    
    class Persona {
        <<abstract>>
    }

    class IEntrenador {
        <<interface>>
    }
    
    class Entrenador {
        
    }

    class IProfesor {
        <<interface>>
    }
    
    class Profesor {
        
    }

    class Naturaleza {
        <<enumeration>>
    }
    
    class Tipo {
        <<enumeration>>
    }

    class IItem {
        <<interface>>
    }

    class Item {
    }
    
    class IMedalla {
        <<interface>>
    }
    
    
    IRegion <|.. Region : ser
    Region <-- Gimnasio : tener
    Region <-- Pokemon : tener
    Region <-- Profesor
    Region <-- Entrenador

    IGimnasio <|.. Gimnasio : ser
    Gimnasio <-- Medalla

    IPokemon <|.. Pokemon : ser
    Pokemon <-- Naturaleza
    Pokemon <-- Tipo

    Persona <|-- IProfesor
    IProfesor <|.. Profesor

    Persona <|-- IEntrenador
    IEntrenador <|.. Entrenador
    Entrenador <-- Item
    IItem <|.. Item

    IMedalla <|.. Medalla

```