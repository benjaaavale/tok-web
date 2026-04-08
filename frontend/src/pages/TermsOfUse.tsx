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
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Descripción del servicio</h2>
            <p>
              ToK es una plataforma SaaS que permite a empresas automatizar la atención al cliente y ventas a través de WhatsApp, mediante agentes de inteligencia artificial, gestión de conversaciones, agendamiento y herramientas de seguimiento. El servicio se presta en modalidad de suscripción mensual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Registro y cuenta</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Debes proporcionar información veraz y actualizada al crear tu cuenta.</li>
              <li>Eres responsable de mantener la confidencialidad de tus credenciales de acceso.</li>
              <li>No puedes compartir tu cuenta ni ceder el acceso a terceros no autorizados.</li>
              <li>ToK se reserva el derecho de suspender cuentas con información falsa o que infrinjan estos términos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Planes y pagos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los cobros son mensuales en pesos chilenos (CLP) más IVA, procesados a través de VentiPay.</li>
              <li>El período de facturación comienza en la fecha de tu primer pago y se renueva mensualmente.</li>
              <li>Los precios pueden ajustarse con un aviso previo de 30 días por correo electrónico.</li>
              <li>No se realizan reembolsos por períodos parciales, salvo que la ley chilena lo exija.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Límites del servicio</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Starter:</strong> 1 número de WhatsApp, hasta 500 conversaciones/mes.</li>
              <li><strong>Pro:</strong> hasta 2 números de WhatsApp, hasta 2.000 conversaciones/mes.</li>
              <li><strong>Enterprise:</strong> hasta 10 números de WhatsApp, hasta 5.000 conversaciones/mes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Uso aceptable</h2>
            <p className="mb-4">Al usar ToK, te comprometes a NO:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar spam, mensajes masivos no solicitados o contenido engañoso.</li>
              <li>Infringir las Políticas de WhatsApp Business o los términos de Meta Platforms.</li>
              <li>Usar ToK para actividades ilegales, fraudulentas o que puedan causar daño a terceros.</li>
              <li>Intentar acceder a datos de otras empresas o vulnerar la seguridad del sistema.</li>
              <li>Realizar ingeniería inversa o intentar obtener el código fuente de la plataforma.</li>
              <li>Revender o sublicenciar el acceso a ToK sin autorización expresa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. Inteligencia artificial</h2>
            <p>
              ToK incluye un agente de IA que responde automáticamente en nombre de tu empresa. Eres responsable del contenido que proporciones para configurarlo. ToK no se hace responsable por respuestas incorrectas o inapropiadas generadas por el agente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. Propiedad intelectual</h2>
            <p>
              ToK y todos sus componentes son propiedad de BVIA SpA. Tus datos, conversaciones y contenido siguen siendo de tu propiedad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">9. Limitación de responsabilidad</h2>
            <p>
              La responsabilidad total de ToK no excederá el monto pagado por el usuario en los últimos 3 meses de suscripción. ToK no será responsable por daños indirectos o consecuentes derivados del uso de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">10. Cancelación</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Puedes cancelar tu suscripción en cualquier momento. Mantendrás acceso hasta el final del período pagado.</li>
              <li>ToK puede suspender o cancelar tu cuenta si incumples estos términos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">11. Ley aplicable</h2>
            <p>
              Estos Términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a los tribunales ordinarios de Santiago, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">12. Contacto</h2>
            <p>
              Para consultas, escríbenos a <a href="mailto:soporte@tok-ai.cl" className="text-blue-600 hover:text-blue-700">soporte@tok-ai.cl</a>. También puedes escribirnos a nuestra dirección comercial: BVIA SpA, Carmen Covarrubias 32, Of. 313, Ñuñoa, Chile.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
