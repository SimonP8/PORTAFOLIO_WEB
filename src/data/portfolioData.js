// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ============================================================================
// Este es el ÚNICO archivo que necesitas editar para personalizar tu portafolio
// con tu propia información. Los componentes en src/components/ solo leen estos
// datos, así que puedes cambiar todo aquí sin tocar ningún componente.
//
// Ver README.md -> "Cómo editar tu portafolio" para ejemplos guiados.
// ============================================================================

import profilePlaceholder from '../assets/images/profile-placeholder.svg'
import projectPlaceholder from '../assets/images/project-placeholder.svg'

// ----------------------------------------------------------------------------
// PERFIL: información principal que aparece en la sección Hero
// ----------------------------------------------------------------------------
export const profileData = {
  name: 'Juan Pérez',
  title: 'Ingeniero de Software',
  tagline: 'Construyo aplicaciones web robustas, desde la base de datos hasta la interfaz.',
  location: 'Bogotá, Colombia',
  // Para usar tu propia foto: reemplaza el archivo en src/assets/images/profile-placeholder.svg
  // (o agrega tu foto, ej. profile.jpg, e impórtala arriba y úsala aquí).
  photo: profilePlaceholder,
}

// ----------------------------------------------------------------------------
// REDES SOCIALES Y CONTACTO: se usan en el Hero, la sección Contacto y el Footer
// ----------------------------------------------------------------------------
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario',
  email: 'juan.perez@example.com',
}

// ----------------------------------------------------------------------------
// SOBRE MÍ: párrafo de presentación
// ----------------------------------------------------------------------------
export const aboutData = {
  paragraph:
    'Soy estudiante de último semestre de Ingeniería Informática, apasionado por el desarrollo web ' +
    'y el diseño de software. Disfruto resolver problemas complejos dividiéndolos en partes simples, ' +
    'y me interesa especialmente el desarrollo full-stack con JavaScript y Python. Actualmente busco ' +
    'oportunidades de práctica profesional o primer empleo donde pueda seguir aprendiendo y aportar valor ' +
    'a un equipo de desarrollo.',
}

// ----------------------------------------------------------------------------
// HABILIDADES: lista simple de objetos {name, icon}.
// El icono es un emoji para no depender de imágenes externas ni librerías.
// Agrega o quita objetos de este array para actualizar la sección.
// ----------------------------------------------------------------------------
export const skillsData = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML5', icon: '🧱' },
  { name: 'CSS / Tailwind', icon: '🎨' },
  { name: 'Git y GitHub', icon: '🔧' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Java', icon: '☕' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Trabajo en equipo', icon: '🤝' },
]

// ----------------------------------------------------------------------------
// PROYECTOS: cada objeto es una tarjeta en la sección Proyectos.
// Para agregar un proyecto nuevo, copia un objeto del array y edita sus valores.
// Para quitar uno, simplemente elimina su objeto del array.
// ----------------------------------------------------------------------------
export const projectsData = [
  {
    id: 1,
    title: 'Gestor de Tareas Colaborativo',
    description:
      'Aplicación web para crear y organizar tareas en equipo, con tableros estilo Kanban, ' +
      'arrastrar y soltar, y notificaciones en tiempo real.',
    image: projectPlaceholder,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/tu-usuario/gestor-tareas',
    demoUrl: 'https://gestor-tareas-demo.vercel.app',
  },
  {
    id: 2,
    title: 'API REST de E-commerce',
    description:
      'Backend para una tienda en línea con autenticación de usuarios, catálogo de productos, ' +
      'carrito de compras y procesamiento de pedidos.',
    image: projectPlaceholder,
    technologies: ['Python', 'Django REST', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/tu-usuario/ecommerce-api',
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Dashboard del Clima',
    description:
      'Panel interactivo que consume una API pública de clima y muestra pronósticos por ciudad ' +
      'con gráficas de temperatura y humedad.',
    image: projectPlaceholder,
    technologies: ['React', 'Tailwind CSS', 'Chart.js'],
    repoUrl: 'https://github.com/tu-usuario/dashboard-clima',
    demoUrl: 'https://dashboard-clima-demo.vercel.app',
  },
]

// ----------------------------------------------------------------------------
// EXPERIENCIA Y EDUCACIÓN: timeline unificado, ordenado del más reciente al más
// antiguo. El campo "type" ('work' | 'education') controla el color del badge.
// ----------------------------------------------------------------------------
export const experienceData = [
  {
    id: 1,
    type: 'work',
    role: 'Practicante de Desarrollo de Software',
    place: 'Tech Solutions S.A.S.',
    period: '2025 - Actualidad',
    description:
      'Desarrollo de módulos frontend en React y mantenimiento de endpoints REST existentes. ' +
      'Participación en revisiones de código y ceremonias ágiles (daily, retro, planning).',
  },
  {
    id: 2,
    type: 'education',
    role: 'Ingeniería Informática',
    place: 'Universidad Colegio Mayor de Cundinamarca',
    period: '2021 - 2026',
    description:
      'Formación en desarrollo de software, bases de datos, estructuras de datos y arquitectura ' +
      'de aplicaciones web.',
  },
  {
    id: 3,
    type: 'work',
    role: 'Freelance - Desarrollo de sitios web',
    place: 'Proyectos independientes',
    period: '2023 - 2024',
    description:
      'Creación de sitios web para pequeños negocios locales usando HTML, CSS, JavaScript y WordPress.',
  },
  {
    id: 4,
    type: 'education',
    role: 'Curso de Desarrollo Web Full Stack',
    place: 'Plataforma en línea',
    period: '2022',
    description: 'Curso intensivo de 6 meses sobre desarrollo web con JavaScript, React y Node.js.',
  },
]

// ----------------------------------------------------------------------------
// CONTACTO: se usa en la sección Contacto (formulario -> mailto) y el Footer.
// ----------------------------------------------------------------------------
export const contactData = {
  email: 'juan.perez@example.com',
  phone: '+57 300 123 4567',
  availability: 'Disponible para prácticas profesionales y proyectos freelance',
}
