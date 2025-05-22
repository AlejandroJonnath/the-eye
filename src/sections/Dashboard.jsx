import React, { useState, useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";
import { useClickContext } from "../context/ClickContext";
import { useNavBarClickContext } from "../context/NavBarClickContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Paleta de colores de NavBar.css
const COLOR_BG = "#181818";
const COLOR_CARD = "#23233a";
const COLOR_ACCENT = "#ffdf2c";
const COLOR_CONTRAST = "#fff";
const COLOR_BAR = "#ffdf2c";
const COLOR_BAR2 = "#61dafb";
const COLOR_BAR3 = "#e8a35a";

const dataUsuarios = [
  { name: "Ene", usuarios: 40 },
  { name: "Feb", usuarios: 80 },
  { name: "Mar", usuarios: 65 },
  { name: "Abr", usuarios: 100 },
  { name: "May", usuarios: 90 },
  { name: "Jun", usuarios: 120 },
];

const dataReportes = [
  { name: "Resueltos", value: 300 },
  { name: "Pendientes", value: 120 },
  { name: "En proceso", value: 80 },
];

const COLORS = [COLOR_BAR, COLOR_BAR2, COLOR_BAR3];

const images = [
  { title: 'Diseño Exclusivo 1' },
  { title: 'Diseño Exclusivo 2' },
  { title: 'Diseño Exclusivo 3' },
  { title: 'Diseño Exclusivo 4' },
  { title: 'Diseño Exclusivo 5' },
  { title: 'Diseño Exclusivo 6' }
];

const Dashboard = () => {
  const { clicks } = useClickContext();
  const { navClicks } = useNavBarClickContext();
  const [activeSection, setActiveSection] = useState("Panel");
  const reportRef = useRef();

  const handleDownloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.text("Reporte de Estadísticas del Proyecto", 10, 10);
      pdf.addImage(imgData, "PNG", 10, 20, pdfWidth, pdfHeight);
      pdf.save("reporte-estadisticas.pdf");
    });
  };

  // Datos para la gráfica de popularidad
  const dataPopularidad = images.map((img, idx) => ({
    name: img.title,
    clicks: clicks[idx]
  }));

  // Métricas adicionales
  const totalClicks = clicks.reduce((a, b) => a + b, 0);
  const masPopular = images[clicks.indexOf(Math.max(...clicks))]?.title || "N/A";
  const menosPopular = images[clicks.indexOf(Math.min(...clicks))]?.title || "N/A";

  const navClicksData = Object.entries(navClicks).map(([name, clicks]) => ({
    name,
    clicks
  }));

  // Animación para tarjetas y gráficas
  const cardAnim = {
    background: COLOR_CARD,
    color: COLOR_CONTRAST,
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 4px 24px rgba(255,223,44,0.10)",
    transition: "transform 0.25s cubic-bezier(.4,1.5,.6,1), box-shadow 0.25s",
    marginBottom: 24,
    animation: "fadeInUp 0.8s"
  };

  const chartAnim = {
    background: COLOR_CARD,
    borderRadius: 12,
    boxShadow: "0 4px 24px rgba(255,223,44,0.13)",
    padding: 24,
    marginBottom: 32,
    animation: "fadeInUp 1s"
  };

  // Contenido de cada sección
  const renderSection = () => {
    switch (activeSection) {
      case "Panel":
        return (
          <>
            <header style={{ marginBottom: 32 }}>
              <h1 style={{ margin: 0, color: COLOR_ACCENT, letterSpacing: 1 }}>Hola, querido Admin</h1>
            </header>
            <section style={{ display: "flex", gap: 24, marginBottom: 32 }}>
              <div style={{ ...cardAnim, flex: 1 }}>
                <h3 style={{ color: COLOR_ACCENT }}>Total de Clics en Galería</h3>
                <p style={{ fontSize: 28, fontWeight: "bold" }}>{totalClicks}</p>
              </div>
              <div style={{ ...cardAnim, flex: 1 }}>
                <h3 style={{ color: COLOR_ACCENT }}>Diseño Más Popular</h3>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>{masPopular}</p>
              </div>
              <div style={{ ...cardAnim, flex: 1 }}>
                <h3 style={{ color: COLOR_ACCENT }}>Diseño Menos Popular</h3>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>{menosPopular}</p>
              </div>
            </section>
            <section style={chartAnim}>
              <h3 style={{ color: COLOR_ACCENT }}>Popularidad de Camisetas (Clics)</h3>
              <div className="chart-anim">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataPopularidad}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis dataKey="name" stroke={COLOR_CONTRAST} />
                    <YAxis allowDecimals={false} stroke={COLOR_CONTRAST} />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                    <Legend />
                    <Bar dataKey="clicks">
                      {dataPopularidad.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
            <section style={{ display: "flex", gap: 24 }}>
              <div style={{ ...chartAnim, flex: 2 }}>
                <h3 style={{ color: COLOR_ACCENT }}>Usuarios por Mes</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={dataUsuarios}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis dataKey="name" stroke={COLOR_CONTRAST} />
                    <YAxis stroke={COLOR_CONTRAST} />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                    <Legend />
                    <Line type="monotone" dataKey="usuarios" stroke={COLOR_BAR2} strokeWidth={3} dot={{ r: 6, fill: COLOR_ACCENT }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div style={{ ...chartAnim, flex: 1 }}>
                <h3 style={{ color: COLOR_ACCENT }}>Estado de Reportes</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={dataReportes}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      label
                    >
                      {dataReportes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>
          </>
        );
      case "Usuarios":
        return (
          <section style={{ ...chartAnim }}>
            <h2 style={{ color: COLOR_ACCENT }}>Estadísticas de Navegación</h2>
            <p style={{ color: COLOR_CONTRAST }}>¿En qué apartados de la barra navegan más los usuarios?</p>
            <div className="chart-anim">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={navClicksData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                  <XAxis dataKey="name" stroke={COLOR_CONTRAST} />
                  <YAxis allowDecimals={false} stroke={COLOR_CONTRAST} />
                  <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                  <Legend />
                  <Bar dataKey="clicks" fill={COLOR_BAR2} animationDuration={1200} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <ul style={{ marginTop: 24, color: COLOR_CONTRAST }}>
              {navClicksData.map(item => (
                <li key={item.name}>
                  <strong>{item.name}:</strong> {item.clicks} clics
                </li>
              ))}
            </ul>
          </section>
        );
      case "Reportes":
        // Genera datos aleatorios de ejemplo
        const randomStats = [
          { label: "Nuevos usuarios este mes", value: Math.floor(Math.random() * 50 + 10) },
          { label: "Pedidos completados", value: Math.floor(Math.random() * 100 + 50) },
          { label: "Camiseta más popular", value: masPopular },
          { label: "Total de clics en galería", value: totalClicks }
        ];
        return (
          <section style={{ ...chartAnim }}>
            <h2 style={{ color: COLOR_ACCENT }}>Reporte de Estadísticas</h2>
            <div ref={reportRef}>
              <ul style={{ marginTop: 24, color: COLOR_CONTRAST }}>
                {randomStats.map((stat, idx) => (
                  <li key={idx}><strong>{stat.label}:</strong> {stat.value}</li>
                ))}
              </ul>
              <div className="chart-anim" style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataPopularidad}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis dataKey="name" stroke={COLOR_CONTRAST} />
                    <YAxis allowDecimals={false} stroke={COLOR_CONTRAST} />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                    <Legend />
                    <Bar dataKey="clicks">
                      {dataPopularidad.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <button
              style={{
                marginTop: 24,
                padding: "10px 24px",
                borderRadius: 6,
                background: COLOR_ACCENT,
                border: "none",
                color: COLOR_CONTRAST, // Cambiado a blanco
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(255,223,44,0.18)",
                transition: "background 0.18s, color 0.18s, transform 0.18s"
              }}
              onClick={handleDownloadPDF}
              onMouseOver={e => e.currentTarget.style.background = COLOR_BAR2}
              onMouseOut={e => e.currentTarget.style.background = COLOR_ACCENT}
            >
              Descargar Reporte en PDF
            </button>
          </section>
        );
      default:
        return null;
    }
  };

  // Estilos para el menú activo
  const getMenuStyle = (section) => ({
    margin: "18px 0",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "6px",
    background: activeSection === section ? COLOR_ACCENT : "transparent",
    color: activeSection === section ? "#222" : COLOR_CONTRAST,
    fontWeight: activeSection === section ? "bold" : "normal",
    transition: "background 0.2s, color 0.2s"
  });

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      background: COLOR_BG,
      transition: "background 0.3s"
    }}>
      <style>
        {`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(60px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .chart-anim {
          animation: fadeInUp 1.2s cubic-bezier(.4,1.5,.6,1);
        }
        `}
      </style>
      <aside style={{
        width: 220,
        background: COLOR_CARD,
        color: COLOR_CONTRAST,
        padding: 24,
        minHeight: "100vh",
        boxShadow: "2px 0 16px rgba(0,0,0,0.25)"
      }}>
        <h2 style={{ color: COLOR_ACCENT }}>Admin</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={getMenuStyle("Panel")} onClick={() => setActiveSection("Panel")}>Panel</li>
          <li style={getMenuStyle("Usuarios")} onClick={() => setActiveSection("Usuarios")}>Usuarios</li>
          <li style={getMenuStyle("Reportes")} onClick={() => setActiveSection("Reportes")}>Reportes</li>
        </ul>
      </aside>
      <main style={{ flex: 1, background: COLOR_BG, padding: 32, minHeight: "100vh" }}>
        {renderSection()}
      </main>
    </div>
  );
};

export default Dashboard;