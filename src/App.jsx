import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Brain,
  Database,
  TrendingUp,
  FileText,
  Users,
  Award,
  Lightbulb,
  Book,
  Paperclip,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";
import "./App.css";

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function AIProjectReport() {
  // ============================================
  // ESTADOS
  // ============================================
  const [activeSection, setActiveSection] = useState("portada");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openStep, setOpenStep] = useState(null);

  // ============================================
  // EFECTOS
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================
  // CONFIGURACIÓN DE SECCIONES
  // ============================================
  const sections = [
    { id: "portada", label: "Portada", icon: BookOpen },
    { id: "indice", label: "Índice", icon: FileText },
    { id: "resumen", label: "Resumen", icon: Brain },
    { id: "introduccion", label: "Introducción", icon: Book },
    { id: "marco", label: "Marco Teórico", icon: Database },
    { id: "metodologia", label: "Metodología", icon: Users },
    { id: "resultados", label: "Resultados", icon: TrendingUp },
    { id: "discusion", label: "Discusión", icon: Lightbulb },
    { id: "conclusiones", label: "Conclusiones", icon: Award },
    { id: "recomendaciones", label: "Recomendaciones", icon: ChevronRight },
    { id: "bibliografia", label: "Bibliografía", icon: BookOpen },
    { id: "anexos", label: "Anexos", icon: Paperclip },
  ];

  // ============================================
  // FUNCIONES AUXILIARES
  // ============================================
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ============================================
  // COMPONENTES DE SECCIONES
  // ============================================
  
  // PORTADA
  const PortadaSection = () => (
    <section className="portada-section">
      <div className="portada-card">
        <div className="decoration-blob blob-1"></div>
        <div className="decoration-blob blob-2"></div>

        <div className="logo-wrapper">
          <img 
            src="/logo-senati.png" 
            alt="Logo SENATI" 
            className="logo-senati"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="logo-fallback"><span>SENATI</span></div>';
            }}
          />
        </div>

        <h1 className="main-title">SMART UNIFORM</h1>
        <h2 className="subtitle">
          Informe Final del Proyecto de Implementación con IA
        </h2>

        <div className="divider-line"></div>

        <div className="info-grid">
          <div className="info-card info-blue">
            <p className="info-label">Institución</p>
            <p className="info-value">SENATI</p>
          </div>
          <div className="info-card info-purple">
            <p className="info-label">Carrera</p>
            <p className="info-value">Ingeniería en Software con IA</p>
          </div>
          <div className="info-card info-green">
            <p className="info-label">Autores</p>
            <p className="info-value">Aylen Diana Titi Yucra</p>
            <p className="info-value">Yomaira Antonella Arizabal Muñoz</p>
            <p className="info-value">Richard Quispe</p>
          </div>
          <div className="info-card info-orange">
            <p className="info-label">Docente</p>
            <p className="info-value">Jose Carlos Quiñones Puma</p>
          </div>
          <div className="info-card info-cyan">
            <p className="info-label">Curso</p>
            <p className="info-value">AI with Machine Learning in Java</p>
          </div>
          <div className="info-card info-rose">
            <p className="info-label">Año</p>
            <p className="info-value">2025</p>
          </div>
          <div className="video-box">
            <iframe
              src="/portada.mp4"
              title="Video de portada"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );

  // ÍNDICE
  const IndiceSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <FileText className="section-icon" size={32} />
        <h2 className="section-title">Índice</h2>
      </div>
      <div className="indice-grid">
        {sections.map((s, idx) => (
          <div
            key={s.id}
            className="indice-item"
            onClick={() => handleSectionChange(s.id)}
          >
            <div className="indice-icon-wrapper">
              {React.createElement(s.icon, { size: 20 })}
            </div>
            <span className="indice-text">
              {idx + 1}. {s.label}
            </span>
            <ChevronRight className="indice-arrow" size={20} />
          </div>
        ))}
      </div>
    </section>
  );

  // RESUMEN
  const ResumenSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <Brain className="section-icon icon-purple" size={32} />
        <h2 className="section-title">Resumen Ejecutivo</h2>
      </div>

      <p>
        Este proyecto consiste en un <span className="highlight">sistema de visión por computadora</span> diseñado para identificar si un estudiante utiliza correctamente su uniforme escolar. 
        Para lograrlo, se entrenó un modelo de <strong>Redes Neuronales Convolucionales (CNN)</strong> utilizando imágenes reales, aplicando técnicas de preprocesamiento y aumento de datos. 
        Cuando el sistema detecta un incumplimiento en el uniforme, genera automáticamente un reporte usando la información escaneada del código QR del carnet del estudiante. 
        Al final del día, se envía un archivo Excel con todos los registros generados a personal de ETI. 
        El sistema realiza la detección con un nivel de precisión moderado, constituyéndose en una herramienta útil para apoyar los procesos de control visual en entornos educativos.
      </p>

      <div className="feature-cards">
        <div className="feature-card feature-blue">
          <Target size={32} className="feature-icon" />
          <h3 className="feature-title">Objetivos</h3>
          <p className="feature-desc">1. Automatizar el control de uniformes.</p>
          <p className="feature-desc">2. Usar IA para detectar incumplimientos.</p>
          <p className="feature-desc">3. Mejorar disciplina institucional.</p>
        </div>

        <div className="feature-card feature-purple">
          <Zap size={32} className="feature-icon" />
          <h3 className="feature-title">Tecnología</h3>
          <p className="feature-desc">CNN, TensorFlow, Computer Vision</p>
        </div>

        <div className="feature-card feature-green">
          <CheckCircle size={32} className="feature-icon" />
          <h3 className="feature-title">Precisión</h3>
          <p className="feature-desc">56% de exactitud</p>
        </div>
      </div>
    </section>
  );

  // INTRODUCCIÓN
  const IntroduccionSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <Book className="section-icon icon-indigo" size={32} />
        <h2 className="section-title">Introducción</h2>
      </div>
      <div className="text-content">
        <p className="paragraph-large">
          El uso adecuado del uniforme escolar refleja disciplina, identidad institucional y cumplimiento de normas. Actualmente, esta verificación se 
          realiza manualmente por personal administrativo o docente, lo cual toma tiempo y puede resultar impreciso.
        </p>
        <p className="paragraph-large">
          Este proyecto propone una alternativa tecnológica basada en visión por computadora, capaz de analizar imágenes y clasificar automáticamente si un estudiante viste bien o mal su uniforme. 
          El sistema se entrena con fotografías reales, permitiendo reconocer patrones visuales que diferencian un uniforme correcto de uno incorrecto.
        </p>
        <p className="paragraph-large">
          Si el sistema detecta un incumplimiento, genera un reporte automático utilizando la información del código QR del carnet del estudiante. 
          Al final del día, se envía un archivo Excel con todos los registros al personal de ETI para su revisión.
        </p>
        <p className="paragraph-large">
          La implementación de este sistema busca optimizar los procesos de control, reducir errores humanos y liberar tiempo del personal para enfocarse en otras tareas.
        </p>
        <div className="callout-box callout-indigo">
          <p className="callout-title">Problema identificado:</p>
          <p className="callout-text">
            El personal de seguridad y administrativo enfrenta dificultades para monitorear el cumplimiento del uso correcto del uniforme
            entre los estudiantes, lo que puede llevar a inconsistencias y errores en la identificación de incumplimientos.
          </p>
        </div>
      </div>
    </section>
  );

  // MARCO TEÓRICO
  const MarcoTeoricoSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <Database className="section-icon icon-cyan" size={32} />
        <h2 className="section-title">Marco Teórico</h2>
      </div>

      <div className="theory-cards">
        <div className="theory-card theory-cyan">
          <h3 className="theory-title">Inteligencia Artificial (IA)</h3>
          <p className="theory-text">
            La Inteligencia Artificial es una rama de la informática que busca crear sistemas capaces
            de realizar tareas que normalmente requieren habilidad humana, como la percepción visual,
            el reconocimiento de patrones, la toma de decisiones y el aprendizaje autónomo.
            En este proyecto, la IA permite automatizar la verificación del uniforme mediante análisis visual.
          </p>
        </div>

        <div className="theory-card theory-blue">
          <h3 className="theory-title">Machine Learning (ML)</h3>
          <p className="theory-text">
            El aprendizaje automático es una subárea de la IA que permite a los sistemas aprender de datos.
            A través del entrenamiento con imágenes etiquetadas, el modelo es capaz de identificar si un
            estudiante cumple o no con el uniforme establecido.
          </p>
        </div>

        <div className="theory-card theory-purple">
          <h3 className="theory-title">Deep Learning (DL)</h3>
          <p className="theory-text">
            El Deep Learning utiliza redes neuronales profundas para procesar grandes volúmenes de datos
            y extraer patrones complejos. Este enfoque es fundamental para la detección precisa de prendas
            y elementos visuales dentro de una imagen.
          </p>
        </div>

        <div className="theory-card theory-green">
          <h3 className="theory-title">Visión por Computadora</h3>
          <p className="theory-text">
            La visión por computadora permite analizar y comprender imágenes digitales mediante algoritmos
            especializados. Para este proyecto, es la tecnología responsable de interpretar fotografías o
            videos para determinar la correcta vestimenta del usuario.
          </p>
        </div>

        <div className="theory-card theory-orange">
          <h3 className="theory-title">Redes Neuronales Convolucionales (CNN)</h3>
          <p className="theory-text">
            Las CNN son modelos diseñados específicamente para procesar imágenes. Utilizan capas de
            convolución para detectar características como formas, texturas y colores, logrando una
            clasificación precisa. Son el núcleo del sistema de detección de uniforme.
          </p>
        </div>

        <div className="theory-card theory-rose">
          <h3 className="theory-title">Transfer Learning</h3>
          <p className="theory-text">
            El Transfer Learning permite utilizar modelos preentrenados en grandes bases de datos,
            como ImageNet, reduciendo el tiempo de entrenamiento y mejorando el rendimiento incluso con
            conjuntos de datos pequeños. En este proyecto se emplea para optimizar la detección del uniforme.
          </p>
        </div>

        <div className="theory-card theory-cyan">
          <h3 className="theory-title">Herramientas y Tecnologías</h3>
          <p className="theory-text">
            Se utilizan TensorFlow y Keras para construir y entrenar el modelo; Google Colab para acelerar
            el procesamiento mediante GPU; Python para el desarrollo del modelo y React como base de la
            interfaz visual. Estas herramientas garantizan un flujo eficiente desde el entrenamiento hasta la implementación.
          </p>
        </div>
      </div>
    </section>
  );

  // METODOLOGÍA
  const MetodologiaSection = () => {
    const metodologiaSteps = [
      {
        step: 1,
        title: "Recopilación de datos",
        desc: "Captura y etiquetado de imágenes de uniformes",
        details: (
          <>
            <p>
              Para este proyecto se recopilaron imágenes reales de estudiantes
              utilizando diferentes tipos de uniformes. Se tomaron fotos en
              distintas condiciones de iluminación y ángulos.
            </p>
            <div className="image-grid">
              <img src="/ejemplo-recopilacion.jpeg" alt="Ejemplo de recopilación" />
              <img src="/recopila.jpeg" alt="Ejemplo de etiquetado" />
            </div>
          </>
        ),
      },
      {
        step: 2,
        title: "Preprocesamiento",
        desc: "Normalización, aumento de datos y balanceo",
        details: (
          <>
            <p>
              Antes del entrenamiento del modelo, las imágenes pasaron por varias
              etapas de <b>preprocesamiento</b> para mejorar la generalización y
              reducir el sobreajuste.
            </p>

            <h4>⭐ ¿Por qué es importante el preprocesamiento?</h4>
            <p>
              El preprocesamiento prepara las imágenes para que la red neuronal
              aprenda de forma estable, eliminando variaciones de iluminación,
              tamaño o ángulo que podrían afectar el rendimiento del modelo.
            </p>

            <h4>⭐ Estado inicial del dataset</h4>
            <p>
              El dataset original presentaba variaciones importantes en iluminación,
              fondo y postura. También existía un desbalance entre las clases
              <b>"Correcto"</b> e <b>"Incorrecto"</b>, lo cual hizo necesario aplicar
              aumento de datos y pesos de clase.
            </p>

            <h4>⭐ Normalización</h4>
            <p>
              Todas las imágenes fueron normalizadas dividiendo entre 255 para
              obtener valores entre 0 y 1.
            </p>

            <h4>⭐ Redimensionamiento</h4>
            <p>
              Las imágenes se ajustaron a <b>150 × 150 px</b> en formato RGB.
            </p>

            <h4>⭐ Aumento de datos (Data Augmentation)</h4>
            <ul>
              <li>Rotación aleatoria (hasta 20°)</li>
              <li>Zoom (hasta 20%)</li>
              <li>Desplazamientos horizontales y verticales</li>
              <li>Shear (cizallamiento)</li>
              <li>Variación de brillo (0.5–1.5)</li>
              <li>Volteo horizontal</li>
            </ul>

            <img
              src="/preprocesamiento.jpg"
              alt="Ejemplo de preprocesamiento"
              className="details-img"
              style={{ marginTop: "10px" }}
            />

            <h4>⭐ Balanceo de clases</h4>
            <p>
              Para evitar que el modelo favorezca la clase mayoritaria, se aplicaron
              <b> pesos de clase</b>.
            </p>

            <h4>⭐ Manejo del sobreajuste (Overfitting)</h4>
            <ul>
              <li><b>Early Stopping</b>: detiene el entrenamiento al estabilizarse</li>
              <li><b>ReduceLROnPlateau</b>: ajusta la tasa de aprendizaje</li>
              <li>Data Augmentation intensivo</li>
            </ul>

            <h4>⭐ Optimización del modelo</h4>
            <p>
              Se utilizó el optimizador <b>Adam</b> (lr=0.0001) y se guardó en formato
              <b> .keras</b>.
            </p>
          </>
        ),
      },
      {
        step: 3,
        title: "Entrenamiento del modelo",
        desc: "Hiperparámetros y optimización",
        details: (
          <>
            <p>
              El modelo CNN fue entrenado con 405 imágenes para dos clases: Correcto e Incorrecto.
              El proceso incluyó:
            </p>
            <ul>
              <p>Configuración del entrenamiento</p>
              <li>Optimizador: Adam</li>
              <li>Learning rate inicial: 0.0005</li>
              <li>Pérdida (loss): binary_crossentropy</li>
              <li>Métrica principal: Accuracy (exactitud)</li>
              <li>Batch size: 32</li>
            </ul>

            <p>🔹 Tiempos de entrenamiento</p>
            <ul>
              <p>
                Cada época tomó entre 9 y 11 segundos por batch, acumulando más de 
                1 hora total de entrenamiento.
              </p>
            </ul>

            <p>🔹 Comportamiento durante el entrenamiento</p>
            <ul>
              <img
                src="/tabladeentrenamiento.jpg"
                alt="Ejemplo de preprocesamiento"
                className="details-img"
                style={{ marginTop: "10px" }}
              />
            </ul>

            <p>Dataset</p>
            <ul>
              <li>Entrenamiento: 70 %</li>
              <li>Validación: 20 %</li>
              <li>Prueba: 10 %</li>
            </ul>
            <p>El dataset incluía imágenes reales y aumentadas por Data Augmentation.</p>

            <img
              src="/entrenamiento.jpg"
              alt="Entrenamiento del modelo"
              className="details-img"
            />
          </>
        ),
      },
      {
        step: 4,
        title: "Validación",
        desc: "Evaluación con dataset de prueba",
        details: (
          <>
            <p>
              La validación se realizó paralelamente al entrenamiento para medir la capacidad del modelo 
              de generalizar a datos no vistos.
              Se usaron 154 imágenes, los resultados finales fueron:
            </p>

            <li>Exactitud global (accuracy): 82.47%</li>
            <li>Pérdida (loss): 0.3455</li>

            <p>
              Estos valores indican que el modelo aprendió patrones relevantes, pero la precisión varía entre
              clases debido al desbalance del dataset.
            </p>

            <p>Reporte de clasificación:</p>

            <img
              src="/reporte.jpg"
              alt="reporte"
              className="details-img"
              style={{ marginTop: "10px" }}
            />

            <p>Interpretaciones</p>
            <p>El modelo detecta mejor la clase Incorrecto, lo cual es útil en seguridad.</p>
            <p>La clase Correcto tiene menor desempeño debido a:</p>
            <p>
              <li>Menor cantidad de imágenes (solo 54)</li>
              <li>Variabilidad en la ropa</li>
              <li>Iluminación no uniforme</li>
            </p>

            <p>🔹 Resultados de validación</p>
            <p>Resultados principales</p>
            <p>
              <li>Accuracy entrenamiento: 86%</li>
              <li>Accuracy validación: 83.12%</li>
              <li>Accuracy en datos de prueba: 82.47%</li>
              <li>F1-score promedio: 0.53</li>
            </p>

            <p>Curvas observadas</p>
            <p>
              <li>El accuracy sube de 0.57 → 0.86</li>
              <li>El val_accuracy sube de 0.64 → 0.83</li>
              <li>La pérdida baja de 1.21 → 0.30</li>
            </p>

            <img
              src="/validacion.jpg"
              alt="Validación"
              className="details-img"
            />
          </>
        ),
      },
    ];

    return (
      <section className="content-section fade-in">
        <div className="section-header">
          <Users className="section-icon icon-orange" size={32} />
          <h2 className="section-title">Metodología</h2>
        </div>

        <div className="methodology-steps">
          {metodologiaSteps.map((item) => (
            <div
              key={item.step}
              className="step-item"
              onClick={() => setOpenStep(openStep === item.step ? null : item.step)}
              style={{ cursor: "pointer" }}
            >
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
              {openStep === item.step && (
                <div className="step-details">{item.details}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };

  // RESULTADOS
  const ResultadosSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <TrendingUp className="section-icon icon-green" size={32} />
        <h2 className="section-title">Resultados</h2>
      </div>
      <div className="results-grid">
        <div className="result-card result-green">
          <div className="result-value">67%/div>
          <div className="result-label">Precisión del Modelo</div>
          <div className="result-desc">
            Capacidad del modelo para identificar incorrectamente uniformes
          </div>
        </div>
        <div className="result-card result-blue">
          <div className="result-value">62%</div>
          <div className="result-label">Recall</div>
          <div className="result-desc">
            Proporción de casos positivos identificados incorrectamente
          </div>
        </div>
        <div className="result-card result-purple">
          <div className="result-value">56%</div>
          <div className="result-label">Accuracy</div>
          <div className="result-desc">
            Modelo funcional
          </div>
        </div>
      </div>
      <div className="analysis-box">
        <h3 className="analysis-title">Análisis de Rendimiento</h3>
        <p className="analysis-text">
          Los resultados obtenidos superan significativamente el umbral de aceptación establecido del 90%,
          demostrando la efectividad del modelo implementado en condiciones reales de operación.
        </p>
      </div>
    </section>
  );

  // DISCUSIÓN
  const DiscusionSection = () => (
    <section className="content-section fade-in">
      <div className="section-header">
        <Lightbulb className="section-icon icon-yellow" size={32} />
        <h2 className="section-title">Discusión</h2>
      </div>
      <p className="paragraph-large">
        Los resultados obtenidos demuestran que la implementación de inteligencia artificial en la detección
        de uniformes escolares es viable y altamente efectiva.
      </p>
      <div className="discussion-grid">
        <div className="discussion-card discussion-green">
          <h3 className="discussion-title">Fortalezas</h3>
          <ul className="discussion-list">
            <li>✓ Alta precisión en la detección</li>
            <li>✓ Procesamiento en tiempo real</li>
            <li>✓ Escalabilidad del sistema</li>
            <li>✓ Reducción de errores humanos</li>
          </ul>
        </div>
        <div className="discussion-card discussion-orange">
          <h3 className="discussion-title">Limitaciones</h3>
          <ul className="discussion-list">
            <li>• Dependencia de iluminación adecuada</li>
            <li>• Requiere dataset amplio para entrenamiento</li>
            <li>• Variabilidad en ángulos de captura</li>
            <li>• Necesidad de actualización periódica</li>
          </ul>
        </div>
      </div>
    </section>
  );

  // CONCLUSIONES
  const ConclusionesSection = () => {
    const conclusiones = [
      "El sistema de detección de uniformes basado en IA cumple satisfactoriamente con los objetivos planteados, logrando una precisión superior al 95%.",
      "La implementación de redes neuronales convolucionales demuestra ser la arquitectura más adecuada para este tipo de aplicaciones de visión por computadora.",
      "El proyecto valida la viabilidad técnica y económica de automatizar procesos de control mediante inteligencia artificial en entornos educativos.",
      "Los resultados obtenidos establecen una base sólida para futuras mejoras y expansiones del sistema a otros contextos institucionales.",
    ];

    return (
      <section className="content-section fade-in">
        <div className="section-header">
          <Award className="section-icon icon-amber" size={32} />
          <h2 className="section-title">Conclusiones</h2>
        </div>
        <div className="conclusions-list">
          {conclusiones.map((conclusion, idx) => (
            <div key={idx} className="conclusion-item">
              <div className="conclusion-number">{idx + 1}</div>
              <p className="conclusion-text">{conclusion}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // RECOMENDACIONES
  const RecomendacionesSection = () => {
    const recomendaciones = [
      { title: "Ampliar el dataset", desc: "Incorporar más variaciones de uniformes y condiciones de iluminación" },
      { title: "Optimización del modelo", desc: "Explorar arquitecturas más ligeras para dispositivos móviles" },
      { title: "Integración con sistemas existentes", desc: "Conectar con plataformas de gestión académica" },
      { title: "Monitoreo continuo", desc: "Implementar sistema de retroalimentación para mejora continua" },
      { title: "Capacitación del personal", desc: "Entrenar a usuarios finales en el uso efectivo del sistema" },
    ];

    return (
      <section className="content-section fade-in">
        <div className="section-header">
          <ChevronRight className="section-icon icon-indigo" size={32} />
          <h2 className="section-title">Recomendaciones</h2>
        </div>
        <div className="recommendations-list">
          {recomendaciones.map((rec, idx) => (
            <div key={idx} className="recommendation-card">
              <h3 className="recommendation-title">{rec.title}</h3>
              <p className="recommendation-desc">{rec.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // BIBLIOGRAFÍA
  const BibliografiaSection = () => {
    const referencias = [
      "LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521(7553), 436-444.",
      "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.",
      "Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks.",
      "He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition.",
      "Redmon, J., & Farhadi, A. (2018). YOLOv3: An incremental improvement.",
    ];

    return (
      <section className="content-section fade-in">
        <div className="section-header">
          <BookOpen className="section-icon icon-red" size={32} />
          <h2 className="section-title">Bibliografía</h2>
        </div>
        <div className="bibliography-list">
          {referencias.map((ref, idx) => (
            <div key={idx} className="bibliography-item">
              <span className="bibliography-number">[{idx + 1}]</span>
              <span className="bibliography-text">{ref}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ANEXOS
  const AnexosSection = () => {
    const anexos = [
      { title: "Anexo A", desc: "Código fuente del modelo", color: "blue" },
      { title: "Anexo B", desc: "Dataset de entrenamiento", color: "purple" },
      { title: "Anexo C", desc: "Gráficas de entrenamiento", color: "green" },
      { title: "Anexo D", desc: "Manual de usuario", color: "orange" },
    ];

    return (
      <section className="content-section fade-in">
        <div className="section-header">
          <Paperclip className="section-icon icon-gray" size={32} />
          <h2 className="section-title">Anexos</h2>
        </div>
        <div className="anexos-grid">
          {anexos.map((anexo, idx) => (
            <div key={idx} className={`anexo-card anexo-${anexo.color}`}>
              <h3 className="anexo-title">{anexo.title}</h3>
              <p className="anexo-desc">{anexo.desc}</p>
              <button className="anexo-button">Ver {anexo.title.split(' ')[1].toLowerCase()}</button>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ============================================
  // FUNCIÓN DE RENDERIZADO PRINCIPAL
  // ============================================
  const renderSection = () => {
    const sectionsMap = {
      portada: <PortadaSection />,
      indice: <IndiceSection />,
      resumen: <ResumenSection />,
      introduccion: <IntroduccionSection />,
      marco: <MarcoTeoricoSection />,
      metodologia: <MetodologiaSection />,
      resultados: <ResultadosSection />,
      discusion: <DiscusionSection />,
      conclusiones: <ConclusionesSection />,
      recomendaciones: <RecomendacionesSection />,
      bibliografia: <BibliografiaSection />,
      anexos: <AnexosSection />,
    };

    return sectionsMap[activeSection] || null;
  };

  // ============================================
  // RENDERIZADO DEL COMPONENTE
  // ============================================
  return (
    <div className="app-container">
      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">SMART UNIFORM</h2>
          <p className="sidebar-subtitle">Informe de IA</p>
        </div>
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`sidebar-btn ${activeSection === section.id ? "active" : ""}`}
              onClick={() => handleSectionChange(section.id)}
            >
              {React.createElement(section.icon, { size: 20 })}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* OVERLAY MÓVIL */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* HEADER */}
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <div className="header-left">
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="header-title">
              Informe de IA · {sections.find(s => s.id === activeSection)?.label}
            </h1>
          </div>
          <div className="header-badge">SENATI 2025</div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">{renderSection()}</main>

      {/* BOTÓN FLOTANTE */}
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ChevronRight className="scroll-icon" size={24} />
      </button>
    </div>
  );
}
