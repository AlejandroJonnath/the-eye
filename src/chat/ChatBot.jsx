import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

const BOT_NAME = "THE EYE Bot";

// Respuestas automáticas mejoradas para estudiantes, autoridades y compradores
const defaultResponses = [
    {
        keywords: [
            "hola", "buenas", "saludos", "hey", "holi", "hello", "hi"
        ],
        response: "¡Hola! 👋 Soy THE EYE Bot. ¿Eres estudiante, autoridad o visitante? ¿En qué puedo ayudarte hoy?"
    },
    {
        keywords: [
            "precio", "precios", "cuánto", "vale", "coste", "costo", "tarifa", "valen", "cuestan", "cuesta", "valor",
            "cuánto cuesta", "cuánto valen", "cuánto sale", "tarifas", "lista de precios"
        ],
        response: "Nuestros precios varían según el diseño y el producto. Puedes ver todos los productos y precios en la sección de productos. ¿Quieres ir allí ahora? 👉 <a href='#productos' style='color:#23233a;font-weight:bold;text-decoration:underline;'>Ver productos</a>"
    },
    {
        keywords: [
            "personalizar", "personalizado", "diseño", "crear", "propio", "servicio", "servicios", "pedido", "encargar", "solicitar", "hacer", "modificar", "customizar",
            "quiero un diseño", "quiero personalizar", "quiero mi diseño", "quiero hacer un pedido", "quiero encargar", "quiero solicitar", "quiero modificar", "quiero un servicio", "quiero un pedido"
        ],
        response: "¡Claro! Puedes personalizar tu prenda o hacer un pedido especial en la sección de servicios. ¿Te gustaría ir a servicios? 👉 <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Ir a servicios</a>"
    },
    {
        keywords: [
            "contacto", "whatsapp", "correo", "email", "hablar", "consultar", "soporte", "ayuda", "comunicar", "mensaje",
            "atención", "asistencia", "información", "pregunta", "consulta", "preguntar", "duda", "dudas",
            "atención al cliente", "atencion al cliente", "atencion", "dónde puedo contactar", "como contacto", "quiero contactar", "quiero comunicarme", "quiero hablar"
        ],
        response: "Puedes contactarnos por WhatsApp al <a href='https://wa.me/593961620349' target='_blank' style='color:#FFD700;font-weight:bold;'>0961620349</a> o por correo a <a href='mailto:edison.proaño@itq.edu.ec' style='color:#FFD700;font-weight:bold;'>edison.proaño@itq.edu.ec</a>."
    },
    {
        keywords: [
            "galería", "galeria", "ejemplos", "ver", "muestras", "fotos", "diseños", "imágenes", "imagenes", "portafolio", "catálogo", "catalogo",
            "quiero ver diseños", "quiero ver ejemplos", "muestrame la galería", "muestrame los diseños", "ver galería", "ver galeria"
        ],
        response: "Puedes ver ejemplos de nuestros trabajos y diseños en la sección <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Galería</a>. ¿Quieres que te lleve allí?"
    },
    {
        keywords: [
            "estudiante", "soy estudiante", "descuento estudiante", "universidad", "itq", "instituto", "matrícula", "matricula", "alumno", "beca", "descuento para estudiantes"
        ],
        response: "¡Bienvenido estudiante! Si necesitas información sobre descuentos, colaboraciones o productos especiales para la comunidad educativa, escríbenos directamente o visita la sección de productos."
    },
    {
        keywords: [
            "autoridad", "soy autoridad", "director", "docente", "profesor", "administrativo", "rector", "coordinador", "personal", "institucional", "institución"
        ],
        response: "¡Saludos! Si eres autoridad o parte del personal institucional y deseas información sobre convenios, compras institucionales o colaboraciones, por favor contáctanos por correo o WhatsApp. Estamos para servirte."
    },
    {
        keywords: [
            "comprar", "quiero comprar", "adquirir", "compra", "dónde compro", "como compro", "comprar ahora", "adquirir producto", "comprar producto", "ordenar",
            "ordenar producto", "hacer pedido", "realizar pedido", "hacer compra", "realizar compra", "comprar online", "comprar en línea", "comprar por internet",
            "muestrame los productos", "ver productos", "productos disponibles", "productos", "catálogo", "catalogo"
        ],
        response: "Puedes comprar directamente desde nuestra sección de productos o solicitar un diseño personalizado en servicios. ¿Te gustaría ver los productos disponibles? 👉 <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Ver productos</a>"
    },
    {
        keywords: [
            "si", "sí", "claro", "por supuesto", "dale", "ok", "de acuerdo", "acepto", "está bien", "perfecto", "genial", "me interesa", "me gusta",
            "me parece bien", "me parece genial", "me parece perfecto", "me parece interesante", "me parece atractivo", "me parece útil", "me parece conveniente"
        ],
        response: "¡Perfecto! Si necesitas más información específica, por favor indícalo en tu mensaje. También puedes navegar por las secciones de <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a>, <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>servicios</a> o <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a> para descubrir más opciones."
    },
    {
        keywords: [
            "no", "no quiero", "no gracias", "no deseo", "no por ahora", "no necesito", "no me interesa", "no estoy seguro", "no estoy interesado", "no quiero ayuda"
        ],
        response: "¡Entiendo! Si necesitas ayuda más adelante, puedes preguntarme sobre productos, servicios, contacto o ver la galería. ¿Te gustaría recibir alguna recomendación personalizada? Por ejemplo, puedes explorar la <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a> para inspirarte o ver nuestros <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a> destacados."
    },
    {
        keywords: [
            "recomienda", "recomiéndame", "sugerencia", "sugerencias", "qué me recomiendas", "que me recomiendas", "opciones", "opciones de compra", "opciones de diseño", "opciones de productos", "qué opciones hay", "que opciones hay"
        ],
        response: "Te recomiendo visitar nuestra galería para inspirarte con los diseños de otros clientes, o explorar la sección de productos para ver lo más popular. Si buscas algo único, la sección de servicios es ideal para ti. Puedes ir a <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a>, <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a> o <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>servicios</a>."
    },
    {
        keywords: [
            "gracias", "thank", "thanks", "agradecido", "muchas gracias", "mil gracias", "tenkiu", "gracias por tu ayuda", "gracias por la información", "gracias por tu tiempo"
        ],
        response: "¡De nada! Si tienes otra pregunta, aquí estaré para ayudarte. 😊"
    }
];

