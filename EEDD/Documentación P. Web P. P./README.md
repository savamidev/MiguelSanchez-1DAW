# Plataforma Web de Gestión Integral de Almacenes y Stock



**Descripción General:** 

Desarrollar una aplicación web modular y escalable destinada a la gestión completa de inventarios y almacenes para empresas de distribución y fabricación. El sistema permitirá planificar y supervisar flujos de entrada y salida de mercancías, controlar niveles de stock en tiempo real, optimizar la ubicación interna de productos, generar alarmas automáticas ante umbrales críticos y facilitar la preparación de pedidos y envíos. Además, proveerá análisis y reportes dinámicos para apoyar la toma de decisiones operativas y estratégicas.



**Principales Módulos y Funcionalidades:** 

1. **Control de Inventario** 

  - Registro y alta de productos con atributos (código, descripción, dimensiones, lote y caducidad). 

  - Gestión de múltiples almacenes y ubicaciones internas (pasillos, estantes, zonas de picking). 

  - Ajustes de inventario (recepciones, traslados internos, mermas, devoluciones). 

  - Niveles de stock en tiempo real y vistas históricas de movimientos.



2. **Gestión de Pedidos y Órdenes de Trabajo** 

  - Creación de órdenes de salida a clientes o producción. 

  - Generación de listados de picking con rutas optimizadas. 

  - Confirmación de preparación, embalaje y expedición. 

  - Integración con transportistas para etiquetas y seguimiento de envíos.



3. **Alertas y Notificaciones** 

  - Alertas automáticas por umbrales mínimos/máximos de stock. 

  - Notificaciones por correo o en la interfaz para recepciones tardías, discrepancias en inventario o artículos próximos a caducar. 

  - Recordatorios de recuentos cíclicos (inventarios periódicos).



4. **Informes y Analítica** 

  - Dashboards de inventario: rotación de productos, antigüedad de stock, tasa de cumplimiento de pedidos. 

  - Reportes personalizables (exportación CSV/PDF). 

  - KPI de eficiencia operativa y costes logísticos.



5. **Seguridad y Auditoría** 

  - Control de accesos por rol con autenticación multifactor. 

  - Registro de auditoría de acciones críticas (quién, cuándo y qué cambió). 

  - Encriptación de datos sensibles en tránsito y reposo.



---



**Roles y Permisos:** 

1. **Administrador de Plataforma** 

  - Gestión de usuarios, roles y permisos. 

  - Configuración global: almacenes, ubicaciones, tipos de alerta y parámetros de negocio. 

  - Acceso a todos los módulos y reportes.



2. **Gestor de Almacén** 

  - Supervisión de entradas y salidas de stock. 

  - Validación de recepciones, traslados y ajustes de inventario. 

  - Generación de órdenes de picking y control de envíos.



3. **Operario de Inventario** 

  - Ejecución de recuentos y validación de discrepancias. 

  - Escaneo de códigos de barras/RFID para movimientos físicos. 

  - Reporte de incidencias (daños, roturas, caducidades).



4. **Analista de Logística** 

  - Acceso a dashboards y generación de informes. 

  - Configuración de métricas y KPIs. 

  - Proyección de necesidades de reaprovisionamiento.



---



**Alcance y Beneficios Esperados:** 

- **Visibilidad 24/7:** Control en tiempo real del estado de inventario en todos los puntos de la cadena. 

- **Reducción de Errores:** Menor discrepancia entre inventario físico y sistema, gracias a scans y recuentos cíclicos. 

- **Optimización de Espacio:** Ubicación eficiente de productos según rotación y características. 

- **Mejora en Tiempos de Ciclo:** Preparación y envío de pedidos más rápida, con rutas de picking optimizadas. 

- **Decisiones Basadas en Datos:** Informes y análisis apoyan planificación de compras y estrategias de ventas.


---


## 2. Objetivos del Proyecto 



