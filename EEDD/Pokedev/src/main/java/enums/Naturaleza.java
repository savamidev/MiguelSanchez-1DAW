package enums;

public enum Naturaleza {
    AGRESIVA("💢"),
    CALMADA("😌"),
    TIMIDA("🙈"),
    AUDACIOSA("🚀"),
    SERENA("☮️");

    private final String icon;

    Naturaleza(String icon) {
        this.icon = icon;
    }

    @Override
    public String toString() {
        return String.format("%s %s", name(), this.icon);
    }
}
