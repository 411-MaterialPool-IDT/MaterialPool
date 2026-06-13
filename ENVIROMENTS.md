Entorno DEV (Rama feature):
  ¿Quién puede hacer “deploy”? Los desarrolladores del equipo (Fernando, Victor) desde su máquina local.
  ¿Pruebas obligatorias? Se aplicaran pruebas manuales en entorno local y se valida el código antes de realizar un commit.
  Política de fallo: Si el código no compila de manera local, está prohibido para el desarrollador subir los cambios.
Entorno QA (Rama develop):
  ¿Quién puede hacer “deploy”? Todo el equipo puede integrar código hacia la rama mediante los “pull request”.
  ¿Pruebas obligatorias? El pipeline de GitHub Actions ejecutará de manera automática “npm ci” para instalar dependencias y “npm test” para pasar las pruebas.
  Política de fallo: Si alguna de las pruebas falla en Actions, el status de Git se marcará en rojo (failed) y bloqueará cualquier integración a la rama, notificando al equipo para la solución del error antes de que se vuelva a intentar la integración del mismo.
Entorno PROD (Rama main):
  ¿Quién puede hacer “deploy”? El acceso a esta rama es restringido. Únicamente el líder de equipo (Mario) o el Scrum Master (Abraham) pueden autorizar el paso de la rama “develop” a “main”, permitiendo el paso a producción.
  ¿Pruebas obligatorias? Deben pasar las pruebas del “npm test” y se debe generar el artefacto de producción “npm run build” exitosamente.
  Política de fallo: Si el proceso de compilación falla (npm run build) falla, el despliegue a la nube se cancelará de manera automática, protegiendo al entorno final de recibir una versión “rota” de la aplicación (MaterialPool). 