function getBotResponse(message) {
    const msg = message.toLowerCase();
    for (const entry of defaultResponses) {
        if (entry.keywords.some(word => msg.includes(word))) {
            return entry.response;
        }
    }
    return "No entendí tu pregunta, pero puedes consultarme sobre productos, servicios, personalización, contacto o galería. Si necesitas ayuda, dime por ejemplo: <b>productos</b>, <b>servicios</b> o <b>contacto</b>.";
}

const initialBotMessage = [
    { from: "bot", text: "¡Hola! Soy el asistente virtual de THE EYE. ¿En qué puedo ayudarte?" }
];

export default function ChatBot({ openOnLoad = false }) {
    const [open, setOpen] = useState(openOnLoad);
    const [messages, setMessages] = useState(initialBotMessage);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (open && chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open]);

    // Limpia el historial cada vez que se abre el chat
    useEffect(() => {
        if (open) {
            setMessages(initialBotMessage);
        }
    }, [open]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTimeout(() => {
            const botMsg = { from: "bot", text: getBotResponse(input) };
            setMessages(prev => [...prev, botMsg]);
        }, 700);
    };

    return (
        <>
            {/* Mini icono flotante para abrir/cerrar el chat */}
            {!open && (
                <button
                    className="chatbot-mini-fab"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir chat de ayuda"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#FFD700" />
                        <path d="M10 22v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#23233a" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="14" r="1" fill="#23233a" />
                        <circle cx="20" cy="14" r="1" fill="#23233a" />
                    </svg>
                </button>
            )}

            {/* Ventana del chat */}
            {open && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span>{BOT_NAME}</span>
                        <button
                            className="chatbot-close"
                            onClick={() => {
                                setOpen(false);
                                setMessages(initialBotMessage); // Limpia el historial al cerrar
                            }}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`chatbot-msg ${msg.from === "bot" ? "bot" : "user"}`}
                                dangerouslySetInnerHTML={msg.from === "bot" ? { __html: msg.text } : undefined}
                            >
                                {msg.from === "user" ? msg.text : null}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <form className="chatbot-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            autoFocus
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            )}
        </>
    );
}