import React, { useState, useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Cell, Legend
} from "recharts";
import { useClickContext } from "../context/ClickContext";
import { useNavBarClickContext } from "../context/NavBarClickContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

// Paleta de colores y estilos globales
const COLOR_BG = "#18181c";
const COLOR_CARD = "rgba(35,35,58,0.85)";
const COLOR_ACCENT = "#ffdf2c";
const COLOR_ACCENT_DARK = "#e8c800";
const COLOR_CONTRAST = "#fff";
const COLOR_BAR = "#ffdf2c";
const COLOR_BAR2 = "#61dafb";
const COLOR_BAR3 = "#e8a35a";
const COLOR_SHADOW = "0 8px 32px 0 rgba(31,38,135,0.18)";
const BORDER_RADIUS = 18;

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

function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

// Íconos SVG para menú
const icons = {
  Home: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M3 12L12 4l9 8" stroke={COLOR_BAR2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="7" y="13" width="10" height="7" rx="2" fill={COLOR_ACCENT_DARK}/>
    </svg>
  ),
  Panel: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" fill={COLOR_ACCENT_DARK}/><rect x="14" y="3" width="7" height="7" rx="2" fill={COLOR_BAR2}/><rect x="14" y="14" width="7" height="7" rx="2" fill={COLOR_BAR3}/><rect x="3" y="14" width="7" height="7" rx="2" fill={COLOR_ACCENT}/></svg>
  ),
  Usuarios: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={COLOR_BAR2}/><path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke={COLOR_ACCENT_DARK} strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Reportes: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" fill={COLOR_CARD}/><path d="M7 8h10M7 12h6M7 16h4" stroke={COLOR_ACCENT} strokeWidth="2" strokeLinecap="round"/></svg>
  )
};

