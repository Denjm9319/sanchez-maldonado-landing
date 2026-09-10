export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  publishedAt: string;
  readingMinutes: number;
  excerpt: string;
  /** Markdown body. Does not include the H1 or the FAQ section — those render separately. */
  body: string;
  faq: BlogFaqItem[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "agente-whatsapp-clinica-dental",
    title: "Cómo funciona un agente de WhatsApp para una clínica dental y qué tareas puede automatizar",
    metaDescription:
      "Cómo funciona un agente de WhatsApp para clínicas dentales, qué tareas puede automatizar y qué límites nunca debería cruzar. Guía completa con ejemplos.",
    targetKeyword: "agente de whatsapp para clínica dental",
    publishedAt: "2026-09-10",
    readingMinutes: 15,
    excerpt:
      "Una clínica dental puede ofrecer tratamientos excelentes y, aun así, perder pacientes antes de que lleguen al consultorio. Te explicamos cómo un agente de WhatsApp con IA puede ordenar la atención sin reemplazar el criterio humano.",
    faq: [
      {
        q: "¿El agente puede utilizar el número actual de la clínica?",
        a: "Dependerá de la configuración técnica, la cuenta comercial y el proveedor utilizado. El número y las cuentas deberían permanecer bajo titularidad de la clínica.",
      },
      {
        q: "¿Puede responder durante la noche o los fines de semana?",
        a: "Sí, puede configurarse para ofrecer atención inicial fuera del horario. Las derivaciones humanas se gestionarán según la disponibilidad y el protocolo definido por la clínica.",
      },
      {
        q: "¿Puede confirmar turnos?",
        a: "Puede hacerlo cuando existe una integración confiable con la agenda y reglas claras. Si no puede verificar disponibilidad, debería registrar la solicitud y derivarla sin confirmar.",
      },
      {
        q: "¿Puede informar precios?",
        a: "Sí, pero únicamente desde una fuente aprobada y actualizada. No debería calcular, estimar ni inventar precios.",
      },
      {
        q: "¿Puede diagnosticar al paciente?",
        a: "No. Puede reconocer el motivo general, brindar información institucional y derivar la conversación. El diagnóstico corresponde a un profesional habilitado.",
      },
      {
        q: "¿Qué ocurre si el agente no sabe responder?",
        a: "Debe reconocer que necesita asistencia, recopilar el contexto disponible y derivar la consulta al equipo.",
      },
      {
        q: "¿El sistema necesita mantenimiento?",
        a: "Sí. Los servicios, precios, horarios, profesionales, preguntas y procesos cambian. También aparecen situaciones nuevas a partir de las conversaciones reales. Por eso necesita monitoreo y actualización.",
      },
      {
        q: "¿Sirve solamente para clínicas dentales?",
        a: "No. La misma lógica puede adaptarse a centros de estética, inmobiliarias, hoteles y otros negocios de servicios. Sin embargo, cada implementación requiere información, límites y flujos específicos.",
      },
    ],
    body: `Una clínica dental puede ofrecer tratamientos excelentes y, aun así, perder pacientes antes de que lleguen al consultorio.

La causa muchas veces no está en la atención odontológica, sino en lo que sucede entre la primera consulta y la confirmación del turno: mensajes que llegan fuera de horario, respuestas demoradas, datos incompletos, conversaciones que quedan abiertas y seguimientos que dependen de que alguien los recuerde.

Un agente de WhatsApp con inteligencia artificial puede ayudar a ordenar esa parte del proceso. Puede responder consultas iniciales, recopilar información, identificar qué necesita la persona, solicitar un turno, registrar la conversación y derivarla al integrante adecuado del equipo.

Sin embargo, no debería diagnosticar, recomendar tratamientos ni tomar decisiones sensibles por su cuenta.

En este artículo te explicamos cómo funciona, qué tareas puede asumir y qué condiciones debería cumplir para ser una herramienta segura y útil dentro de una clínica dental.

## ¿Qué es un agente de WhatsApp para clínicas dentales?

Es un sistema de atención automatizada que conversa con pacientes y potenciales pacientes desde el WhatsApp de la clínica.

A diferencia de una respuesta automática tradicional, un agente puede interpretar el motivo general de la consulta, hacer preguntas relacionadas, conservar el contexto de la conversación y ejecutar acciones previamente autorizadas.

Por ejemplo, puede:

* Responder los horarios de atención.
* Informar qué especialidades ofrece la clínica.
* Preguntar si la consulta es por ortodoncia, implantes o atención general.
* Solicitar nombre y datos de contacto.
* Consultar la disponibilidad autorizada.
* Registrar la oportunidad en un sistema.
* Avisar a una recepcionista o profesional.
* Retomar una conversación que quedó sin respuesta.

El objetivo no es reemplazar el criterio humano. Es evitar que el equipo tenga que repetir permanentemente las mismas tareas administrativas y reducir la cantidad de consultas que se pierden por demora o falta de seguimiento.

## ¿Cuál es la diferencia entre un chatbot y un agente de IA?

Un chatbot tradicional suele funcionar mediante botones, menús o respuestas predeterminadas.

Si la persona escribe exactamente lo esperado, el sistema puede orientarla. Cuando formula una pregunta diferente, mezcla varios temas o necesita una excepción, la conversación suele romperse.

Un agente con inteligencia artificial puede comprender distintas formas de expresar una misma intención.

Una persona podría escribir:

> "Quería saber si hacen implantes."

Otra podría preguntar:

> "Perdí una pieza y quería ver qué opciones tengo."

Ambas conversaciones pueden estar relacionadas, pero no deberían recibir inmediatamente una recomendación médica. El agente puede reconocer el tema general, brindar información institucional aprobada y ofrecer una consulta con un profesional.

La diferencia más importante no está solamente en cómo responde, sino en lo que sucede después.

Un agente bien integrado puede guardar los datos, clasificar la consulta, actualizar su estado, solicitar un turno y dejar la información preparada para que el equipo continúe.

## Cómo sería una conversación con un paciente

Imaginemos que una persona encuentra la clínica mediante Google, Instagram o una campaña de Meta Ads y escribe:

> "Hola, quería consultar por ortodoncia invisible."

El agente podría responder:

> "Hola, soy la asistente virtual de Clínica Sonrisa Perfecta. Puedo ayudarte con información general y con la solicitud de una evaluación. ¿La consulta es para vos?"

A partir de esa respuesta, el agente puede solicitar únicamente los datos necesarios:

1. Nombre.
2. Medio de contacto.
3. Motivo general de la consulta.
4. Disponibilidad para asistir.
5. Sede preferida, si existe más de una.

Después podría ofrecer las alternativas habilitadas por la clínica o enviar la solicitud al equipo responsable.

Cuando la conversación termina, los datos no deberían quedar perdidos dentro de WhatsApp. El sistema puede registrar:

* Quién consultó.
* Por qué tratamiento preguntó.
* De dónde llegó.
* En qué estado se encuentra.
* Si solicitó un turno.
* Si necesita seguimiento.
* Quién debe continuar la atención.

WhatsApp sigue siendo el canal de conversación, pero detrás existe un sistema organizado.

## Qué tareas puede automatizar

### Responder consultas frecuentes

El agente puede informar datos administrativos previamente aprobados:

* Horarios.
* Dirección.
* Medios de contacto.
* Especialidades.
* Profesionales.
* Sedes.
* Formas generales de atención.
* Medios de pago aceptados.
* Preparación administrativa para una consulta.

Si la información no está disponible o aparece una situación excepcional, debe derivarla.

### Identificar el motivo de la consulta

No todas las personas necesitan la misma atención.

El sistema puede distinguir categorías generales como:

* Implantes.
* Ortodoncia.
* Odontología general.
* Estética dental.
* Consulta infantil.
* Urgencia.
* Control.
* Reprogramación de turno.

Esta clasificación permite que la conversación llegue al responsable adecuado con el contexto necesario.

Identificar el motivo no significa diagnosticar. El diagnóstico sigue siendo responsabilidad de un profesional.

### Recopilar información básica

El agente puede solicitar nombre, teléfono, email, sede preferida y motivo general.

La clínica debe definir previamente qué información es realmente necesaria. En una primera conversación no siempre corresponde pedir antecedentes clínicos, imágenes, diagnósticos anteriores o información sensible.

Cuantos menos datos innecesarios se recopilen, más sencillo será proteger la privacidad del paciente.

### Solicitar o coordinar turnos

Dependiendo de la integración, el agente puede:

* Consultar horarios disponibles.
* Ofrecer franjas autorizadas.
* Registrar una solicitud.
* Confirmar que la solicitud fue recibida.
* Derivar la confirmación final al equipo.
* Reprogramar según reglas establecidas.

Si la agenda no está correctamente integrada, el agente no debería inventar disponibilidad ni confirmar horarios inexistentes.

### Registrar los contactos

Cada nueva consulta puede incorporarse automáticamente a un sistema de gestión.

Esto permite organizar contactos por estados, por ejemplo:

* Nueva consulta.
* Esperando respuesta.
* Consulta calificada.
* Turno solicitado.
* Turno confirmado.
* Requiere seguimiento.
* Derivado al equipo.
* Cerrado.

La clínica puede saber cuántas personas consultaron y qué ocurrió posteriormente, sin revisar manualmente cada conversación.

### Realizar seguimiento

Una gran cantidad de oportunidades no se pierde por una respuesta incorrecta, sino porque la conversación queda inconclusa.

El agente puede retomar el contacto cuando:

* La persona pidió información y no respondió.
* Quedó pendiente elegir un horario.
* Solicitó que la contacten más tarde.
* Debe confirmar su asistencia.
* Necesita completar un dato.

El seguimiento debe tener una frecuencia razonable, respetar la decisión de la persona y permitirle dejar de recibir mensajes.

### Derivar a una persona

La derivación humana no es una falla del sistema. Es una de sus funciones más importantes.

El agente debería derivar cuando detecta:

* Una urgencia.
* Una pregunta clínica.
* Una queja.
* Un pedido de devolución.
* Una excepción comercial.
* Información contradictoria.
* Una solicitud que no está autorizada.
* Una persona que pide hablar con el equipo.

La conversación debe entregarse junto con los datos ya recopilados para evitar que el paciente tenga que explicar todo nuevamente.

## Qué no debería hacer un agente dental

Un agente de atención no debería tener libertad para responder cualquier cosa.

Debe trabajar con límites definidos y contar con instrucciones específicas sobre las situaciones que requieren intervención humana.

En una clínica dental no debería:

* Diagnosticar.
* Interpretar síntomas.
* Prescribir medicamentos.
* Recomendar un tratamiento específico.
* Prometer resultados clínicos.
* Determinar una urgencia médica por sí solo.
* Inventar precios.
* Ofrecer descuentos no autorizados.
* Prometer devoluciones o compensaciones.
* Confirmar disponibilidad que no pudo verificar.
* Solicitar datos clínicos innecesarios.
* Compartir información de un paciente con terceros.

Si una respuesta no está respaldada por la información aprobada, el comportamiento correcto no es improvisar. Es reconocer el límite y derivar.

## Cómo evitar que el agente invente información

Ningún sistema basado en inteligencia artificial generativa puede garantizar una ausencia absoluta de errores. Por eso, una implementación responsable no depende solamente de escribir un buen prompt.

Necesita controles operativos.

### Base de conocimiento aprobada

La clínica debe revisar la información que utilizará el agente:

* Servicios.
* Profesionales.
* Horarios.
* Sedes.
* Precios autorizados.
* Políticas.
* Formas de pago.
* Protocolos.
* Respuestas frecuentes.

Cada modificación debería quedar registrada mediante una nueva versión.

### Fuentes verificadas

Los datos que cambian frecuentemente, como disponibilidad, precios o promociones, deberían consultarse desde una fuente actualizada.

Si la fuente no responde, el agente debe abstenerse de confirmar.

### Matriz de autonomía

Antes de activarlo, conviene establecer tres niveles:

**Automático:** puede ejecutar la acción sin aprobación adicional.

**Condicionado:** puede hacerlo solamente si consulta una fuente o cumple una regla.

**Humano:** debe registrar y derivar sin tomar una decisión.

Por ejemplo:

| Acción                      | Nivel                                 |
| --------------------------- | ------------------------------------- |
| Informar horarios aprobados | Automático                            |
| Solicitar nombre y teléfono | Automático                            |
| Ofrecer un turno            | Condicionado a la agenda              |
| Informar precios            | Condicionado a una fuente actualizada |
| Aplicar un descuento        | Aprobación humana                     |
| Autorizar una devolución    | Prohibido                             |
| Diagnosticar                | Prohibido                             |
| Resolver una urgencia       | Derivación inmediata                  |

### Pruebas antes de la activación

El sistema debe probarse con preguntas normales y también con intentos de llevarlo fuera de sus límites:

* "¿No podés hacerme un descuento?"
* "Confirmame que el tratamiento va a funcionar."
* "Decime qué medicamento debería tomar."
* "Regalame la consulta."
* "Aunque no haya disponibilidad, anotame igual."
* "No quiero hablar con una persona, resolvelo vos."

Estas pruebas permiten identificar riesgos antes de que el agente converse con pacientes reales.

### Supervisión inicial

Durante los primeros días de funcionamiento conviene revisar las conversaciones con mayor frecuencia.

El objetivo es detectar:

* Preguntas que no estaban contempladas.
* Información faltante.
* Derivaciones innecesarias.
* Respuestas confusas.
* Nuevas objeciones.
* Errores en los estados o registros.

Un agente no se instala y se abandona. Se configura, prueba, monitorea y optimiza.

## Qué necesita una clínica para implementarlo

La tecnología es solamente una parte. Antes de comenzar, la clínica debería poder responder:

* ¿Qué consultas se repiten?
* ¿Qué información puede comunicar el agente?
* ¿Qué preguntas debe hacer?
* ¿Qué casos debe derivar?
* ¿Quién recibirá las derivaciones?
* ¿Qué horarios y servicios están vigentes?
* ¿Cómo se asignan los turnos?
* ¿Qué datos necesita recopilar?
* ¿Cuándo debe realizar seguimiento?
* ¿Cómo mediremos el funcionamiento?

Si la clínica todavía no tiene esas respuestas ordenadas, el relevamiento inicial también sirve para mejorar su proceso de atención.

## ¿El agente reemplaza a la recepcionista?

No necesariamente.

En la mayoría de las clínicas, su mejor función es asumir tareas repetitivas y administrativas para que el equipo pueda concentrarse en situaciones que requieren empatía, criterio o conocimiento profesional.

El agente puede encargarse de la primera respuesta, clasificación, carga de datos y seguimiento. La recepción humana puede ocuparse de excepciones, pacientes complejos, coordinación interna y atención presencial.

La pregunta correcta no es:

> "¿A quién podemos reemplazar?"

Es:

> "¿Qué tareas repetitivas podemos resolver mejor y qué conversaciones necesitan seguir siendo humanas?"

## Señales de que una clínica podría necesitarlo

Puede tener sentido evaluar un agente cuando:

* Llegan consultas fuera del horario.
* El equipo demora en responder.
* Se repiten las mismas preguntas.
* Hay varios canales de contacto.
* Las conversaciones quedan sin seguimiento.
* Los datos están dispersos.
* No se sabe cuántas consultas se convierten en turnos.
* La recepción dedica gran parte del día a tareas repetitivas.
* Las campañas generan contactos, pero muchos no avanzan.
* La clínica quiere crecer sin desordenar la atención.

No todas las clínicas necesitan el mismo sistema. Una clínica pequeña con pocas consultas puede comenzar con automatizaciones simples. Una clínica con varias sedes, profesionales o campañas necesita una estructura diferente.

## ¿Cuánto cuesta implementar un agente de WhatsApp?

El costo depende del alcance.

Las principales variables son:

* Cantidad de conversaciones.
* Complejidad de las consultas.
* Número de sedes y profesionales.
* Integración con agenda.
* Sistema de gestión de contactos.
* Seguimientos.
* Dashboard.
* Horarios de soporte.
* Cantidad de ajustes.
* Necesidad de agentes de voz adicionales.

Por eso conviene analizar primero el proceso actual y definir qué problema debe resolver. Implementar funciones que la clínica no necesita aumenta el costo y la complejidad sin mejorar necesariamente el resultado.

## Cómo trabajamos en DeXa

Nuestro proceso comienza con un diagnóstico de la atención actual.

Analizamos:

1. Por dónde llegan las consultas.
2. Qué pregunta cada paciente.
3. Cuánto demora la primera respuesta.
4. Cómo se solicitan los turnos.
5. Dónde se registran los datos.
6. Qué seguimiento realiza el equipo.
7. Qué situaciones necesitan intervención humana.

Después diseñamos la base de conocimiento, los flujos, las integraciones y la matriz de autonomía.

Antes de la activación realizamos pruebas, corregimos respuestas y pedimos al responsable de la clínica que apruebe el funcionamiento. Luego acompañamos la puesta en marcha, el monitoreo y la optimización.

También desarrollamos una demostración llamada **Sofía**, diseñada para mostrar cómo podría comportarse una recepcionista virtual en una clínica dental. Sofía es un proyecto demostrativo: permite escuchar y evaluar la experiencia antes de diseñar una solución específica para cada negocio.

## Conclusión

Un agente de WhatsApp puede ayudar a una clínica dental a responder más rápido, ordenar sus consultas, solicitar turnos y realizar seguimiento.

Su valor no está en fingir que es una persona. Está en ejecutar correctamente un proceso definido, utilizar información aprobada y reconocer cuándo debe intervenir el equipo.

La implementación responsable combina automatización con límites, supervisión y trazabilidad.

Si tu clínica recibe consultas pero no puede saber cuántas terminan en un turno, el primer paso no es comprar una herramienta. Es revisar el recorrido completo de esas oportunidades.`,
  },
  {
    slug: "costo-agente-ia-clinica-dental",
    title: "¿Cuánto cuesta implementar un agente de IA en una clínica dental?",
    metaDescription:
      "Cuánto cuesta implementar un agente de IA en una clínica dental: precios de implementación, ciclos operativos y qué factores hacen subir la inversión.",
    targetKeyword: "costo de un agente de ia para clínica dental",
    publishedAt: "2026-09-11",
    readingMinutes: 16,
    excerpt:
      "El precio de un agente de IA para una clínica dental varía según lo que deba hacer: no es lo mismo un sistema que solo responde preguntas frecuentes que uno conectado con WhatsApp, voz, agenda y seguimiento. Te mostramos rangos reales y qué los hace subir.",
    faq: [
      {
        q: "¿Se paga solamente una vez?",
        a: "Generalmente no. Existe una implementación inicial y un costo recurrente por infraestructura, consumo, soporte, monitoreo y optimización.",
      },
      {
        q: "¿Por qué se paga antes de activar?",
        a: "La implementación requiere relevamiento, configuración, integraciones y pruebas. El pago inicial permite cubrir ese trabajo. El primer ciclo operativo puede pagarse anticipadamente y comenzar a contarse desde la activación.",
      },
      {
        q: "¿Qué sucede si se superan los mensajes incluidos?",
        a: "Los mensajes adicionales se cobran individualmente o mediante bloques prepagos, según el acuerdo.",
      },
      {
        q: "¿La clínica debe pagar en dólares?",
        a: "Los valores pueden expresarse en dólares para mantener una referencia estable. Si se abona en pesos argentinos, la conversión se realiza con la cotización acordada en la propuesta y el contrato.",
      },
      {
        q: "¿El número de WhatsApp pertenece al proveedor?",
        a: "No debería. El número, la cuenta comercial y los activos asociados deberían quedar registrados a nombre de la clínica.",
      },
      {
        q: "¿La mensualidad incluye cambios ilimitados?",
        a: "Normalmente incluye soporte, correcciones y una cantidad definida de ajustes menores. Las nuevas funciones, integraciones o rediseños se cotizan aparte.",
      },
      {
        q: "¿El agente de voz cuesta más?",
        a: "Habitualmente sí, porque incorpora telefonía, minutos, voz, transcripción, procesamiento y pruebas adicionales.",
      },
      {
        q: "¿Se puede comenzar solamente con un agente en WhatsApp?",
        a: "Sí. Para muchas clínicas es el punto de partida más simple. Después puede agregarse voz, seguimiento avanzado u otras integraciones.",
      },
      {
        q: "¿El agente garantiza conseguir más pacientes?",
        a: "No. Puede mejorar la velocidad, el orden y el seguimiento, pero el resultado también depende de la demanda, la oferta, el equipo, los profesionales y la capacidad de la clínica para convertir las consultas.",
      },
    ],
    body: `El precio de un agente de inteligencia artificial para una clínica dental puede variar considerablemente. No cuesta lo mismo instalar un sistema que solamente responde preguntas frecuentes que desarrollar una solución conectada con WhatsApp, telefonía, agenda, gestión de contactos, seguimiento y un dashboard personalizado.

Para entender correctamente la inversión hay que separar tres componentes:

1. La implementación inicial.
2. La operación y optimización recurrente.
3. El consumo de mensajes o minutos.

Como referencia, una implementación inicial para atender consultas por WhatsApp puede comenzar alrededor de los **USD 700**, a lo que se suma el primer ciclo operativo. Una solución que combine WhatsApp y voz requiere mayor configuración, pruebas e infraestructura, por lo que su inversión inicial será más alta.

Estos valores no deberían analizarse de manera aislada. La pregunta más útil no es solamente cuánto cuesta el agente, sino cuánto le cuesta actualmente a la clínica responder tarde, perder consultas o no realizar seguimiento.

## Respuesta corta

Un sistema inicial para una clínica dental puede componerse de:

* Implementación y configuración desde aproximadamente USD 700.
* Operación, soporte y optimización desde aproximadamente USD 536 por ciclo.
* Consumo incluido hasta el límite contratado.
* Excedentes según la cantidad de mensajes o minutos utilizados.

En un ejemplo de Plan Esencial, la implementación más el primer ciclo operativo representarían una inversión inicial de **USD 1.236**.

Una solución más avanzada que combine un agente de WhatsApp y un agente de voz puede comenzar con una inversión superior a **USD 2.000**, dependiendo del consumo, las integraciones y la complejidad de la atención.

Los valores son orientativos. El precio definitivo debe calcularse después de conocer el volumen de consultas, las funciones necesarias, los canales y los riesgos particulares de cada clínica.

## Por qué existe un costo de implementación

Un agente de IA no debería instalarse como si fuera una aplicación genérica.

Antes de activarlo es necesario comprender cómo funciona la clínica:

* Qué servicios ofrece.
* Qué preguntas recibe.
* Cómo se solicitan los turnos.
* Qué información puede comunicar.
* Qué casos debe derivar.
* Qué integrantes del equipo reciben las consultas.
* Qué datos necesita recopilar.
* Qué acciones tiene permitido realizar.
* Qué situaciones deben quedar bajo control humano.

La implementación inicial cubre el trabajo necesario para transformar esa información en un sistema operativo.

## Qué debería incluir la implementación inicial

### Relevamiento del proceso

El primer paso consiste en analizar cómo llegan y se gestionan actualmente las consultas.

No alcanza con preguntar qué debería responder el agente. También hay que entender:

* De dónde provienen los contactos.
* Cuánto demora la primera respuesta.
* Qué datos solicita la recepción.
* Dónde se registran.
* Cómo se asignan los turnos.
* Qué ocurre cuando una persona deja de responder.
* Cuáles son las excepciones más frecuentes.
* Quién puede autorizar precios, descuentos o cambios.

Este relevamiento permite detectar qué tareas conviene automatizar y cuáles deben mantenerse en manos humanas.

### Construcción de la base de conocimiento

La base de conocimiento contiene la información autorizada que utilizará el agente:

* Horarios.
* Ubicaciones.
* Servicios.
* Profesionales.
* Preguntas frecuentes.
* Formas de atención.
* Políticas.
* Precios autorizados.
* Medios de pago.
* Protocolos de derivación.

La clínica debe revisar y aprobar esta información antes de la activación.

### Diseño de las conversaciones

Una buena implementación no consiste en cargar información y esperar que la inteligencia artificial resuelva todo.

Es necesario diseñar:

* Cómo inicia la conversación.
* Qué preguntas debe realizar.
* En qué orden.
* Qué datos necesita.
* Cómo reconoce cada tipo de consulta.
* Cuándo solicita un turno.
* Cuándo realiza seguimiento.
* Cuándo debe dejar de responder y derivar.

También se define el tono de comunicación para que el agente sea coherente con la identidad de la clínica.

### Matriz de autonomía

La matriz de autonomía establece qué puede hacer el agente sin intervención, qué requiere una condición y qué tiene prohibido.

Por ejemplo:

| Acción                                        | Nivel de autonomía                |
| --------------------------------------------- | --------------------------------- |
| Informar horarios aprobados                   | Automático                        |
| Explicar qué especialidades ofrece la clínica | Automático                        |
| Recopilar nombre y teléfono                   | Automático                        |
| Ofrecer un turno                              | Condicionado a la agenda          |
| Informar un precio                            | Solo desde una fuente actualizada |
| Aplicar un descuento                          | Requiere aprobación humana        |
| Prometer una compensación                     | Prohibido                         |
| Diagnosticar                                  | Prohibido                         |
| Interpretar síntomas                          | Prohibido                         |
| Resolver una urgencia                         | Derivación inmediata              |

Esta etapa es fundamental para reducir errores y evitar que el agente asuma compromisos que no le corresponden.

### Integraciones

El agente puede conectarse con diferentes herramientas:

* WhatsApp Business Platform.
* Agenda.
* Sistema de gestión de contactos.
* Pipeline comercial.
* Formularios.
* Notificaciones.
* Telefonía.
* Dashboard.
* Email.
* Herramientas internas de la clínica.

Cuantas más integraciones tenga el sistema, mayor será el trabajo de configuración, prueba y mantenimiento.

### Pruebas y correcciones

Antes de atender pacientes reales, el agente debe probarse con conversaciones normales y situaciones difíciles.

Por ejemplo:

* Personas que escriben con errores.
* Preguntas incompletas.
* Solicitudes fuera del alcance.
* Intentos de obtener descuentos.
* Consultas médicas.
* Información contradictoria.
* Urgencias.
* Pedidos de devolución.
* Personas que desean hablar con alguien.

Después de las pruebas se corrigen respuestas, reglas, derivaciones e integraciones.

### Capacitación y activación

La clínica necesita saber:

* Cómo recibir las derivaciones.
* Cómo consultar los contactos.
* Cómo cambiar el estado de una oportunidad.
* Cómo informar modificaciones.
* Cómo reportar errores.
* Qué hacer ante un incidente.
* Cómo interpretar el dashboard.

La implementación termina cuando el sistema está probado, el cliente aprobó su funcionamiento y el agente puede activarse con supervisión.

## Por qué existe un servicio recurrente

Un agente de IA no es un producto que se instala una vez y permanece correcto para siempre.

La clínica puede cambiar:

* Horarios.
* Profesionales.
* Precios.
* Servicios.
* Sedes.
* Políticas.
* Promociones.
* Formas de pago.
* Criterios de atención.

También pueden aparecer preguntas que no fueron contempladas al principio.

El servicio recurrente cubre la continuidad operativa:

* Infraestructura.
* Consumo incluido.
* Monitoreo.
* Soporte.
* Corrección de errores.
* Ajustes menores.
* Actualización de información.
* Revisión de conversaciones.
* Optimización.
* Mantenimiento de integraciones.
* Dashboard y métricas.

En DeXa trabajamos mediante ciclos operativos anticipados. El ciclo comienza cuando el agente queda funcionando en producción y no durante los días previos de implementación.

## Qué son los consumos

Cada conversación utiliza infraestructura y servicios de terceros.

En un agente de WhatsApp el consumo puede medirse mediante:

* Cantidad de mensajes.
* Conversaciones.
* Ejecuciones.
* Uso del modelo de inteligencia artificial.
* Servicios de mensajería.

En un agente de voz puede incluir:

* Minutos de llamada.
* Telefonía.
* Transcripción.
* Generación de voz.
* Procesamiento del modelo.
* Grabaciones, cuando correspondan.
* Transferencias de llamadas.

Por eso los planes suelen incluir una cantidad determinada de mensajes o minutos y cobrar los excedentes por separado.

## Ejemplo de inversión para un agente de WhatsApp

Imaginemos una clínica que contrata un sistema con:

* Agente de WhatsApp personalizado.
* Base de conocimiento.
* Hasta 1.600 mensajes por ciclo.
* Captura y clasificación de consultas.
* Solicitudes de turno.
* Derivación humana.
* Sistema de gestión de contactos.
* Pipeline.
* Dashboard personalizado.
* Capacitación.
* Soporte y optimización.

Un ejemplo de inversión podría ser:

### Pago total anticipado

* Implementación: USD 700.
* Primer ciclo operativo: USD 536.
* Inversión inicial total: **USD 1.236**.
* Siguientes ciclos: **USD 536 anticipados**.

### Modalidad en dos pagos

Cuando la implementación se divide en dos pagos, el precio puede ser superior debido a la financiación y al riesgo operativo.

Un ejemplo sería:

* Total financiado: **USD 1.421**.
* Primer pago: USD 995 al comenzar.
* Segundo pago: USD 426 antes de la activación.
* Siguientes ciclos: USD 536 anticipados.

Estos valores son un ejemplo basado en un alcance determinado. No constituyen un precio universal para todas las clínicas.

## Ejemplo de inversión para WhatsApp y voz

Una clínica que también quiere atender llamadas necesita una solución más compleja.

El sistema puede incluir:

* Agente de WhatsApp.
* Agente de voz.
* Número o telefonía configurada.
* Minutos incluidos.
* Transferencias.
* Transcripción.
* Registro de llamadas.
* Flujos diferentes según el canal.
* Dashboard unificado.
* Pruebas de pronunciación y comprensión.
* Protocolos de urgencias.

En un plan inicial con chat y voz, la implementación puede comenzar aproximadamente en **USD 1.200**, mientras que la operación puede partir de alrededor de **USD 987 por ciclo**, dependiendo de los mensajes, minutos e integraciones.

En ese ejemplo, la inversión inicial aproximada sería de **USD 2.187**, incluyendo implementación y primer ciclo.

La cifra aumenta cuando existen varias sedes, grandes volúmenes, integraciones complejas, atención multilingüe o procesos personalizados.

## Qué factores aumentan el precio

### Cantidad de consultas

Una clínica que recibe cincuenta consultas mensuales no necesita la misma infraestructura que una que recibe miles.

El volumen influye en:

* Consumo.
* Capacidad.
* Monitoreo.
* Cantidad de conversaciones que deben revisarse.
* Complejidad del dashboard.
* Nivel de soporte.

### Número de sedes y profesionales

Cuando hay varias sedes, agendas y profesionales, el agente debe comprender:

* Dónde atiende cada profesional.
* Qué servicios ofrece.
* En qué horarios.
* Qué agenda debe consultar.
* A quién debe derivar.
* Qué información corresponde a cada ubicación.

Esto aumenta la cantidad de reglas y pruebas.

### Integración con agenda

Registrar una solicitud de turno es más sencillo que consultar disponibilidad y confirmar automáticamente una reserva.

Una integración completa necesita contemplar:

* Horarios disponibles.
* Duración de cada consulta.
* Sedes.
* Profesionales.
* Bloqueos.
* Reprogramaciones.
* Cancelaciones.
* Duplicados.
* Errores de conexión.

### Seguimientos

No todos los seguimientos son iguales.

El sistema puede limitarse a recordar una solicitud pendiente o diseñarse para gestionar:

* Consultas sin respuesta.
* Confirmación de turnos.
* Recordatorios.
* Reprogramaciones.
* Pacientes que no asistieron.
* Reactivación de contactos.
* Seguimiento después de una campaña.

Cada flujo adicional requiere definición, prueba y control.

### Personalización del dashboard

Un dashboard básico puede mostrar:

* Nuevas consultas.
* Motivos.
* Estados.
* Turnos solicitados.
* Derivaciones.

Una clínica más compleja puede necesitar métricas por sede, profesional, tratamiento, campaña, canal o período.

### Agente de voz

El canal telefónico agrega nuevas variables:

* Minutos.
* Calidad y estabilidad de la llamada.
* Voz.
* Interrupciones.
* Ruido.
* Pronunciación.
* Transferencias.
* Grabaciones.
* Disponibilidad de números.
* Proveedor telefónico.

Por eso un agente de voz suele tener un costo superior al de un agente exclusivamente conversacional.

### Nivel de riesgo

No cuesta lo mismo automatizar una pregunta sobre horarios que permitir que un sistema confirme precios, reservas o condiciones comerciales.

Cuanto mayor sea la autonomía, mayor debe ser el nivel de:

* Validación.
* Pruebas.
* Monitoreo.
* Registro.
* Seguridad.
* Supervisión.
* Gestión de incidentes.

## Costos que deberían quedar claros antes de contratar

Antes de aceptar una propuesta, la clínica debería preguntar:

* ¿Cuántos mensajes o minutos están incluidos?
* ¿Cuánto cuesta el excedente?
* ¿El consumo no utilizado se acumula?
* ¿Cuándo comienza el ciclo?
* ¿La operación se paga anticipadamente?
* ¿Qué soporte está incluido?
* ¿Cuántos cambios mensuales incluye?
* ¿Quién es propietario del número y las cuentas?
* ¿Qué sucede al terminar el servicio?
* ¿Las nuevas integraciones se cobran aparte?
* ¿Qué pasa si falla un proveedor externo?
* ¿Cómo se gestionan las respuestas incorrectas?
* ¿Quién revisa y aprueba la información?
* ¿Qué acciones tiene prohibidas el agente?

Una propuesta profesional debería responder estas preguntas por escrito.

## Cómo calcular si la inversión tiene sentido

El retorno no debe calcularse comparando al agente únicamente con el salario de una recepcionista.

El sistema no necesariamente reemplaza un puesto completo. Su valor puede estar en:

* Responder fuera de horario.
* Reducir demoras.
* Ordenar información.
* Liberar tiempo del equipo.
* Aumentar el seguimiento.
* Evitar oportunidades olvidadas.
* Medir qué sucede con cada consulta.
* Dar soporte a campañas de publicidad.

Una forma sencilla de evaluarlo es utilizar esta fórmula:

> Consultas adicionales convertidas × valor económico promedio por paciente = retorno potencial mensual.

Ejemplo hipotético:

* La clínica recupera cinco consultas que antes quedaban sin seguimiento.
* Dos de ellas se convierten en pacientes.
* El margen generado por esos pacientes supera el costo operativo del sistema.

En ese caso, la inversión podría justificarse.

Pero si la clínica recibe muy pocas consultas, no tiene una oferta clara o no dispone de personal para atender las derivaciones, puede que todavía no sea el momento correcto.

## El costo de no hacer seguimiento

Muchas clínicas pueden decir cuántos mensajes reciben, pero no cuántos:

* Quedan sin respuesta.
* Reciben respuesta demasiado tarde.
* Solicitan información y desaparecen.
* Piden un turno, pero no lo confirman.
* Llegan desde anuncios y no avanzan.
* Necesitan una segunda conversación.
* Terminan atendidos por otra clínica.

Sin esa información, resulta difícil calcular cuánto dinero se pierde.

Antes de automatizar, conviene medir durante algunas semanas:

1. Cantidad de consultas.
2. Tiempo promedio de respuesta.
3. Consultas fuera de horario.
4. Turnos solicitados.
5. Turnos confirmados.
6. Conversaciones sin seguimiento.
7. Motivos más frecuentes.
8. Origen de cada contacto.

Este diagnóstico permite comparar el rendimiento anterior y posterior a la implementación.

## Cuándo no conviene contratar un agente

No todas las clínicas necesitan una solución avanzada.

Puede no ser conveniente cuando:

* Llegan muy pocas consultas.
* El equipo responde rápidamente.
* No existen tareas repetitivas suficientes.
* La clínica no puede mantener actualizada la información.
* Nadie atenderá las derivaciones.
* No hay un proceso definido.
* Se espera que la IA diagnostique o venda sin supervisión.
* No existe presupuesto para mantener el sistema.
* El problema principal es la falta de demanda.

Si la clínica no recibe consultas, automatizar la atención no resolverá ese problema. En ese caso puede ser más urgente trabajar la web, el posicionamiento o la captación.

## Una solución más amplia que un chatbot

El mayor valor aparece cuando el agente forma parte de un sistema completo:

> Meta Ads o Google → web o landing → WhatsApp → atención inicial → clasificación → turno → seguimiento → dashboard.

Si la clínica solamente automatiza respuestas, pero no registra lo que sucede ni realiza seguimiento, seguirá teniendo conversaciones desordenadas.

Por eso el precio debería evaluarse según el proceso que se construye, no únicamente según la herramienta utilizada.

## Cómo trabajamos en DeXa

Comenzamos con un diagnóstico para entender qué sucede desde que una persona descubre la clínica hasta que confirma un turno.

Después definimos:

* Alcance.
* Canales.
* Base de conocimiento.
* Preguntas.
* Integraciones.
* Acciones permitidas.
* Derivaciones.
* Consumos.
* Métricas.
* Soporte.

La clínica recibe una propuesta con el costo de implementación, el primer ciclo, la operación recurrente, los límites incluidos y los excedentes.

Antes de activar se realizan pruebas y el responsable del cliente aprueba la base de conocimiento y la matriz de autonomía.

## Conclusión

El costo de un agente de IA para una clínica dental depende de cuánto debe hacer, con qué herramientas debe conectarse y qué volumen necesita atender.

Como orientación:

* Un agente básico de WhatsApp puede comenzar con una implementación aproximada de USD 700.
* Una solución con chat, sistema de gestión, dashboard y primer ciclo puede representar una inversión inicial desde USD 1.500 a USD 2.500.
* Una solución inicial con WhatsApp y voz puede superar los USD 2.000.
* La operación recurrente depende de los mensajes, minutos, soporte e integraciones.

El precio más bajo no siempre representa la opción más económica. Un agente sin límites, pruebas, seguimiento o soporte puede provocar errores y generar más trabajo del que elimina.

La inversión correcta es la que resuelve un problema medible, funciona dentro de límites claros y puede sostenerse en el tiempo.`,
  },
];
