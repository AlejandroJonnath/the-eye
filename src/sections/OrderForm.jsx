import '../styles/OrderForm.css';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaWhatsapp } from 'react-icons/fa';
import ModalOrderForm from '../components/modalOrderForm.jsx';
import NavBar from '../components/NavBar'; // Importa el NavBar
import Footer from '../components/Footer';  // Importa el Footer

export default function OrderForm() {
  const steps = ['Datos de contacto', 'Diseño', 'Confirmación'];

  const validationSchemas = [
    Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      email: Yup.string().email('Email inválido').required('Email es requerido'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Solo números permitidos")
        .min(10, 'El teléfono debe tener al menos 10 dígitos')
        .required('Teléfono es requerido'),
    }),
    Yup.object({
      description: Yup.string().required('Descripción es requerida'),
      file: Yup.mixed().required('Imagen es requerida'),
    }),
  ];

  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const initialValues = { 
    name: '', 
    email: '', 
    phone: '', 
    description: '', 
    file: null 
  };

  const handleSubmit = (values, actions) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      actions.setTouched({});
    } else {
      setShowModal(true);
      actions.resetForm();
      setStep(0);
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <>
      <NavBar /> {/* Muestra el NavBar arriba */}
      <section id="order" className="order-section">
        <h2>Servicios</h2>
        <div className="store-description">
          <p>
          En THE-EYE, la experiencia de compra es interactiva y divertida. Los clientes pueden visitar
          nuestra plataforma en línea, donde pueden ver ejemplos de diseños,
          leer reseñas y realizar pedidos de manera fácil y rápida.
          </p>
          <p>
          THE-EYE no es solo una tienda de camisetas, es un espacio donde la creatividad se encuentra 
          con la moda. Invitamos a todos nuestros usuarios, a descubrir su estilo único, y  llevarlo
           con orgullo. ¡Ven y exprésate con THE-EYE!
          </p>
          <p>
            ¿Tienes alguna duda? Puedes contactarnos por WhatsApp al siguiente número:
          </p>
          <div className="whatsapp-number">
            <a href="https://wa.me/593961620349" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp-icon" /> 0961620349
            </a>
          </div>
         <h2>Realiza tu pedido personalizado</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step]}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="order-form">
              {step === 0 && (
                <div className="form-step">
                  <label htmlFor="name">Nombre</label>
                  <Field id="name" name="name" type="text" />
                  <ErrorMessage name="name" component="div" className="error" />

                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" type="email" />
                  <ErrorMessage name="email" component="div" className="error" />

                  <label htmlFor="phone">Teléfono</label>
                  <Field 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                  />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>
              )}

              {step === 1 && (
                <div className="form-step">
                  <label htmlFor="description">Descripción de tu diseño</label>
                  <Field as="textarea" id="description" name="description" rows="4" />
                  <ErrorMessage name="description" component="div" className="error" />

                  <label htmlFor="file">Sube tu boceto</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={e => setFieldValue('file', e.currentTarget.files[0])}
                  />
                  <ErrorMessage name="file" component="div" className="error" />
                </div>
              )}

              {step === 2 && (
                <div className="form-step confirmation">
                  <p><strong>Nombre:</strong> {values.name}</p>
                  <p><strong>Email:</strong> {values.email}</p>
                  <p><strong>Teléfono:</strong> {values.phone}</p>
                  <p><strong>Descripción:</strong> {values.description}</p>
                  <p><strong>Archivo:</strong> {values.file?.name}</p>
                </div>
              )}

              <div className="form-buttons">
                {step > 0 && (
                  <button type="button" onClick={handleBack} className="btn-back">
                    Volver
                  </button>
                )}
                <button type="submit" className="btn-next">
                  {step === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <ModalOrderForm show={showModal} onClose={() => setShowModal(false)} />
      </section>
      <Footer /> {/* Muestra el Footer abajo */}
    </>
  );
}