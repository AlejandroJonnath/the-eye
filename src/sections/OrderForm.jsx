// Requiere instalar Formik y Yup
// npm install formik yup

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/OrderForm.css';

const steps = ['Datos de contacto', 'Diseño', 'Confirmación'];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required('Nombre es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
  }),
  Yup.object({
    description: Yup.string().required('Descripción es requerida'),
    file: Yup.mixed().required('Imagen es requerida'),
  }),
];

export default function OrderForm() {
  const [step, setStep] = useState(0);
  const initialValues = { name: '', email: '', description: '', file: null };

  const handleSubmit = (values, actions) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      actions.setTouched({});
    } else {
      console.log('Pedido enviado:', values);
      alert('¡Tu pedido ha sido enviado!');
      actions.resetForm();
      setStep(0);
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <section id="order" className="order-section">
      <h2>Realiza tu pedido</h2>
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
    </section>
  );
}