| **ID**   | **Objetivo SMART**                                                                 | **Tipo**     | **Métrica**                       | **Fecha Límite** | **Responsable**                | **Estado**    |
|----------|-------------------------------------------------------------------------------------|--------------|-----------------------------------|------------------|-------------------------------|---------------|
| OBJ-01   | Aumentar a 500 el número de posts publicados en los primeros 3 meses.               | Estratégico  | Nº de posts                       | 2025-07-28       | Product Owner                | No iniciado   |
| OBJ-02   | Lograr un tiempo de carga de página ≤ 1 s al cargar post.                           | Táctico      | Tiempo medio de carga (segundos)  | 2025-05-31       | Equipo Frontend              | En progreso   |
| OBJ-03   | Garantizar ≥ 99,5 % de disponibilidad del servicio.                                 | Operativo    | % de uptime mensual               | 2025-12-31       | DevOps                       | No iniciado   |
| OBJ-04   | Conseguir una satisfacción de usuarios (CSAT) ≥ 4/5 en encuestas post-lanzamiento.  | Estratégico  | Puntuación CSAT                   | 2025-08-31       | UX / Atención al Cliente     | No iniciado   |


---

## 3. Requisitos Funcionales

| **ID**  | **Descripción**                                                             | **Prioridad** | **Fuente**             | **Estado**   |
|---------|-----------------------------------------------------------------------------|---------------|------------------------|--------------|
| RF-01   | Registro y alta de productos con atributos                                  | Alta          | Stakeholder            | Aprobado     |
| RF-02   | Gestión de almacenes y ubicaciones internas                                 | Alta          | Cliente                | Aprobado     |
| RF-03   | Registrar ajustes de inventario                                             | Alta          | Stakeholder            | Propuesto    |
| RF-04   | Mostrar niveles stock tiempo real y vista histórica de movimientos          | Alta          | Cliente                | Aprobado     |
| RF-05   | Creación de órdenes de salida a clientes o producción                       | Alta          | Cliente                | Aprobado     |
| RF-06   | Generación de listados de picking con rutas optimizadas                     | Media         | Stakeholder            | Aprobado     |
| RF-07   | El usuario puede comentar en un post publicado.                             | Media         | Cliente                | Aprobado     |
| RF-08   | El administrador puede eliminar comentarios y posts inapropiados.           | Alta          | Compliance             | Aprobado     |


---

## 4. Requisitos No Funcionales

| **ID**   | **Descripción**                                                               | **Categoría**     | **Métrica**                        | **Nivel Objetivo** | **Comentarios**                          |
|----------|-------------------------------------------------------------------------------|-------------------|------------------------------------|--------------------|-------------------------------------------|
| RNF-01   | Tiempo de respuesta del servidor < 200 ms para CRUD de posts.                 | Rendimiento       | Latencia HTTP                      | < 200 ms           | Medir con pruebas de carga.               |
| RNF-02   | Soportar al menos 1 000 usuarios concurrentes.                                | Escalabilidad     | Usuarios concurrentes              | ≥ 1 000            | Autoescalado en la nube.                  |
| RNF-03   | Cumplir HTTPS/TLS para todas las comunicaciones.                              | Seguridad         | Cifrado                            | TLS 1.2+ obligatorio | Auditoría de seguridad trimestral.        |
| RNF-04   | Cumplir WCAG 2.1 AA en la interfaz de usuario.                                | Usabilidad        | Puntuación auditoría accesible     | Nivel AA           | Auditoría externa antes del go-live.      |
| RNF-05   | Disponibilidad ≥ 99,5 % mensual.                                              | Disponibilidad    | % Uptime                           | ≥ 99,5 %           | Monitorización 24/7 con alertas.          |
| RNF-06   | Tiempo de carga de la página inicial ≤ 1 s.                                   | Rendimiento       | Tiempo de carga                    | ≤ 1 s              | Uso de CDN y optimización de assets.      |
