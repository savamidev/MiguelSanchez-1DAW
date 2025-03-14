# 🧪 Diseño de Pruebas de Software 🔥

![Pruebas testing DS](https://res.cloudinary.com/pym/image/upload/f_auto/v1/articles/2019/testing/tipos-prueba-software.png)

> "El código sin pruebas es solo una suposición" - Un desarrollador con experiencia 👀


---

## 🏗️ 1. Planificación de las Pruebas:

### 🎯 ¿Por qué son necesarias?

✅ **Mitigación de riesgos**: Detectar errores en etapas tempranas evita fallos críticos en producción.  
✅ **Asegurar calidad**: Garantiza que el software cumple con los requisitos funcionales y no funcionales.  
✅ **Optimización de costes**: Corregir un error en producción cuesta hasta **100 veces más** que hacerlo en desarrollo.  
✅ **Experiencia del usuario**: Un software robusto y libre de fallos genera confianza y satisfacción.  

### 🛠️ ¿Cómo se organizan?

1️⃣ **Definir objetivos** → ¿Qué queremos probar? (Funcionalidad, rendimiento, seguridad, etc.)  
2️⃣ **Seleccionar estrategias** → Caja negra, caja blanca, regresión, pruebas automatizadas.  
3️⃣ **Asignar recursos** → Herramientas, equipo, tiempo y presupuesto.  
4️⃣ **Diseñar casos de prueba** → Definir entradas, pasos y resultados esperados.  
5️⃣ **Ejecutar pruebas** → Registrar hallazgos, generar reportes y documentar errores.  
6️⃣ **Analizar y corregir** → Refinar el código, iterar y volver a probar.  



### 🏗️ **Ejemplos de software con herramientas de planificación de pruebas**  
✅ **TestRail** → Herramienta de gestión de pruebas que permite planificar, realizar un seguimiento y generar informes sobre el progreso de las pruebas de software. Se puede definir el alcance y los objetivos, asignar responsabilidades y visualizar cronogramas. 



---

## 🔍 2. Tipos de Pruebas: Diseccionando el Software 🩺

```ascii
  _______     _______     _______     _______     _______     _______
 |       |   |       |   |       |   |       |   |       |   |       |
 | Negra | → | Carga | → | Estrés| → | Estab.| → | Regr. | → | Func. |
 |_______|   |_______|   |_______|   |_______|   |_______|   |_______|

  _______
 |       |
 |Blanca |
 |_______|
```


### 🧑‍💻 **Pruebas de Caja Negra:**
Las pruebas de caja negra se enfocan en verificar la funcionalidad del software sin tener conocimiento sobre su estructura interna.

- **Pruebas Funcionales:** Verifican que el software cumpla con los requisitos establecidos sin evaluar el código fuente.
- **Pruebas de Regresión:** Se realizan para garantizar que los cambios recientes no afecten el funcionamiento del software.
- **Pruebas de Seguridad:** Evalúan la resistencia del sistema a ataques y vulnerabilidades.

- **Ejemplo de software para pruebas de caja negra:**  
   - **Selenium**: Herramienta de automatización de pruebas para aplicaciones web, utilizada para realizar pruebas funcionales sin conocer la lógica interna del sistema.
   - **OWASP ZAP**: Herramienta de pruebas de seguridad de aplicaciones web que ayuda a identificar vulnerabilidades de seguridad.
   - **QTP/UFT (Unified Functional Testing)**: Herramienta de pruebas automatizadas que ayuda a ejecutar pruebas de regresión y garantizar que el sistema funcione correctamente después de realizar modificaciones.

### 🧑‍🔬 **Pruebas de Caja Blanca:**
Estas pruebas se centran en el funcionamiento interno del software, evaluando la estructura de código, los flujos de control y las estructuras de datos.

- **Pruebas Unitarias:** Evalúan funciones o métodos específicos dentro del código.
- **Pruebas de Integración:** Verifican la correcta interacción entre diferentes módulos del software.
- **Pruebas de Cobertura de Código:** Analizan qué partes del código han sido ejecutadas durante las pruebas.

- **Ejemplo de software para pruebas de caja blanca:**  
   - **JUnit**: Framework de pruebas unitarias para Java que permite comprobar el comportamiento interno de las funciones y métodos del software.

### 🧑‍🔧 **Pruebas de Rendimiento:**
Evalúan la capacidad de respuesta y estabilidad del software bajo diferentes condiciones de carga.

- **Ejemplo de software para pruebas de rendimiento:**  
   - **JMeter**: Herramienta para realizar pruebas de rendimiento que mide el comportamiento de aplicaciones bajo carga.


---

## 📝 3. Procedimientos y Casos de Prueba: De la Teoría a la Práctica 

Proceso estructurado que busca garantizar la calidad del software antes de su implementación.

### ☑️ Diseño de casos de prueba
Escenarios específicos diseñados para validar funcionalidades del software. Se crean a partir de los requisitos del sistema, considerando tanto los casos de uso normales como las posibles excepciones.

##### ⚠️ Deben incluir:

- Identificador único: Para su trazabilidad.
- Descripción del caso: Explicación clara de lo que se va a probar.
- Datos de entrada: Valores específicos que el usuario o el sistema deben ingresar.
- Pasos a seguir: Acciones detalladas para ejecutar la prueba.
- Resultado esperado: Qué debe ocurrir si la funcionalidad es correcta.
- Resultado obtenido: Lo que realmente ocurre tras la prueba.


### ☑️ Diseño de procedimientos de prueba
Organizan la ejecución de los casos de prueba en un flujo lógico y eficiente.

##### ⚠️ Deben incluir:

- Definición del entorno de pruebas: Se establecen los requisitos del sistema, software y hardware necesarios para la ejecución.
- Selección y orden de los casos de prueba: Se priorizan los casos de prueba según su impacto en el software.
- Ejecución y documentación: Se sigue el plan establecido y se registran los resultados para futuras referencias.
- Análisis de resultados: Se comparan los resultados obtenidos con los esperados y se identifican defectos o errores.
- Revisión y mantenimiento: Los casos de prueba se ajustan conforme evoluciona el software o se detectan mejoras en la metodología.


### ☑️ Diseño de procedimientos de prueba

- Pruebas unitarias: Se centran en pequeños fragmentos de código, como funciones o métodos.
- Pruebas de integración: Evalúan la interacción entre módulos o sistemas.
- Pruebas funcionales: Verifican que el software cumple con los requisitos especificados.
- Pruebas de rendimiento: Analizan la respuesta del sistema bajo diferentes condiciones de carga.
- Pruebas de regresión: Aseguran que los cambios o correcciones no afecten funcionalidades existentes.
  


✅ **Consejo**: Automatiza pruebas repetitivas con herramientas como **Selenium**, **Cypress** o **JUnit**.



### 🏗️ **Ejemplo de software para estrategias de ejecución de pruebas**  
   - **TestLink**: Es una plataforma para gestionar casos de prueba, planificar la ejecución y llevar el control de las pruebas realizadas.

---

## 🛠️ 4. Herramientas de Depuración

### ¿Qué son?
- **Definición**: Funcionalidades integradas en los IDEs para supervisar la ejecución de programas y detectar errores. 🖥️  

### ¿Cómo ayudan a detectar errores?
- **Funcionalidades clave**:  
    - 🛑 **Puntos de ruptura**: Pausan la ejecución en puntos específicos.  
    - 👣 **Ejecución paso a paso**: Permite analizar el código línea por línea.  
    - 🔍 **Inspección de variables**: Muestra los valores de las variables en tiempo real.  
    - 🧮 **Evaluación de expresiones**: Comprueba el resultado de expresiones o condiciones lógicas.  

- **Tipos de errores detectados**:  
    - 🚨 **Errores de compilación**: Detectados automáticamente por el IDE.  
    - 🐞 **Errores lógicos (bugs)**: Identificados mediante análisis del flujo del programa y valores de variables.  

### 🏗️ **Ejemplos de software con herramientas de depuración**  
✅ **Visual Studio** → Permite depuración avanzada en aplicaciones .NET con breakpoints y análisis en tiempo real.  
✅ **Eclipse** → Depura código Java con seguimiento de variables y ejecución controlada.  
✅ **PyCharm** → Depuración en Python con herramientas de inspección de código y ejecución paso a paso.  

---

## ✅ 5. Validaciones

### Importancia del cliente en la evaluación del software  
- **Rol del cliente**:  
    - 🎯 **Decisión final**: El cliente decide si el software cumple con los requisitos.  
    - 👀 **Detección de problemas**: Identifica errores de usabilidad y funcionalidad que los desarrolladores pueden pasar por alto.  
    - 🔄 **Retroalimentación**: Proporciona comentarios para ajustes y mejoras antes de la entrega final.  

- **Proceso de validación**:  
    - 🧪 **Pruebas de caja negra**: Demuestran la conformidad con los requisitos sin evaluar el código interno.  
    - 📋 **Plan y procedimiento de pruebas**: Aseguran que se cumplen todos los requisitos funcionales, de rendimiento, documentación, etc.  

### 🏗️ **Ejemplos de software con validaciones de cliente**  
✅ **SAP (ERP)** → Realiza validaciones con clientes para asegurar que la solución cubre sus necesidades empresariales.  
✅ **Salesforce (CRM)** → Sus usuarios prueban nuevas funcionalidades antes del lanzamiento final.  
✅ **Jira (Gestión de proyectos)** → Implementa validaciones con equipos de clientes para mejorar la experiencia de usuario.  

---

## 📜 6. Normas de Calidad  

### Principales estándares utilizados en la industria  
- **BSI (British Standards Institution)**:  
    - 📖 **BS 7925-1**: Vocabulario para pruebas de software.  
    - 📖 **BS 7925-2**: Pruebas de componentes de software.  

- **IEEE (Institute of Electrical and Electronics Engineers)**:  
    - 📄 **IEEE 829**: Documentación de pruebas de software.  
    - 📄 **IEEE 1008**: Pruebas de unidad.  

- **ISO/IEC 29119**:  
    - 🌍 **Norma unificadora**: Cubre vocabulario, procesos, documentación y técnicas para todo el ciclo de vida del software.  
    - 🛠️ **Aplicación**: Utilizada en cualquier proyecto de desarrollo o mantenimiento de software.  

### 🏗️ **Ejemplos de software que cumplen normas de calidad**  
✅ **Windows (Microsoft)** → Implementa normas ISO para certificaciones de calidad y seguridad en actualizaciones.  
✅ **Linux** → Sigue estándares IEEE e ISO para garantizar estabilidad y compatibilidad.  
✅ **Tesla y BMW** → Aplican ISO/IEC 29119 en el software de conducción autónoma y sistemas embebidos.  