const Dashboard = () => {
  const { clicks } = useClickContext();
  const { navClicks } = useNavBarClickContext();
  const [activeSection, setActiveSection] = useState("Panel");
  const reportRef = useRef();
  const width = useWindowWidth();
  const navigate = useNavigate(); // <-- Agrega esto

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

  // PDF
  const handleDownloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 18;
      let y = margin;

      // Portada
      const portadaHeight = 52; // Más alto para cubrir todo el header
      pdf.setFillColor(255, 223, 44);
      pdf.rect(0, 0, pageWidth, portadaHeight, "F");

      // Centrado vertical dentro de la franja amarilla
      const portadaCenterY = portadaHeight / 2 + 2;

      pdf.setFontSize(22);
      pdf.setTextColor(24, 24, 24);
      pdf.setFont("helvetica", "bold");
      pdf.text("The Eye Dashboard", pageWidth / 2, portadaCenterY - 6, { align: "center" });

      pdf.setFontSize(14);
      pdf.setFont("helvetica", "normal");
      pdf.text("Reporte Ejecutivo de Estadísticas", pageWidth / 2, portadaCenterY + 6, { align: "center" });

      pdf.setFontSize(11);
      pdf.setTextColor(80, 80, 80);
      pdf.text(`Generado: ${new Date().toLocaleString()}`, pageWidth / 2, portadaCenterY + 16, { align: "center" });

      y = portadaHeight + 8; // Ajusta el inicio del contenido debajo de la portada

      // Resumen Ejecutivo
      y += 12;
      pdf.setFontSize(15);
      pdf.setTextColor(24, 24, 24);
      pdf.setFont("helvetica", "bold");
      pdf.text("Resumen Ejecutivo", margin, y);

      y += 8;
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60, 60, 60);

      const resumen = [
        ["Nuevos usuarios este mes", Math.floor(Math.random() * 50 + 10)],
        ["Pedidos completados", Math.floor(Math.random() * 100 + 50)],
        ["Camiseta más popular", masPopular],
        ["Camiseta menos popular", menosPopular],
        ["Total de clics en galería", totalClicks]
      ];
      resumen.forEach(([label, value], i) => {
        pdf.text(`${label}:`, margin + 2, y + 7 + i * 7);
        pdf.setFont("helvetica", "bold");
        pdf.text(String(value), pageWidth - margin - 2, y + 7 + i * 7, { align: "right" });
        pdf.setFont("helvetica", "normal");
      });
      y += resumen.length * 7 + 10;

      // Línea divisoria
      pdf.setDrawColor(255, 223, 44);
      pdf.setLineWidth(1);
      pdf.line(margin, y, pageWidth - margin, y);

      // Popularidad de Camisetas
      y += 12;
      pdf.setFontSize(13);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(24, 24, 24);
      pdf.text("Popularidad de Camisetas", margin, y);

      y += 7;
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.setFillColor(255, 223, 44);
      pdf.rect(margin, y - 5, pageWidth - margin * 2, 8, "F");
      pdf.setTextColor(24, 24, 24);
      pdf.text("Diseño", margin + 2, y);
      pdf.text("Clics", pageWidth - margin - 18, y);

      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60, 60, 60);
      dataPopularidad.forEach((item, idx) => {
        pdf.text(item.name, margin + 2, y + 8 + idx * 6);
        pdf.text(String(item.clicks), pageWidth - margin - 18, y + 8 + idx * 6);
      });
      y += 8 + dataPopularidad.length * 6 + 6;

      // Usuarios por Mes
      pdf.setDrawColor(220, 220, 220);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);

      y += 10;
      pdf.setFontSize(13);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(24, 24, 24);
      pdf.text("Usuarios por Mes", margin, y);

      y += 7;
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60, 60, 60);
      dataUsuarios.forEach((item, idx) => {
        pdf.text(item.name, margin + 2, y + idx * 6);
        pdf.text(String(item.usuarios), pageWidth - margin - 18, y + idx * 6);
      });
      y += dataUsuarios.length * 6 + 8;

      // Estado de Reportes
      pdf.setDrawColor(220, 220, 220);
      pdf.line(margin, y, pageWidth - margin, y);

      y += 10;
      pdf.setFontSize(13);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(24, 24, 24);
      pdf.text("Estado de Reportes", margin, y);

      y += 7;
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60, 60, 60);
      dataReportes.forEach((item, idx) => {
        pdf.text(item.name, margin + 2, y + idx * 6);
        pdf.text(String(item.value), pageWidth - margin - 18, y + idx * 6);
      });
      y += dataReportes.length * 6 + 10;

      // Línea divisoria
      pdf.setDrawColor(255, 223, 44);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);

      // Imagen de la vista (gráficas)
      y += 8;
      pdf.setFontSize(11);
      pdf.setTextColor(80, 80, 80);
      pdf.text("Vista gráfica del dashboard:", margin, y);

      y += 4;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pageWidth - margin * 2;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", margin, y, pdfWidth, pdfHeight);

      // Pie de página
      pdf.setFontSize(9);
      pdf.setTextColor(180, 180, 180);
      pdf.text("Reporte generado automáticamente por The Eye Dashboard", pageWidth / 2, 292, { align: "center" });

      pdf.save("reporte-estadisticas.pdf");
    });
  };

  // Animación y estilos
  const cardAnim = {
    background: COLOR_CARD,
    color: COLOR_CONTRAST,
    padding: 24,
    borderRadius: BORDER_RADIUS,
    boxShadow: COLOR_SHADOW,
    backdropFilter: "blur(8px)",
    border: "1.5px solid rgba(255,255,255,0.08)",
    marginBottom: 24,
    transition: "transform 0.22s cubic-bezier(.4,1.5,.6,1), box-shadow 0.22s",
    cursor: "pointer"
  };

  const chartAnim = {
    background: COLOR_CARD,
    borderRadius: BORDER_RADIUS,
    boxShadow: COLOR_SHADOW,
    padding: 24,
    marginBottom: 32,
    backdropFilter: "blur(8px)",
    border: "1.5px solid rgba(255,255,255,0.08)"
  };

  // Menú lateral con íconos y mejor UX
  const getMenuStyle = (section) => ({
    margin: "10px 0",
    cursor: "pointer",
    padding: "12px 22px",
    borderRadius: "12px",
    background: activeSection === section ? COLOR_ACCENT : "transparent",
    color: activeSection === section ? "#222" : COLOR_CONTRAST,
    fontWeight: activeSection === section ? 700 : 500,
    fontSize: 17,
    letterSpacing: 0.2,
    border: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: activeSection === section ? "0 2px 12px #ffdf2c33" : "none",
    transition: "background 0.2s, color 0.2s, box-shadow 0.2s"
  });

  // Renderizado de secciones
  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        // Navega automáticamente a Home.jsx
        navigate("/");
        return null;
      case "Panel":
        return (
          <>
            <header style={{ marginBottom: 32 }}>
              <h1 style={{
                margin: 0,
                color: COLOR_ACCENT,
                letterSpacing: 1,
                fontWeight: 900,
                fontSize: width < 600 ? 22 : 32,
                textShadow: "0 2px 8px #0008"
              }}>Bienvenido, Admin</h1>
              <p style={{
                color: "#bdbdbd",
                marginTop: 8,
                fontSize: 17,
                fontWeight: 400,
                letterSpacing: 0.2
              }}>Panel de control y estadísticas generales del sistema.</p>
            </header>
            <section style={{
              display: "flex",
              gap: 24,
              marginBottom: 32,
              flexWrap: "wrap"
            }}>
              <div style={{ ...cardAnim, flex: 1, minWidth: 220, borderLeft: `5px solid ${COLOR_ACCENT}` }}>
                <h3 style={{ color: COLOR_ACCENT, fontWeight: 700, marginBottom: 8 }}>Total de Clics en Galería</h3>
                <p style={{ fontSize: 36, fontWeight: "bold", margin: 0, letterSpacing: 1 }}>{totalClicks}</p>
              </div>
              <div style={{ ...cardAnim, flex: 1, minWidth: 220, borderLeft: `5px solid ${COLOR_BAR2}` }}>
                <h3 style={{ color: COLOR_BAR2, fontWeight: 700, marginBottom: 8 }}>Diseño Más Popular</h3>
                <p style={{ fontSize: 22, fontWeight: "bold", margin: 0 }}>{masPopular}</p>
              </div>
              <div style={{ ...cardAnim, flex: 1, minWidth: 220, borderLeft: `5px solid ${COLOR_BAR3}` }}>
                <h3 style={{ color: COLOR_BAR3, fontWeight: 700, marginBottom: 8 }}>Diseño Menos Popular</h3>
                <p style={{ fontSize: 22, fontWeight: "bold", margin: 0 }}>{menosPopular}</p>
              </div>
            </section>
            <section style={chartAnim}>
              <h3 style={{ color: COLOR_ACCENT, fontWeight: 700, marginBottom: 16 }}>Popularidad de Camisetas (Clicks)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataPopularidad}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                  <XAxis dataKey="name" stroke={COLOR_BAR2} />
                  <YAxis allowDecimals={false} stroke={COLOR_BAR2} />
                  <Tooltip
                    contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }}
                    formatter={(value, name) => [
                      <span style={{ color: COLOR_BAR2, fontWeight: "bold" }}>{value}</span>,
                      name === "clicks"
                        ? <span style={{ color: COLOR_BAR2, fontWeight: "bold" }}>Clicks</span>
                        : name
                    ]}
                    labelStyle={{ color: COLOR_CONTRAST }}
                  />
                  <Legend />
                  <Bar dataKey="clicks">
                    {dataPopularidad.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </section>
            <section style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap"
            }}>
              <div style={{ ...chartAnim, flex: 2, minWidth: 260 }}>
                <h3 style={{ color: COLOR_ACCENT, fontWeight: 700, marginBottom: 16 }}>Usuarios por Mes</h3>
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
              <div style={{ ...chartAnim, flex: 1, minWidth: 220 }}>
                <h3 style={{ color: COLOR_ACCENT, fontWeight: 700, marginBottom: 16 }}>Estado de Reportes</h3>
                <ResponsiveContainer width="100%" height={width < 600 ? 180 : 250}>
                  <BarChart
                    data={dataReportes}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                    barCategoryGap={width < 600 ? 24 : 12}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis type="number" stroke={COLOR_CONTRAST} allowDecimals={false} />
                    <YAxis type="category" dataKey="name" stroke={COLOR_CONTRAST} width={100} />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                    <Legend />
                    <Bar dataKey="value">
                      {dataReportes.map((entry, index) => (
                        <Cell key={`cell-bar-panel-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </>
        );
      case "Usuarios":
        return (
          <section style={{ ...chartAnim }}>
            <h2 style={{ color: COLOR_ACCENT, fontWeight: 800, marginBottom: 12 }}>Estadísticas de Navegación</h2>
            <p style={{ color: COLOR_CONTRAST, marginBottom: 18 }}>¿En qué apartados de la barra navegan más los usuarios?</p>
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
            <ul style={{ marginTop: 24, color: COLOR_CONTRAST, paddingLeft: 18 }}>
              {navClicksData.map(item => (
                <li key={item.name} style={{ marginBottom: 6 }}>
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
          { label: "Camiseta menos popular", value: menosPopular },
          { label: "Total de clics en galería", value: totalClicks }
        ];
        const fecha = new Date().toLocaleString();
        return (
          <section style={{ ...chartAnim }}>
            <div className="dashboard-report-header" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 12
            }}>
              <h2 style={{ color: COLOR_ACCENT, margin: 0, fontWeight: 800 }}>Reporte de Estadísticas</h2>
              <button
                style={{
                  padding: "12px 32px",
                  borderRadius: 12,
                  background: COLOR_ACCENT,
                  border: "2px solid #fff",
                  color: "#222",
                  fontWeight: "bold",
                  fontSize: "1.08em",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  boxShadow: "0 2px 16px rgba(255,223,44,0.18)",
                  transition: "background 0.18s, color 0.18s, border 0.18s, transform 0.18s",
                  marginLeft: 8
                }}
                className="dashboard-download-btn"
                onClick={handleDownloadPDF}
                aria-label="Descargar reporte en PDF"
              >
                <span style={{ marginRight: 8, verticalAlign: "middle" }}>⬇️</span>
                Descargar PDF
              </button>
            </div>
            <div ref={reportRef} style={{ background: "#23233a", borderRadius: 14, padding: 24 }}>
              <p style={{ color: COLOR_CONTRAST, fontSize: 16, marginBottom: 8 }}>
                <strong>Fecha de generación:</strong> {fecha}
              </p>
              <h3 style={{ color: COLOR_ACCENT, marginTop: 16, fontWeight: 700 }}>Resumen</h3>
              <ul style={{ marginTop: 12, color: COLOR_CONTRAST, fontSize: 15, paddingLeft: 18 }}>
                {randomStats.map((stat, idx) => (
                  <li key={idx}><strong>{stat.label}:</strong> {stat.value}</li>
                ))}
              </ul>
              <h3 style={{ color: COLOR_ACCENT, marginTop: 24, fontWeight: 700 }}>Popularidad de Camisetas</h3>
              <div className="chart-anim" style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataPopularidad}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis dataKey="name" stroke={COLOR_BAR2} />
                    <YAxis allowDecimals={false} stroke={COLOR_BAR2} />
                    <Tooltip
                      contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }}
                      formatter={(value, name) => [
                        <span style={{ color: COLOR_BAR2, fontWeight: "bold" }}>{value}</span>,
                        name === "clicks"
                          ? <span style={{ color: COLOR_BAR2, fontWeight: "bold" }}>Clicks</span>
                          : name
                      ]}
                      labelStyle={{ color: COLOR_CONTRAST }}
                    />
                    <Legend />
                    <Bar dataKey="clicks">
                      {dataPopularidad.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <h3 style={{ color: COLOR_ACCENT, marginTop: 24, fontWeight: 700 }}>Usuarios por Mes</h3>
              <div className="chart-anim" style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer width="100%" height={200}>
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
              <h3 style={{ color: COLOR_ACCENT, marginTop: 24, fontWeight: 700 }}>Estado de Reportes</h3>
              <div
                className="chart-anim estado-reportes-container"
                style={{
                  width: "100%",
                  maxWidth: 420,
                  margin: "0 auto",
                  background: "#23233a",
                  borderRadius: 14,
                  padding: width < 600 ? 12 : 24,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 4px 24px rgba(255,223,44,0.10)",
                  minHeight: width < 600 ? 220 : 180,
                  height: "auto"
                }}
              >
                <ResponsiveContainer width="100%" height={width < 600 ? 180 : 220}>
                  <BarChart
                    data={dataReportes}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                    barCategoryGap={width < 600 ? 24 : 12}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#fff2" />
                    <XAxis type="number" stroke={COLOR_CONTRAST} allowDecimals={false} />
                    <YAxis type="category" dataKey="name" stroke={COLOR_CONTRAST} width={100} />
                    <Tooltip contentStyle={{ background: COLOR_CARD, color: COLOR_CONTRAST, border: "none" }} />
                    <Bar dataKey="value">
                      {dataReportes.map((entry, index) => (
                        <Cell key={`cell-bar-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
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
        .dashboard-download-btn:hover,
        .dashboard-download-btn:focus {
          background: #ffe95c !important;
          color: #181818 !important;
          border: 2px solid #181818 !important;
          outline: none;
          transform: translateY(-2px) scale(1.03);
        }
        .dashboard-menu li:hover {
          background: #23233a22;
          color: ${COLOR_ACCENT};
        }
        .dashboard-aside {
          backdrop-filter: blur(12px);
          border-right: 2px solid rgba(255,255,255,0.06);
        }
        .dashboard-main {
          animation: fadeInUp 0.8s;
        }
        @media (max-width: 1100px) {
          .dashboard-root {
            flex-direction: column !important;
          }
          .dashboard-aside {
            width: 100% !important;
            min-height: unset !important;
            box-shadow: none !important;
            padding: 14px 10px !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          .dashboard-menu {
            flex-direction: row !important;
            gap: 10px !important;
          }
          .dashboard-main {
            padding: 18px !important;
          }
        }
        @media (max-width: 700px) {
          .dashboard-main {
            padding: 8px !important;
          }
          .chart-anim, .dashboard-card, .dashboard-section {
            padding: 8px !important;
          }
          h1, h2, h3 {
            font-size: 1em !important;
          }
          ul, li, p {
            font-size: 0.97em !important;
          }
          .dashboard-download-btn {
            font-size: 1em !important;
            padding: 12px 0 !important;
            width: 100%;
            margin-left: 0 !important;
          }
          .dashboard-aside {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 8px 4px !important;
          }
          .dashboard-menu {
            flex-direction: row !important;
            width: 100%;
            justify-content: space-around !important;
            gap: 0 !important;
          }
        }
        `}
      </style>
      <div className="dashboard-root" style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        flexDirection: "row"
      }}>
        <aside className="dashboard-aside" style={{
          width: 220,
          background: "rgba(35,35,58,0.92)",
          color: COLOR_CONTRAST,
          padding: 28,
          minHeight: "100vh",
          boxShadow: "2px 0 18px rgba(0,0,0,0.28)",
          transition: "all 0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}>
          {/* Botón para ir a Home */}
          <button
            style={{
              marginBottom: 18,
              padding: "10px 24px",
              borderRadius: 10,
              background: COLOR_BAR2,
              color: "#222",
              fontWeight: 700,
              border: "none",
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 12px #61dafb33",
              transition: "background 0.18s, color 0.18s"
            }}
            onClick={() => navigate("/")}
          >
            Ir a Home
          </button>
          <h2 style={{
            color: COLOR_ACCENT,
            margin: 0,
            fontWeight: 900,
            fontSize: 28,
            letterSpacing: 1,
            textShadow: "0 2px 8px #0008"
          }}>Admin</h2>
          <ul className="dashboard-menu" style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            margin: 0,
            width: "100%"
          }}>
            {["Home", "Panel", "Usuarios", "Reportes"].map(section => (
              <li
                key={section}
                style={getMenuStyle(section)}
                onClick={() => setActiveSection(section)}
                tabIndex={0}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {icons[section]} <span>{section}</span>
              </li>
            ))}
          </ul>
        </aside>
        <main className="dashboard-main" style={{
          flex: 1,
          background: COLOR_BG,
          padding: 36,
          minHeight: "100vh",
          transition: "padding 0.3s"
        }}>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;