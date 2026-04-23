import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto prose dark:prose-invert prose-blue">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Términos de Uso</h1>
        <p className="text-gray-500 mb-10">Última actualización: abril de 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Aceptación de los términos</h2>
            <p>
              Al crear una cuenta y utilizar ToK, aceptas estos Términos de Uso en su totalidad. Estos términos constituyen un contrato legal entre tú (o la empresa que representas) y <strong>BVIA SpA</strong>, RUT 78.390.338-5, con domicilio en Carmen Covarrubias 32, Of. 313, Ñuñoa, Chile.
            </p>
            <p className="mt-3">
              Si no estás de acuerdo con estos términos, no debes utilizar la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Descripción del servicio</h2>
            <p className="mb-3">
              ToK es una plataforma SaaS (Software as a Service) que permite a empresas automatizar la atención al cliente y ventas mediante agentes de inteligencia artificial conectados a canales de mensajería oficiales de Meta Platforms: <strong>WhatsApp Business, Instagram Direct y Facebook Messenger</strong>.
            </p>
            <p className="mb-3">La plataforma incluye, entre otras funcionalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Agentes de IA entrenados con la información de tu negocio, capaces de responder consultas automáticamente en los canales conectados.</li>
              <li>Gestión de conversaciones y contactos en una bandeja unificada.</li>
              <li>Agendamiento y reagendamiento automático de citas mediante integración con Google Calendar.</li>
              <li>Campañas outbound para contactar clientes por mensajería.</li>
              <li>Calificación automática de leads.</li>
              <li>Integración con tiendas Shopify para responder consultas de productos y pedidos.</li>
              <li>Reportes y analíticas de conversaciones.</li>
            </ul>
            <p className="mt-3">El servicio se presta en modalidad de suscripción mensual o anual.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Registro y cuenta</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Debes proporcionar información veraz, completa y actualizada al crear tu cuenta.</li>
              <li>Eres responsable de mantener la confidencialidad de tus credenciales de acceso.</li>
              <li>No puedes compartir tu cuenta ni ceder el acceso a terceros no autorizados.</li>
              <li>ToK se reserva el derecho de suspender cuentas con información falsa o que infrinjan estos términos.</li>
              <li>Debes ser mayor de 18 años o actuar en nombre de una empresa legalmente constituida para usar ToK.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Planes y pagos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los cobros son en pesos chilenos (CLP) más IVA, procesados a través de VentiPay.</li>
              <li>Puedes optar por facturación mensual o anual. Los planes anuales incluyen un descuento que se aplica sobre el precio mensual equivalente.</li>
              <li>El período de facturación comienza en la fecha de tu primer pago y se renueva automáticamente al mismo ciclo (mensual o anual).</li>
              <li>Los precios pueden ajustarse con un aviso previo de 30 días por correo electrónico.</li>
              <li>No se realizan reembolsos por períodos parciales, salvo que la ley chilena lo exija expresamente.</li>
              <li>En caso de mora o fallo en el pago, ToK puede suspender el acceso a la plataforma hasta regularizar el cobro.</li>
              <li>Se cobra <strong>$200 CLP + IVA</strong> por cada conversación que supere el límite mensual de tu plan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Límites del servicio por plan</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Starter:</strong> conexión a 1 canal de mensajería (WhatsApp, Instagram o Messenger), hasta 500 conversaciones por mes.
              </li>
              <li>
                <strong>Pro:</strong> conexión a todos los canales de mensajería disponibles (WhatsApp, Instagram y Messenger), hasta 2.000 conversaciones por mes, con agendamiento automático vía Google Calendar.
              </li>
              <li>
                <strong>Enterprise:</strong> conexión a todos los canales de mensajería disponibles, hasta 5.000 conversaciones por mes, con reportes avanzados, manager de cuenta dedicado y soporte prioritario 24/7.
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Una "conversación" se define como el hilo de mensajes con un contacto dentro de una ventana de 24 horas, independiente del número de mensajes enviados o recibidos dentro de ese período.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Uso aceptable</h2>
            <p className="mb-4">Al usar ToK, te comprometes a NO:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar spam, mensajes masivos no solicitados o contenido engañoso a través de los canales conectados.</li>
              <li>Infringir las políticas de uso de Meta Platforms (incluyendo las Políticas de WhatsApp Business, Instagram y Messenger) ni los términos de servicio de Google ni Shopify.</li>
              <li>Usar ToK para actividades ilegales, fraudulentas, discriminatorias o que puedan causar daño a terceros.</li>
              <li>Intentar acceder a datos de otras empresas o vulnerar la seguridad del sistema.</li>
              <li>Realizar ingeniería inversa, descompilar o intentar obtener el código fuente de la plataforma.</li>
              <li>Revender, sublicenciar o transferir el acceso a ToK sin autorización expresa y por escrito de BVIA SpA.</li>
              <li>Usar el agente de IA para generar contenido ilegal, violento, sexual explícito, o que infrinja derechos de terceros.</li>
            </ul>
            <p className="mt-4">
              El incumplimiento de estas restricciones puede resultar en la suspensión inmediata de tu cuenta sin derecho a reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. Integraciones de terceros</h2>
            <h3 className="text-base font-semibold text-black dark:text-white mt-4 mb-2">Meta Platforms (WhatsApp, Instagram, Messenger)</h3>
            <p className="mb-3">
              ToK opera sobre las APIs oficiales de Meta Platforms. El uso de estos canales está sujeto a las Políticas de la Plataforma de Meta y a los Términos del Servicio de WhatsApp Business. ToK no garantiza la disponibilidad continua de estos canales, ya que Meta puede modificar sus APIs o políticas en cualquier momento.
            </p>
            <h3 className="text-base font-semibold text-black dark:text-white mt-4 mb-2">Google Calendar</h3>
            <p className="mb-3">
              Al conectar Google Calendar, autorizas a ToK a acceder a tu calendario para crear, modificar y consultar eventos relacionados con citas agendadas por el agente. Puedes revocar este acceso en cualquier momento desde tu cuenta de Google. ToK no utiliza estos datos para ningún fin distinto al agendamiento dentro de la plataforma.
            </p>
            <h3 className="text-base font-semibold text-black dark:text-white mt-4 mb-2">Shopify</h3>
            <p className="mb-3">
              Al conectar tu tienda Shopify, autorizas a ToK a acceder a información de productos, inventario, órdenes y datos de clientes necesarios para que el agente de IA pueda responder consultas de tus compradores. Eres responsable de asegurarte de que el uso de estos datos cumple con tus propias políticas de privacidad hacia tus clientes y con los términos de Shopify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. Inteligencia artificial</h2>
            <p className="mb-3">
              ToK incluye un agente de IA (impulsado por modelos de Anthropic y OpenAI) que responde automáticamente en nombre de tu empresa. Al respecto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eres responsable del contenido que proporcionas para configurar y entrenar el agente.</li>
              <li>ToK no se hace responsable por respuestas incorrectas, incompletas o inapropiadas generadas por el agente.</li>
              <li>No debes configurar el agente para que entregue información falsa, engañosa o que pueda causar perjuicio a tus clientes o terceros.</li>
              <li>Recomendamos supervisar periódicamente las conversaciones del agente para asegurar la calidad de las respuestas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">9. Propiedad intelectual</h2>
            <p className="mb-3">
              ToK y todos sus componentes (código, diseño, marca, funcionalidades) son propiedad de BVIA SpA. Queda prohibida su reproducción total o parcial sin autorización.
            </p>
            <p>
              Tus datos, conversaciones, contactos y contenido propio siguen siendo de tu propiedad. Al usar ToK, nos otorgas una licencia limitada para procesar ese contenido únicamente con el fin de prestar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">10. Limitación de responsabilidad</h2>
            <p className="mb-3">
              ToK se esfuerza por mantener la plataforma disponible de manera continua, pero no garantiza un uptime del 100%. En caso de interrupciones del servicio, haremos nuestro mejor esfuerzo por restablecer la operación en el menor tiempo posible.
            </p>
            <p>
              La responsabilidad total de BVIA SpA frente al usuario no excederá el monto pagado por el usuario en los últimos 3 meses de suscripción. ToK no será responsable por daños indirectos, pérdida de ventas, pérdida de datos o daños consecuentes derivados del uso —o imposibilidad de uso— de la plataforma, de sus integraciones con Meta, Google o Shopify, o de los modelos de inteligencia artificial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">11. Cancelación</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Puedes cancelar tu suscripción en cualquier momento desde la plataforma o escribiendo a <a href="mailto:soporte@tok-ai.cl" className="text-blue-600 hover:text-blue-700">soporte@tok-ai.cl</a>. Mantendrás acceso hasta el final del período pagado.</li>
              <li>ToK puede suspender o cancelar tu cuenta si incumples estos términos, sin obligación de reembolso.</li>
              <li>Tras la cancelación, tus datos serán eliminados dentro de los 90 días siguientes, de acuerdo con nuestra Política de Privacidad.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">12. Modificaciones al servicio</h2>
            <p>
              ToK se reserva el derecho de modificar, agregar o discontinuar funcionalidades de la plataforma. En caso de cambios materiales que afecten el servicio contratado, te notificaremos con al menos 30 días de anticipación por correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">13. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos de Uso se rigen por las leyes de la República de Chile. Cualquier disputa que no pueda resolverse de forma amistosa será sometida a los tribunales ordinarios de justicia de la ciudad de Santiago, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">14. Contacto</h2>
            <p>
              Para consultas sobre estos términos o el servicio en general, escríbenos a{' '}
              <a href="mailto:soporte@tok-ai.cl" className="text-blue-600 hover:text-blue-700">soporte@tok-ai.cl</a>{' '}
              o a{' '}
              <a href="mailto:ventas@tok-ai.cl" className="text-blue-600 hover:text-blue-700">ventas@tok-ai.cl</a>.
              También puedes escribirnos a nuestra dirección: BVIA SpA, Carmen Covarrubias 32, Of. 313, Ñuñoa, Santiago, Chile.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
