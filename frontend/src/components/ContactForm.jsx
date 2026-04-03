import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { X, Loader2, CheckCircle, CalendarDays, MessageSquare } from "lucide-react";
import { toast } from "sonner";

// Rate limiting: track submissions
const submissionTimestamps = [];
const MAX_SUBMISSIONS = 5;
const TIME_WINDOW_MS = 60000; // 1 minute

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    conversacionesMensuales: 0,
    nombre: "",
    nombreEmpresa: "",
    email: "",
    telefono: "",
    redesSociales: "",
    sitioWeb: "",
    notas: "",
  });
  const [honeypot, setHoneypot] = useState(""); // Honeypot field
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkRateLimit = () => {
    const now = Date.now();
    // Remove timestamps older than the time window
    while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - TIME_WINDOW_MS) {
      submissionTimestamps.shift();
    }
    // Check if we've exceeded the limit
    if (submissionTimestamps.length >= MAX_SUBMISSIONS) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.log("Bot detected via honeypot");
      // Fake success to not alert the bot
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 2000);
      return;
    }

    // Rate limiting check
    if (!checkRateLimit()) {
      toast.error("Has enviado demasiadas solicitudes. Por favor espera un momento antes de intentar de nuevo.");
      return;
    }

    // Validate all required fields
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!formData.nombreEmpresa.trim()) {
      newErrors.nombreEmpresa = "El nombre de la clínica/empresa es obligatorio";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Por favor completa todos los campos obligatorios correctamente");
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = process.env.REACT_APP_WEBHOOK_URL;
      
      // Record this submission for rate limiting
      submissionTimestamps.push(Date.now());

      if (!webhookUrl) {
        console.log("Webhook URL not configured. Form data:", formData);
        toast.info("Configuración pendiente: URL del webhook no está configurada");
        setTimeout(() => {
          setIsSuccess(true);
          setIsSubmitting(false);
          setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setFormData({
              conversacionesMensuales: 0,
              nombre: "",
              nombreEmpresa: "",
              email: "",
              telefono: "",
              redesSociales: "",
              sitioWeb: "",
              notas: "",
            });
          }, 2000);
        }, 1000);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          conversacionesMensuales: formData.conversacionesMensuales === 0 ? "" : formData.conversacionesMensuales.toString(),
          timestamp: new Date().toISOString(),
          source: "ToK Landing Page",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("¡Solicitud enviada con éxito! Nos contactaremos pronto.");
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            conversacionesMensuales: 0,
            nombre: "",
            nombreEmpresa: "",
            email: "",
            telefono: "",
            redesSociales: "",
            sitioWeb: "",
            notas: "",
          });
        }, 2000);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Agenda tu Demo Gratuita
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Completa el formulario y nos contactaremos contigo
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Los campos con * son obligatorios
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        {isSuccess ? (
          <div className="px-6 py-12 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Solicitud Enviada!
            </h3>
            <p className="text-gray-600">
              Nos pondremos en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website_url">Website URL</label>
              <input
                type="text"
                id="website_url"
                name="website_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Conversaciones Mensuales Slider - PRIMER CAMPO */}
            <div>
              <Label htmlFor="conversacionesMensuales" className="text-gray-700 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-sky-500" />
                Número de Conversaciones Mensuales * <span className="text-gray-500 font-normal">(Aproximado)</span>
              </Label>
              <div className="mt-4 space-y-3">
                <div className="relative">
                  <input
                    type="range"
                    id="conversacionesMensuales"
                    name="conversacionesMensuales"
                    min="0"
                    max="5000"
                    step="100"
                    value={formData.conversacionesMensuales}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, conversacionesMensuales: parseInt(e.target.value) }));
                    }}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gray-200 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 
                      [&::-webkit-slider-thumb]:h-6 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-gradient-to-r 
                      [&::-webkit-slider-thumb]:from-sky-500 
                      [&::-webkit-slider-thumb]:to-cyan-500 
                      [&::-webkit-slider-thumb]:shadow-lg 
                      [&::-webkit-slider-thumb]:shadow-sky-300/50
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-transform
                      [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-thumb]:w-6 
                      [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-gradient-to-r 
                      [&::-moz-range-thumb]:from-sky-500 
                      [&::-moz-range-thumb]:to-cyan-500 
                      [&::-moz-range-thumb]:border-2
                      [&::-moz-range-thumb]:border-white
                      [&::-moz-range-thumb]:cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0ea5e9 0%, #06b6d4 ${(formData.conversacionesMensuales / 5000) * 100}%, #e5e7eb ${(formData.conversacionesMensuales / 5000) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">0</span>
                  <div className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                    {formData.conversacionesMensuales >= 5000 ? '5,000+' : formData.conversacionesMensuales.toLocaleString()}
                  </div>
                  <span className="text-xs text-gray-400">5,000+</span>
                </div>
              </div>
            </div>

            {/* Nombre */}
            <div>
              <Label htmlFor="nombre" className="text-gray-700">
                Nombre *
              </Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className={`mt-2 ${errors.nombre ? 'border-red-500' : ''}`}
                placeholder="Juan Pérez"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>

            {/* Nombre de la clínica empresa */}
            <div>
              <Label htmlFor="nombreEmpresa" className="text-gray-700">
                Nombre de la Clínica/Empresa *
              </Label>
              <Input
                id="nombreEmpresa"
                name="nombreEmpresa"
                type="text"
                value={formData.nombreEmpresa}
                onChange={handleChange}
                className={`mt-2 ${errors.nombreEmpresa ? 'border-red-500' : ''}`}
                placeholder="Clínica Dental Sonrisa"
              />
              {errors.nombreEmpresa && (
                <p className="text-red-500 text-sm mt-1">{errors.nombreEmpresa}</p>
              )}
            </div>

            {/* Correo Electrónico */}
            <div>
              <Label htmlFor="email" className="text-gray-700">
                Correo Electrónico *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="juan@ejemplo.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <Label htmlFor="telefono" className="text-gray-700">
                Teléfono *
              </Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9+\s]/g, '');
                  setFormData((prev) => ({ ...prev, telefono: value }));
                  if (errors.telefono) {
                    setErrors((prev) => ({ ...prev, telefono: "" }));
                  }
                }}
                className={`mt-2 ${errors.telefono ? 'border-red-500' : ''}`}
                placeholder="+56 9 1234 5678"
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>

            {/* Instagram Empresa */}
            <div>
              <Label htmlFor="redesSociales" className="text-gray-700">
                Instagram Empresa
              </Label>
              <Input
                id="redesSociales"
                name="redesSociales"
                type="text"
                value={formData.redesSociales}
                onChange={handleChange}
                className="mt-2"
                placeholder="@clinica_ejemplo"
              />
            </div>

            {/* Sitio Web Empresa */}
            <div>
              <Label htmlFor="sitioWeb" className="text-gray-700">
                Sitio Web Empresa
              </Label>
              <Input
                id="sitioWeb"
                name="sitioWeb"
                type="text"
                value={formData.sitioWeb}
                onChange={handleChange}
                className="mt-2"
                placeholder="https://ejemplo.com"
              />
            </div>

            {/* Notas Adicionales */}
            <div>
              <Label htmlFor="notas" className="text-gray-700">
                Notas Adicionales
              </Label>
              <Textarea
                id="notas"
                name="notas"
                value={formData.notas}
                onChange={handleChange}
                className="mt-2"
                rows={4}
                placeholder="Cuéntanos sobre tu clínica y qué te gustaría automatizar..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <CalendarDays className="h-5 w-5" />
                    Agendar Demo Gratuita
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
