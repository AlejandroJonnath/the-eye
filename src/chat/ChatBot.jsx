import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

const BOT_NAME = "THE EYE";



const defaultResponses = [
    // Saludos y bienvenida

    {
        keywords: [
            "Martin", "martín", "Martín", "martin"
        ],
        response : "Hola, cabezón"
        
    },

    {
        keywords: [
            "hola", "buenas", "saludos", "hey", "holi", "hello", "hi", "helouda", "saludo",
            "buenas tardes", "buenas noches", "buen día", "buenos días", "qué tal", "qué hay",
            "cómo estás", "cómo va", "cómo andas", "cómo te va", "qué pasa", "qué sucede",
            "qué hay de nuevo", "qué me cuentas", "qué me dices", "qué tal va todo"
        ],
        response: "¡Hola! 👋 Soy THE EYE Bot. ¿Eres estudiante, autoridad, cliente o visitante? ¿En qué puedo ayudarte hoy?"
    },
    // Información sobre productos y servicios
    {
        keywords: [
            "qué venden", "que venden", "qué ofrecen", "que ofrecen", "qué productos", "que productos",
            "qué tienen", "que tienen", "qué comercializan", "que comercializan", "qué puedo comprar",
            "que puedo comprar", "qué hay", "que hay", "qué servicios", "que servicios", "ofrecen servicios",
            "qué tipo de productos", "qué tipo de servicios", "qué tipo de camisetas", "qué tipo de prendas"
        ],
        response: "Vendemos camisetas y prendas personalizadas, y realizamos pedidos a domicilio a nivel nacional. ¿Te gustaría ver nuestros productos, personalizar uno o conocer nuestros servicios?"
    },
    // Precios y cotizaciones
    {
        keywords: [
            "precio", "precios", "cuánto", "vale", "coste", "costo", "tarifa", "valen", "cuestan", "cuesta", "valor",
            "cuánto cuesta", "cuánto valen", "cuánto sale", "tarifas", "lista de precios", "cotización", "cotizar", "presupuesto"
        ],
        response: "Nuestros precios varían según el diseño y el producto. Puedes ver todos los productos y precios en la sección de productos. ¿Quieres ir allí ahora? 👉 <a href='#productos' style='color:#23233a;font-weight:bold;text-decoration:underline;'>Ver productos</a>"
    },
    // Personalización y pedidos especiales
    {
        keywords: [
            "personalizar", "personalizado", "diseño", "crear", "propio", "servicio", "servicios", "pedido", "encargar",
            "solicitar", "hacer", "modificar", "customizar", "quiero un diseño", "quiero personalizar", "quiero mi diseño",
            "quiero hacer un pedido", "quiero encargar", "quiero solicitar", "quiero modificar", "quiero un servicio",
            "quiero un pedido", "quiero una camiseta personalizada", "quiero una prenda personalizada"
        ],
        response: "¡Por supuesto! Puedes personalizar tu prenda o hacer un pedido especial en la sección de servicios. ¿Te gustaría ir a servicios? 👉 <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Ir a servicios</a>"
    },
    // Contacto y soporte
    {
        keywords: [
            "contacto", "whatsapp", "correo", "email", "hablar", "consultar", "soporte", "ayuda", "comunicar", "mensaje",
            "atención", "asistencia", "información", "pregunta", "consulta", "preguntar", "duda", "dudas",
            "atención al cliente", "atencion al cliente", "atencion", "dónde puedo contactar", "como contacto",
            "quiero contactar", "quiero comunicarme", "quiero hablar", "quiero soporte", "quiero ayuda"
        ],
        response: "Puedes contactarnos por WhatsApp al <a href='https://wa.me/593961620349' target='_blank' style='color:#FFD700;font-weight:bold;'>0961620349</a> o por correo a <a href='mailto:edison.proaño@itq.edu.ec' style='color:#FFD700;font-weight:bold;'>edison.proaño@itq.edu.ec</a>. También puedes dejar tu mensaje aquí y te responderemos pronto."
    },
    // Galería y ejemplos
    {
        keywords: [
            "galería", "galeria", "ejemplos", "ver", "muestras", "fotos", "diseños", "imágenes", "imagenes", "portafolio", "catálogo", "catalogo",
            "quiero ver diseños", "quiero ver ejemplos", "muestrame la galería", "muestrame los diseños", "ver galería", "ver galeria", "ver catálogo", "ver catalogo"
        ],
        response: "Puedes ver ejemplos de nuestros trabajos y diseños en la sección <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Galería</a>. ¿Quieres que te lleve allí?"
    },
    // Estudiantes
    {
        keywords: [
            "estudiante", "soy estudiante", "descuento estudiante", "universidad", "itq", "instituto", "matrícula", "matricula", "alumno", "beca", "descuento para estudiantes", "descuentos estudiantes"
        ],
        response: "¡Bienvenido estudiante! Si necesitas información sobre descuentos, colaboraciones o productos especiales para la comunidad educativa, escríbenos directamente o visita la sección de productos."
    },
    // Autoridades y personal institucional
    {
        keywords: [
            "autoridad", "soy autoridad", "director", "docente", "profesor", "administrativo", "rector", "coordinador", "personal", "institucional", "institución", "institucion", "trabajo en el instituto"
        ],
        response: "¡Saludos! Si eres autoridad o parte del personal institucional y deseas información sobre convenios, compras institucionales o colaboraciones, por favor contáctanos por correo o WhatsApp. Estamos para servirte."
    },
    // Comprar y catálogo
    {
        keywords: [
            "comprar", "quiero comprar", "adquirir", "compra", "dónde compro", "como compro", "comprar ahora", "adquirir producto", "comprar producto", "ordenar",
            "ordenar producto", "hacer pedido", "realizar pedido", "hacer compra", "realizar compra", "comprar online", "comprar en línea", "comprar por internet",
            "muestrame los productos", "ver productos", "productos disponibles", "productos", "catálogo", "catalogo", "ver catálogo", "ver catalogo"
        ],
        response: "Puedes comprar directamente desde nuestra sección de productos o solicitar un diseño personalizado en servicios. ¿Te gustaría ver los productos disponibles? 👉 <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>Ver productos</a>"
    },
    // Recomendaciones y sugerencias
    {
        keywords: [
            "recomienda", "recomiéndame", "sugerencia", "sugerencias", "qué me recomiendas", "que me recomiendas", "opciones", "opciones de compra", "opciones de diseño", "opciones de productos", "qué opciones hay", "que opciones hay", "qué me sugieres", "que me sugieres"
        ],
        response: "Te recomiendo visitar nuestra galería para inspirarte con los diseños de otros clientes, o explorar la sección de productos para ver lo más popular. Si buscas algo único, la sección de servicios es ideal para ti. Puedes ir a <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a>, <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a> o <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>servicios</a>."
    },
    // Negativas y rechazos
    {
        keywords: [
            "no", "no quiero", "no gracias", "no deseo", "no por ahora", "no necesito", "no me interesa", "no estoy seguro", "no estoy interesado", "no quiero ayuda", "no por el momento", "no ahora", "no es necesario"
        ],
        response: "¡Entiendo! Si necesitas ayuda más adelante, puedes preguntarme sobre productos, servicios, contacto o ver la galería. ¿Te gustaría recibir alguna recomendación personalizada? Por ejemplo, puedes explorar la <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a> para inspirarte o ver nuestros <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a> destacados."
    },
    // Afirmaciones y aceptación
    {
        keywords: [
            "si", "sí", "claro", "por supuesto", "dale", "ok", "de acuerdo", "acepto", "está bien", "perfecto", "genial", "me interesa", "me gusta",
            "me parece bien", "me parece genial", "me parece perfecto", "me parece interesante", "me parece atractivo", "me parece útil", "me parece conveniente", "vale"
        ],
        response: "¡Perfecto! Si necesitas más información específica, por favor indícalo en tu mensaje. También puedes navegar por las secciones de <a href='/productos' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>productos</a>, <a href='/OrderForm' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>servicios</a> o <a href='/Galeria' style='color:#0057b8;font-weight:bold;text-decoration:underline;'>galería</a> para descubrir más opciones."
    },
    // Agradecimientos
    {
        keywords: [
            "gracias", "thank", "thanks", "agradecido", "muchas gracias", "mil gracias", "tenkiu", "gracias por tu ayuda", "gracias por la información", "gracias por tu tiempo", "te agradezco"
        ],
        response: "¡De nada! Si tienes otra pregunta, aquí estaré para ayudarte. 😊"
    },
    // Tecnología, API y soporte técnico
    {
        keywords: [
            "api", "integración", "documentación", "soporte técnico", "webhook", "endpoint", "json", "sdk", "desarrollador", "tecnología", "automatización", "soporte de sistemas", "infraestructura", "servidor", "deploy", "repositorio", "github", "backend", "frontend", "base de datos", "database", "rest", "restful", "microservicio", "microservicios", "tecnologías", "integraciones"
        ],
        response: `Tenemos documentación técnica detallada, APIs REST, integraciones, webhooks, SDKs y soporte especializado.<br/>
        <br/>
        <b>Integración:</b> Ofrecemos endpoints JSON, autenticación segura y ejemplos de código en varios lenguajes.<br/>
        <br/>
        Si quieres más información, anda a la sección de <b>Contacto</b> y háblanos directamente.`
    }
];


