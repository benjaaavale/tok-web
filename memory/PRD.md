# PRD - ToK Landing Page

**Fecha de creación:** 16 de Diciembre, 2025  
**Empresa:** ToK - Automatización con IA para WhatsApp  
**Target:** Clínicas y consultas del área de la salud

---

## Problem Statement Original

Construcción de landing page para ToK, empresa de automatización con IA para WhatsApp dirigida a clínicas y consultas médicas. La landing debe enfocarse en ahorro de tiempo y cierre de ventas, con soluciones totalmente personalizadas.

**Colores de marca:** Blanco, negro, gris, celeste/azul

---

## User Personas

- **Directores/Gerentes de Clínicas:** Buscan optimizar operaciones y aumentar conversiones
- **Médicos/Fundadores:** Quieren automatizar tareas administrativas para enfocarse en pacientes
- **Administradores:** Necesitan herramientas que faciliten la gestión de citas y consultas

---

## Core Requirements (Static)

### Estructura de la Landing Page
1. **Navbar** con navegación suave y CTA
2. **Hero Section** con llamado a la acción enfocado en ahorro de tiempo y ventas
3. **Carrusel de logos** de empresas que confían en ToK (placeholders editables)
4. **Sección de Beneficios** destacando 4 diferenciadores clave
5. **Testimonios** de casos de éxito con resultados medibles
6. **FAQ** con accordion
7. **Formulario de contacto** para agendar demo
8. **Footer** con información de contacto

### Funcionalidad del Formulario
- Campos: Nombre, Nombre empresa, Email, Teléfono, Redes sociales, Sitio web, Notas
- Envío via HTTP POST a webhook (URL configurable)
- Validación de campos requeridos
- Toast notifications para feedback

### Información de Contacto
- WhatsApp: +56991224190
- Instagram: @tok_cl

---

## What's Been Implemented

### Fecha: Diciembre, 2025

#### ✅ Sección de Planes de Pago (ACTUALIZADO)
- **PricingSection.jsx**: Sección informativa con 3 planes de precios en CLP
  - **Starter** ($79.990/mes): Plan básico para clínicas pequeñas
  - **Professional** ($159.990/mes): Plan destacado como "Más Popular" con extras gratis
  - **Enterprise** ($319.990/mes): Plan completo para grandes clínicas con múltiples extras gratis
- **Toggle Mensual/Anual** con 20% de descuento en plan anual
  - Muestra precio original tachado y ahorro anual en badge verde
- Solo badge "Planes y Precios" + toggle (sin título ni descripción)
- Los 2 planes superiores incluyen "Extras Gratis" destacados en cajas verdes
- Sección puramente informativa (sin botones CTA)
- Padding reducido para diseño más compacto

#### ✅ Header Sticky con Glassmorphism
- Header flotante que se vuelve semi-transparente al hacer scroll
- Efecto de blur y borde oscuro cuando está activo
- Logo que se reduce al hacer scroll

#### ✅ Menú Móvil Slide-in
- Drawer lateral que aparece desde la derecha
- Navegación completa incluyendo nuevo enlace a Precios
- Botón de WhatsApp en el footer del drawer

### Fecha: 18 de Febrero, 2026

#### ✅ Slider de Conversaciones Mensuales (NUEVO)
- Agregado slider deslizable al formulario de contacto como primer campo
- Rango: 0 a 5,000+ conversaciones mensuales
- Diseño: Barra con gradiente sky-cyan, thumb circular con sombra
- Badge central que muestra el valor actual
- Se envía junto con los demás datos del formulario al webhook

#### ✅ Fondos de Secciones Actualizados
- **BenefitsSection.jsx**: Fondo limpio blanco (simplificado)
- **ComparisonTable.jsx**: Fondo limpio blanco (simplificado)
- **FAQSection.jsx**: Mantiene fondo dinámico con gradiente slate/sky/indigo, signos de interrogación animados, círculos flotantes y líneas curvas decorativas

### Fecha: 16 de Febrero, 2026

#### ✅ Optimización de Animaciones
- Animaciones consolidadas en `tailwind.config.js` (eliminado inline styles)
- Reducción de blur (`blur-3xl` → `blur-2xl`) para mejor rendimiento GPU
- `will-change-transform` y `will-change-opacity` para aceleración GPU
- Soporte completo para `prefers-reduced-motion` (accesibilidad)
- Nueva animación `pulse-soft` optimizada (reemplaza `animate-pulse`)
- Animaciones más lentas para reducir ciclos CPU

### Fecha: 16 de Diciembre, 2025

#### ✅ Frontend Completo (Mock Data)
- **Navbar.jsx**: Navegación responsive con scroll suave y menú móvil
- **HeroSection.jsx**: Hero impactante con CTA, stats, imagen de calidad
- **CompanyCarousel.jsx**: Carrusel animado con placeholders editables
- **BenefitsSection.jsx**: 4 tarjetas de beneficios con hover effects e íconos
- **TestimonialsSection.jsx**: 3 testimonios con fotos profesionales y resultados
- **FAQSection.jsx**: 8 preguntas frecuentes con accordion de shadcn
- **ContactForm.jsx**: Modal de formulario completo con validación
- **Footer.jsx**: Footer profesional con enlaces y redes sociales
- **mock.js**: Datos mock estructurados y editables

#### ✅ Diseño
- Paleta de colores: Blanco, negro, gris, celeste/azul ✓
- Uso de lucide-react para iconos (NO emojis) ✓
- Sin gradientes oscuros coloridos ✓
- Diseño limpio, profesional, moderno ✓
- Responsive para mobile, tablet, desktop ✓
- Micro-animaciones y hover states ✓

#### ✅ Imágenes
- Hero: Tecnología médica profesional
- Testimonios: 3 fotos de profesionales de salud diversos

---

## Prioritized Backlog

### P0 - Configuración Final
- [x] Fondos dinámicos únicos para BenefitsSection y FAQSection
- [x] Sección de planes de pago con 3 niveles
- [ ] Usuario debe agregar URL del webhook en `.env` → `REACT_APP_WEBHOOK_URL`
- [ ] Usuario debe reemplazar logos placeholder del carrusel con logos reales
- [ ] Usuario debe actualizar testimonios con casos reales
- [ ] Usuario debe actualizar precios y características de los planes

### P1 - Backend (Siguiente Fase)
- [ ] Endpoint para recibir formularios
- [ ] Integración con Google Calendar API
- [ ] Sistema de notificaciones por email
- [ ] Base de datos para almacenar leads

### P2 - Mejoras Adicionales
- [ ] Integración con Cal.com para agendar demos (en pausa - requiere link del usuario)
- [ ] Analytics (Google Analytics/Mixpanel)
- [ ] Chat widget de WhatsApp
- [ ] Blog/Recursos
- [ ] Página de Casos de Éxito completa
- [ ] Integración con CRM

---

## Next Tasks

1. **Usuario configura webhook URL** en `/app/frontend/.env`
2. **Usuario reemplaza placeholders:** logos de empresas y testimonios reales
3. **Testing completo del formulario** una vez configurado webhook
4. **Posible fase 2:** Backend para gestión de leads y notificaciones

---

## Notes

- Todos los datos mock están en `/app/frontend/src/data/mock.js` para fácil edición
- Formulario funcional pero requiere URL de webhook configurada
- Imágenes de alta calidad de Unsplash/Pexels
- Componentes shadcn/ui utilizados: Accordion, Button, Input, Label, Textarea, Toaster
