package entidades;


public abstract class Persona {

    protected String name;

    /**
     * Constructor de Persona.
     *
     * @param name nombre de la persona.
     */
    public Persona(String name) {
        this.name = name;
    }

    public String getNamePersona() {
        return this.name;
    }

    public void setNamePersona(String name) {
        this.name = name;
    }
}
