import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto prose dark:prose-invert prose-blue">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Política de Privacidad</h1>
        <p className="text-gray-500 mb-10">Última actualización: abril de 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Quiénes somos</h2>
            <p>
              ToK es una plataforma de automatización de ventas y atención al cliente vía WhatsApp, operada por <strong>BVIA SpA</strong>, RUT 78.390.338-5, con domicilio en Carmen Covarrubias 32, Of. 313, Ñuñoa, Chile. Puedes contactarnos en <a href="mailto:contacto@tok-ai.cl" className="text-blue-600 hover:text-blue-700">contacto@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Información que recopilamos</h2>
            <p className="mb-4">Al usar ToK, recopilamos la siguiente información:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de cuenta:</strong> nombre, correo electrónico y nombre de empresa.</li>
              <li><strong>Datos de conversaciones:</strong> mensajes de WhatsApp enviados y recibidos a través de tu número de negocio conectado.</li>
              <li><strong>Datos de contactos:</strong> nombres y números de teléfono de tus clientes que interactúan contigo vía WhatsApp.</li>
              <li><strong>Datos de uso:</strong> acciones dentro de la plataforma, logs de actividad y configuraciones.</li>
              <li><strong>Datos de pago:</strong> procesados íntegramente por VentiPay. ToK no almacena datos de tarjetas de crédito.</li>
              <li><strong>Datos de calendario:</strong> si conectas Google Calendar, accedemos a tu disponibilidad para el agendamiento automático.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Cómo usamos tu información</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer y mejorar los servicios de ToK.</li>
              <li>Operar el agente de inteligencia artificial que responde en nombre de tu empresa.</li>
              <li>Procesar pagos y gestionar tu suscripción.</li>
              <li>Enviarte notificaciones relacionadas con tu cuenta y el servicio.</li>
              <li>Detectar y prevenir usos fraudulentos o abusivos de la plataforma.</li>
              <li>Cumplir obligaciones legales aplicables en Chile.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Terceros con acceso a tus datos</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Clerk:</strong> gestión de autenticación y cuentas de usuario.</li>
              <li><strong>YCloud:</strong> envío y recepción de mensajes vía WhatsApp Business API.</li>
              <li><strong>VentiPay:</strong> procesamiento de pagos y suscripciones.</li>
              <li><strong>Google:</strong> integración con Google Calendar (solo si la activas).</li>
              <li><strong>Anthropic:</strong> modelos de IA utilizados por el agente de respuestas automáticas.</li>
            </ul>
            <p>No vendemos, arrendamos ni compartimos tus datos personales con terceros para fines publicitarios.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Datos de tus clientes (contactos de WhatsApp)</h2>
            <p>
              ToK actúa como procesador de datos en relación con los mensajes e información de tus clientes. Como empresa usuaria de la plataforma, eres el responsable del tratamiento de esos datos. Debes contar con las bases legales necesarias para procesar la información de tus contactos de acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y normativas aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Retención de datos</h2>
            <p>
              Conservamos tus datos mientras tu cuenta esté activa. Si cancelas tu suscripción, tus datos serán eliminados dentro de los 90 días siguientes, salvo obligación legal de conservarlos por más tiempo. Puedes solicitar la eliminación anticipada escribiéndonos a <a href="mailto:soporte@tok-ai.cl" className="text-blue-600 hover:text-blue-700">soporte@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger tu información, incluyendo cifrado en tránsito (HTTPS/TLS), autenticación segura y acceso restringido a datos sensibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. Tus derechos</h2>
            <p>
              De acuerdo con la legislación chilena, tienes derecho a acceder, rectificar, eliminar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, escríbenos a <a href="mailto:contacto@tok-ai.cl" className="text-blue-600 hover:text-blue-700">contacto@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">9. Cookies</h2>
            <p>
              ToK utiliza cookies de sesión necesarias para el funcionamiento de la plataforma. No utilizamos cookies de seguimiento publicitario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">10. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos por correo electrónico ante cambios materiales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
