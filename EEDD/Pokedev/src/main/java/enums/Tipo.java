package enums;

public enum Tipo {
    FUEGO("🔥"),
    AGUA("💧"),
    PLANTA("🍃"),
    ELECTRICO("⚡"),
    TIERRA("🌍"),
    HIELO("❄️");

    private final String icon;

    Tipo(String icon) {
        this.icon = icon;
    }

    @Override
    public String toString() {
        return String.format("%s %s", name(), this.icon);
    }
}