// Mensaje de bienvenida según la hora
function getWelcomeMessage() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "¡Buenos días! ☀️ Bienvenidos a The Eye. ¿En qué te puedo ayudar?";
    if (hour >= 12 && hour < 19) return "¡Buenas tardes! 👋 Bienvenidos a The Eye. ¿En qué te puedo ayudar?";
    return "¡Buenas noches! 🌙 Bienvenidos a The Eye. ¿En qué te puedo ayudar?";
}

const initialBotMessage = [
    { from: "bot", text: getWelcomeMessage() }
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

export default function ChatBot({ openOnLoad = false }) {
    const [open, setOpen] = useState(openOnLoad);
    const [messages, setMessages] = useState(initialBotMessage);
    const [input, setInput] = useState('');
    const [voiceEnabled, setVoiceEnabled] = useState(false); // Nuevo estado
    const [listening, setListening] = useState(false);
    const [botTyping, setBotTyping] = useState(false);
    const [animClass, setAnimClass] = useState("");
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

    // Animación de entrada/salida
    useEffect(() => {
        if (open) setAnimClass("chatbot-window-anim-in");
        else if (!open) setAnimClass("chatbot-window-anim-out");
    }, [open]);

    // Función para leer en voz alta el último mensaje del bot con voz natural y realista
    const speakLastBotMessage = () => {
        const lastBotMsg = [...messages].reverse().find(msg => msg.from === "bot");
        if (lastBotMsg) {
            // Elimina HTML, links y emojis del texto
            const cleanText = lastBotMsg.text
                .replace(/<a\b[^>]*>(.*?)<\/a>/gi, "") // Quita links HTML
                .replace(/<[^>]+>/g, "") // Quita cualquier otro HTML
                .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|\u24C2|\uD83D[\uDE00-\uDE4F])/g, ""); // Quita emojis

            const utter = new window.SpeechSynthesisUtterance(cleanText);
            // Selecciona la voz más natural disponible en español
            const voices = window.speechSynthesis.getVoices();
            // Busca voces de Google o Microsoft, que suelen ser más naturales
            const naturalVoice = voices.find(v =>
                v.lang.startsWith("es") &&
                (v.name.toLowerCase().includes("google") ||
                 v.name.toLowerCase().includes("microsoft") ||
                 v.name.toLowerCase().includes("natural") ||
                 v.name.toLowerCase().includes("neural"))
            );
            // Si no hay, busca cualquier voz femenina en español
            const femaleVoice = voices.find(v =>
                v.lang.startsWith("es") &&
                (v.name.toLowerCase().includes("female") ||
                 v.name.toLowerCase().includes("mujer"))
            );
            // Si no hay, busca cualquier voz en español
            const anySpanish = voices.find(v => v.lang.startsWith("es"));

            utter.voice = naturalVoice || femaleVoice || anySpanish || null;
            utter.lang = "es-ES";
            utter.pitch = 1.08; // Más natural, no tan agudo
            utter.rate = 1.01;  // Ligeramente más natural
            utter.volume = 1;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setBotTyping(true);
        setTimeout(() => {
            const botMsg = { from: "bot", text: getBotResponse(input) };
            setMessages(prev => [...prev, botMsg]);
            setBotTyping(false);
        }, 700);
    };

    // Función para iniciar reconocimiento de voz
    const handleVoiceInput = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Tu navegador no soporta reconocimiento de voz.");
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = "es-ES";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        setListening(true);

        let receivedResult = false;
        let timeoutId;

        recognition.onresult = (event) => {
            receivedResult = true;
            clearTimeout(timeoutId);
            const transcript = event.results[0][0].transcript.trim();
            setInput(transcript);
            setListening(false);
            if (transcript) {
                setTimeout(() => {
                    const userMsg = { from: "user", text: transcript };
                    setMessages(prev => [...prev, userMsg]);
                    setInput('');
                    setTimeout(() => {
                        const botMsg = { from: "bot", text: getBotResponse(transcript) };
                        setMessages(prev => [...prev, botMsg]);
                    }, 700);
                }, 100);
            }
        };

        recognition.onerror = (e) => {
            clearTimeout(timeoutId);
            setListening(false);
            if (e.error === "no-speech") {
                alert("No se detectó audio. Intenta hablar más cerca del micrófono.");
            }
        };

        recognition.onend = () => {
            clearTimeout(timeoutId);
            setListening(false);
            if (!receivedResult) {
                alert("No se detectó voz en 5 segundos. Intenta nuevamente.");
            }
        };

        recognition.start();

        // Timeout de 5 segundos para que el usuario hable
        timeoutId = setTimeout(() => {
            recognition.stop();
        }, 5000);
    };

    useEffect(() => {
        if (open && messages.length > 0) {
            speakLastBotMessage();
        }
        // eslint-disable-next-line
    }, [open, messages]);

    return (
        <>
            <style>{`
                .chatbot-window {
                    background: #111419;
                    color: #ffd700;
                    border-radius: 18px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
                    border: 2px solid #ebc44e;
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.35s cubic-bezier(0.2,0.8,0.2,1), transform 0.35s cubic-bezier(0.2,0.8,0.2,1);
                }
                .chatbot-window-anim-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                .chatbot-window-anim-out {
                    opacity: 0;
                    transform: translateY(60px);
                    pointer-events: none;
                }
                .chatbot-header {
                    background: #ebc44e;
                    color: #232323;
                    border-bottom: 2px solid #ffd700;
                }
                .chatbot-close {
                    color: #232323;
                }
                .chatbot-messages {
                    background: #111419;
                }
                .chatbot-msg.bot {
                    background: #ebc44e22;
                    color: #ffd700;
                }
                .chatbot-msg.user {
                    background: #23233a;
                    color: #fff;
                }
                .chatbot-avatar.bot-avatar {
                    color: #ebc44e;
                }
                .chatbot-avatar.user-avatar {
                    color: #ffd700;
                }
                .chatbot-input-area {
                    background: transparent;
                    border-top: 2px solid #ebc44e;
                }
                .chatbot-input-area input {
                    background: #232323;
                    color: #ffd700;
                    border: 1.5px solid #ebc44e;
                }
                .chatbot-input-area button[type="button"] {
                    background: #232323;
                    color: #ffd700;
                    border: 1.5px solid #ebc44e;
                }
                .chatbot-input-area button[type="button"]:disabled,
                .chatbot-input-area button[type="button"].listening {
                    background: #ffd700;
                    color: #232323;
                }
                .chatbot-input-area button[type="submit"] {
                    background: #ffd700;
                    color: #232323;
                    border: 1.5px solid #ebc44e;
                }
                .chatbot-mini-fab {
                    background: #ebc44e;
                    color: #232323;
                }
                .chatbot-mini-fab:hover {
                    background: #ffd700;
                }
                .bot-online-badge {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background: #2ecc40;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    position: relative;
                    left: -6px;
                    top: 10px;
                    box-shadow: 0 0 4px #2ecc40;
                }
                @media (max-width: 600px) {
                    .chatbot-window {
                        right: 8px;
                        bottom: 8px;
                        width: 98vw;
                        max-width: 98vw;
                        border-radius: 12px;
                    }
                    .chatbot-mini-fab {
                        right: 12px;
                        bottom: 12px;
                        width: 48px;
                        height: 48px;
                    }
                }
            `}</style>
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
                <div className={`chatbot-window ${animClass}`}>
                    <div className="chatbot-header">
                        <span>{BOT_NAME}</span>
                        {/* Botón de voz eliminado */}
                        <button
                            className="chatbot-close"
                            onClick={() => {
                                setAnimClass("chatbot-window-anim-out");
                                setTimeout(() => setOpen(false), 350);
                                setMessages(initialBotMessage);
                                window.speechSynthesis.cancel();
                            }}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="chatbot-messages" aria-live="polite">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`chatbot-msg ${msg.from === "bot" ? "bot" : "user"}`}
                            >
                                {msg.from === "bot" && (
                                    <span style={{position: "relative", display: "inline-flex", alignItems: "center"}}>
                                        <span className="chatbot-avatar bot-avatar" aria-label="Bot">👁️</span>
                                        <span className="bot-online-badge" title="Online"></span>
                                    </span>
                                )}
                                {msg.from === "user" && (
                                    <span className="chatbot-avatar user-avatar" aria-label="Tú">🧑</span>
                                )}
                                <span
                                    dangerouslySetInnerHTML={msg.from === "bot" ? { __html: msg.text } : undefined}
                                >
                                    {msg.from === "user" ? msg.text : null}
                                </span>
                            </div>
                        ))}
                        {botTyping && (
  <div className="chatbot-msg bot chatbot-typing">
    <span className="chatbot-avatar bot-avatar" aria-label="Bot">👁️</span>
    THE EYE está escribiendo
    <span className="chatbot-typing-dots">
      <span>.</span><span>.</span><span>.</span>
    </span>
  </div>
)}
                        <div ref={chatEndRef} />
                    </div>
                    <form className="chatbot-input-area" onSubmit={handleSend} style={{
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 0",
    background: "transparent"
}}>
    <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={e => setInput(e.target.value)}
        autoFocus
        style={{
            flex: 1,
            border: "1.5px solid #ebc44e", // cobre/dorado principal
            borderRadius: 8,
            padding: "10px 14px",
            fontSize: 15,
            outline: "none",
            background: "#232323", // fondo oscuro igual que la web
            color: "#ffd700",      // texto dorado
            marginRight: 0,
            minWidth: 0
        }}
    />
    <button
        type="button"
        onClick={e => {
            e.preventDefault();
            handleVoiceInput();
        }}
        style={{
            background: listening ? "#ffd700" : "#232323", // dorado cuando escucha, oscuro normal
            color: listening ? "#232323" : "#ffd700",      // oscuro cuando escucha, dorado normal
            border: "1.5px solid #ebc44e",
            borderRadius: 8,
            padding: "0 14px",
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: listening ? "0 2px 8px #ffd70055" : "0 2px 8px #23232322",
            transition: "background 0.2s, color 0.2s, border 0.2s"
        }}
        aria-label="Hablar"
        disabled={listening}
    >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{marginRight: 6}}>
            <rect x="7" y="3" width="6" height="10" rx="3" fill={listening ? "#232323" : "#ffd700"} />
            <rect x="9" y="15" width="2" height="3" rx="1" fill={listening ? "#232323" : "#ffd700"} />
            <path d="M5 10v1a5 5 0 0010 0v-1" stroke={listening ? "#232323" : "#ffd700"} strokeWidth="1.5" />
        </svg>
        {listening ? "Escuchando..." : "Audio"}
    </button>
    <button
        type="submit"
        style={{
            background: "#ffd700",      // dorado principal
            color: "#232323",           // texto oscuro
            border: "1.5px solid #ebc44e",
            borderRadius: 8,
            padding: "0 18px",
            height: 40,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px #ffd70055",
            transition: "background 0.2s, color 0.2s, border 0.2s"
        }}
    >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{marginRight: 6}}>
            <path d="M4 10h10M10 4l6 6-6 6" stroke="#232323" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Enviar
    </button>
</form>
                </div>
            )}
        </>
    );
}