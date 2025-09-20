import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutForm({ onSubmit, isSubmitting }) {
  const { getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ""))) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");
    const limitedPhoneNumber = phoneNumber.slice(0, 10);
    if (limitedPhoneNumber.length <= 3) {
      return limitedPhoneNumber;
    } else if (limitedPhoneNumber.length <= 6) {
      return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(3)}`;
    } else {
      return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(
        3,
        6
      )}-${limitedPhoneNumber.slice(6)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      telefono: formattedValue,
    }));

    if (errors.telefono) {
      setErrors((prev) => ({
        ...prev,
        telefono: "",
      }));
    }
  };

  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
      <h3 className="text-white text-xl font-semibold mb-4">
        Información de Contacto
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-white text-sm font-medium mb-2"
          >
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-zinc-700 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.nombre ? "border-red-500" : "border-zinc-600"
            }`}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.nombre && (
            <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-white text-sm font-medium mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-zinc-700 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-zinc-600"
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block text-white text-sm font-medium mb-2"
          >
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handlePhoneChange}
            className={`w-full px-3 py-2 bg-zinc-700 border rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.telefono ? "border-red-500" : "border-zinc-600"
            }`}
            placeholder="123-456-7890"
            maxLength="12"
          />
          {errors.telefono && (
            <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>
          )}
        </div>

        <div className="pt-4 border-t border-zinc-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-lg font-semibold">
              Total a Pagar:
            </span>
            <span className="text-white text-2xl font-bold">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            {isSubmitting ? "Procesando..." : "Completar Compra"}
          </button>
        </div>
      </form>
    </div>
  );
}
