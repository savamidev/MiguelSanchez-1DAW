package entidades;

public abstract class Persona {

    protected String name;

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
