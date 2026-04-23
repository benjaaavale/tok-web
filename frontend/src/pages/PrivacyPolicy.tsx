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
              ToK es una plataforma de automatización de ventas y atención al cliente a través de canales de mensajería (WhatsApp, Instagram y Messenger), operada por <strong>BVIA SpA</strong>, RUT 78.390.338-5, con domicilio en Carmen Covarrubias 32, Of. 313, Ñuñoa, Chile. Puedes contactarnos en{' '}
              <a href="mailto:contacto@tok-ai.cl" className="text-blue-600 hover:text-blue-700">contacto@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Información que recopilamos</h2>
            <p className="mb-4">Al usar ToK, recopilamos la siguiente información:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datos de cuenta:</strong> nombre, correo electrónico y nombre de empresa, gestionados mediante Clerk (proveedor de autenticación).
              </li>
              <li>
                <strong>Datos de conversaciones:</strong> mensajes enviados y recibidos a través de tus canales de mensajería conectados: WhatsApp Business, Instagram Direct y Facebook Messenger. Estos mensajes son procesados a través de las APIs oficiales de Meta Platforms, Inc.
              </li>
              <li>
                <strong>Datos de contactos:</strong> nombres, números de teléfono y/o identificadores de usuario de las personas que interactúan con tu empresa a través de los canales conectados.
              </li>
              <li>
                <strong>Datos de uso:</strong> acciones dentro de la plataforma, logs de actividad, configuraciones del agente y plantillas creadas.
              </li>
              <li>
                <strong>Datos de pago:</strong> procesados íntegramente por VentiPay. ToK no almacena números de tarjetas ni información bancaria.
              </li>
              <li>
                <strong>Datos de calendario:</strong> si conectas Google Calendar, accedemos a tu disponibilidad y eventos necesarios para el agendamiento automático. Solo se procesan los datos mínimos requeridos para esta función.
              </li>
              <li>
                <strong>Datos de tienda (Shopify):</strong> si conectas tu tienda Shopify, accedemos a información de productos, órdenes y clientes que hayas autorizado, exclusivamente para responder consultas de tus compradores a través del agente de IA.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Cómo usamos tu información</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer, operar y mejorar los servicios de ToK.</li>
              <li>Operar el agente de inteligencia artificial que responde en nombre de tu empresa en WhatsApp, Instagram y Messenger.</li>
              <li>Agendar, gestionar y notificar reuniones y citas a través de Google Calendar.</li>
              <li>Responder consultas de clientes sobre productos y pedidos cuando tienes Shopify conectado.</li>
              <li>Procesar pagos y gestionar tu suscripción.</li>
              <li>Enviarte notificaciones relacionadas con tu cuenta y el servicio.</li>
              <li>Detectar y prevenir usos fraudulentos o abusivos de la plataforma.</li>
              <li>Cumplir obligaciones legales aplicables en Chile.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Terceros con acceso a tus datos</h2>
            <p className="mb-4">Para operar el servicio, compartimos datos con los siguientes proveedores:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Clerk:</strong> gestión de autenticación, sesiones y cuentas de usuario.
              </li>
              <li>
                <strong>Meta Platforms, Inc. (WhatsApp Business API, Instagram Graph API, Messenger API):</strong> envío, recepción y gestión de mensajes a través de los canales de mensajería oficiales de Meta. El uso de estos canales está sujeto a las{' '}
                <a href="https://www.facebook.com/privacy/policy" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noreferrer">Políticas de Privacidad de Meta</a>{' '}
                y a los Términos de las Plataformas de Meta.
              </li>
              <li>
                <strong>YCloud:</strong> proveedor de infraestructura para la integración con la API de WhatsApp Business.
              </li>
              <li>
                <strong>VentiPay:</strong> procesamiento de pagos y suscripciones en Chile.
              </li>
              <li>
                <strong>Google LLC:</strong> integración con Google Calendar para el agendamiento automático (solo si la activas). El uso de Google Calendar está sujeto a la{' '}
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noreferrer">Política de Privacidad de Google</a>.
              </li>
              <li>
                <strong>Shopify Inc.:</strong> acceso a datos de tu tienda en línea para responder consultas de tus clientes (solo si conectas tu tienda). El uso de Shopify está sujeto a la{' '}
                <a href="https://www.shopify.com/legal/privacy" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noreferrer">Política de Privacidad de Shopify</a>.
              </li>
              <li>
                <strong>Anthropic, PBC:</strong> modelos de inteligencia artificial (Claude) utilizados por el agente de respuestas automáticas para generar respuestas en nombre de tu empresa.
              </li>
              <li>
                <strong>OpenAI, LLC:</strong> modelos de inteligencia artificial (GPT-4.1) utilizados como parte del motor de procesamiento del agente.
              </li>
            </ul>
            <p>No vendemos, arrendamos ni compartimos tus datos personales con terceros para fines publicitarios.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Datos de tus clientes (usuarios finales)</h2>
            <p className="mb-4">
              ToK actúa como procesador de datos en relación con los mensajes, contactos e información de los clientes de tu empresa que interactúan a través de WhatsApp, Instagram Direct, Facebook Messenger o tu tienda Shopify.
            </p>
            <p className="mb-4">
              Como empresa usuaria de la plataforma, eres el <strong>responsable del tratamiento</strong> de esos datos. Debes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contar con las bases legales necesarias para procesar información de tus contactos, de acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile y la normativa aplicable.</li>
              <li>Cumplir con las políticas de uso de Meta Platforms respecto al envío de mensajes a usuarios.</li>
              <li>Obtener el consentimiento de tus clientes para el envío de mensajes de marketing o campañas outbound cuando la normativa lo exija.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Transferencias internacionales de datos</h2>
            <p>
              Algunos de nuestros proveedores (Meta, Google, Shopify, Anthropic, OpenAI) tienen operaciones en Estados Unidos y otros países. Al usar ToK y sus integraciones, tus datos pueden ser transferidos y procesados fuera de Chile. Nos aseguramos de que estas transferencias cuenten con las garantías adecuadas según los marcos legales vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. Retención de datos</h2>
            <p>
              Conservamos tus datos mientras tu cuenta esté activa. Si cancelas tu suscripción, tus datos serán eliminados dentro de los 90 días siguientes, salvo obligación legal de conservarlos por más tiempo. Puedes solicitar la eliminación anticipada escribiéndonos a{' '}
              <a href="mailto:soporte@tok-ai.cl" className="text-blue-600 hover:text-blue-700">soporte@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger tu información, incluyendo cifrado en tránsito (HTTPS/TLS), autenticación segura con Clerk, control de acceso restringido a datos sensibles, y auditorías periódicas de seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">9. Tus derechos</h2>
            <p className="mb-4">
              De acuerdo con la legislación chilena y buenas prácticas internacionales, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceder</strong> a los datos personales que tenemos sobre ti.</li>
              <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
              <li><strong>Eliminar</strong> tus datos (derecho al olvido), salvo que exista obligación legal de conservarlos.</li>
              <li><strong>Oponerte</strong> al tratamiento de tus datos en determinadas circunstancias.</li>
              <li><strong>Portar</strong> tus datos a otro proveedor.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, escríbenos a{' '}
              <a href="mailto:contacto@tok-ai.cl" className="text-blue-600 hover:text-blue-700">contacto@tok-ai.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">10. Cookies</h2>
            <p>
              ToK utiliza cookies de sesión necesarias para el funcionamiento de la plataforma (autenticación y preferencias). No utilizamos cookies de seguimiento publicitario de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">11. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos por correo electrónico ante cambios materiales. La fecha de la última actualización siempre estará indicada al inicio de este documento.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
