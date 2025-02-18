package parte2;

public class Test2 {
    public static void main(String[] args) {
        CursoUniversitario cursoBachiller = new CursoUniversitario();
        cursoBachiller.addEstudiante(new Estudiante("Juan", "Pérez", 1, 7));
        cursoBachiller.addEstudiante(new Estudiante("Marta", "Pérez", 1, 7));
        cursoBachiller.addEstudiante(new Estudiante("Marta", "Pérez", 1, 7));
        
        buscarEstudiante();
    }


}
