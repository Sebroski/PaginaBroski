import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const services = [
    {
        id: 1, emoji: '📦', title: 'Gestión de Compra en Origen',
        description: 'Inspección técnica en Miami y verificación de títulos (Clean Title) antes del embarque.',
        price: 'Consultar',
    },
    {
        id: 2, emoji: '🚢', title: 'Consolidación espacio en Container',
        description: 'Optimización de espacio para maximizar la inversión (ej: 1 bote + 2-3 jet skis + maquinaria menor).',
        price: 'Consultar',
    },
    {
        id: 3, emoji: '📋', title: 'Inspección Pre-Importación',
        description: 'Coordinación con el Club de Automóviles Antiguos de Chile para el informe técnico obligatorio.',
        price: 'Consultar',
    },
    {
        id: 4, emoji: '⚓', title: 'Tránsito Seguro y Desaduanaje',
        description: 'Manejo de la Declaración de Ingreso (DIN) y pago de aranceles (6%) e IVA (19%) en puertos como San Antonio o Valparaíso.',
        price: 'Consultar',
    },
]

const sectionContent = {
    about: {
        title: 'Sobre Nuestros Servicios',
        content: `Ofrecemos una amplia gama de servicios profesionales diseñados para satisfacer las necesidades más exigentes de nuestros clientes.\n\nCada servicio es ejecutado por profesionales altamente cualificados con años de experiencia en el sector.\n\nNuestro compromiso es brindar resultados de la más alta calidad, siempre dentro de los plazos establecidos y con total transparencia en cada proceso.`,
    },
    process: {
        title: 'Nuestro Proceso',
        content: `1. CONSULTA INICIAL:\nRealizamos una evaluación completa de tus necesidades.\n\n2. PROPUESTA:\nElaboramos una propuesta detallada con tiempos y costos.\n\n3. EJECUCIÓN:\nNuestro equipo profesional ejecuta el proyecto.\n\n4. ENTREGA:\nEntregamos el resultado final con garantía de calidad.`,
    },
    quality: {
        title: 'Garantía de Calidad',
        content: `• 100% de satisfacción garantizada\n• Profesionales certificados\n• Materiales de primera calidad\n• Seguimiento post-servicio\n• Presupuestos sin compromiso\n• Atención personalizada 24/7`,
    },
}

export default function ServicesPage() {
    const [activeSection, setActiveSection] = useState('about')
    const navigate = useNavigate()

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Floating Shapes */}
            <ul className="background-shapes">
                {[...Array(10)].map((_, i) => <li key={i} />)}
            </ul>

            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <section className="services-header">
                    <h1 className="animate-fade-in-up services-title">
                        Nuestros <span className="text-gradient">Servicios</span>
                    </h1>
                    <p className="services-subtitle">
                        Conoce nuestra amplia gama de servicios profesionales. Somos expertos
                        comprometidos con la excelencia.
                    </p>
                </section>

                {/* Service Cards Grid */}
                <section className="services-grid-section">
                    <div className="services-grid">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className="animate-fade-in-up service-card"
                                style={{
                                    animationDelay: `${idx * 0.1}s`,
                                    animationFillMode: 'both',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)'
                                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.35)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                <div className="service-card-header">
                                    <div className="service-icon">
                                        {service.emoji}
                                    </div>
                                    <span className="service-price">
                                        {service.price}
                                    </span>
                                </div>
                                <h3 className="service-card-title">
                                    {service.title}
                                </h3>
                                <p className="service-card-desc">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* More Info Section (tabbed) */}
                <section className="services-tabs-section">
                    <div className="services-tabs">
                        {Object.entries(sectionContent).map(([key, val]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`services-tab ${activeSection === key ? 'active' : ''}`}
                            >
                                {val.title}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="services-content-section">
                    <div className="services-content-card">
                        <h2 className="services-content-title">
                            {sectionContent[activeSection].title}
                        </h2>
                        <div className="services-content-text">
                            {sectionContent[activeSection].content}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="services-cta-section">
                    <div className="services-cta-card">
                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>
                            ¿Listo para Cotizar?
                        </h3>
                        <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9 }}>
                            Únete a cientos de clientes que ya confían en nosotros
                        </p>
                        <div className="services-cta-buttons">
                            <button
                                onClick={() => navigate('/#cotizar')}
                                className="cta-primary-btn"
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)'
                                    e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            >
                                Cotizar Ahora
                            </button>
                            <button
                                onClick={() => navigate('/galeria')}
                                className="cta-secondary-btn"
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'white'
                                    e.target.style.color = 'var(--color-accent)'
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent'
                                    e.target.style.color = 'white'
                                }}
                            >
                                Ver Galería
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Responsive */}
            <style>{`
                .services-header {
                    padding: 60px 120px 30px;
                    text-align: center;
                }
                .services-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .services-subtitle {
                    font-size: 16px;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                .services-grid-section {
                    padding: 40px 120px 60px;
                }
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 28px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .service-card {
                    background-color: var(--color-dark-card);
                    border-radius: 20px;
                    padding: 35px;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .service-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                    gap: 12px;
                }
                .service-icon {
                    width: 56px;
                    height: 56px;
                    min-width: 56px;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                }
                .service-price {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--color-accent-light);
                    background: var(--color-accent-glow);
                    padding: 6px 14px;
                    border-radius: 20px;
                    white-space: nowrap;
                }
                .service-card-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 12px;
                }
                .service-card-desc {
                    font-size: 15px;
                    color: var(--color-text-muted);
                    line-height: 1.7;
                }
                .services-tabs-section {
                    padding: 0 120px 30px;
                }
                .services-tabs {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 40px;
                }
                .services-tab {
                    background-color: var(--color-dark-card);
                    color: var(--color-text-secondary);
                    border: none;
                    padding: 12px 24px;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-family: var(--font-body);
                }
                .services-tab:hover {
                    background-color: var(--color-dark-card-hover);
                }
                .services-tab.active {
                    background-color: var(--color-accent);
                    color: white;
                }
                .services-tab.active:hover {
                    background-color: var(--color-accent);
                }
                .services-content-section {
                    padding: 0 120px 80px;
                }
                .services-content-card {
                    max-width: 900px;
                    margin: 0 auto;
                    background-color: var(--color-dark-card);
                    border-radius: 20px;
                    padding: 50px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                }
                .services-content-title {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 30px;
                    border-bottom: 3px solid var(--color-accent);
                    padding-bottom: 15px;
                }
                .services-content-text {
                    font-size: 16px;
                    color: var(--color-text-secondary);
                    line-height: 1.8;
                    white-space: pre-line;
                }
                .services-cta-section {
                    text-align: center;
                    padding: 0 120px 60px;
                }
                .services-cta-card {
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    border-radius: 20px;
                    padding: 40px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .services-cta-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .cta-primary-btn {
                    background-color: white;
                    color: var(--color-accent);
                    padding: 15px 30px;
                    border: none;
                    border-radius: 30px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: var(--font-body);
                }
                .cta-secondary-btn {
                    background-color: transparent;
                    color: white;
                    padding: 15px 30px;
                    border: 2px solid white;
                    border-radius: 30px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: var(--font-body);
                }

                /* ===== TABLET ===== */
                @media (max-width: 1366px) {
                    .services-header { padding: 50px 80px 25px; }
                    .services-grid-section { padding: 30px 80px 50px; }
                    .services-tabs-section { padding: 0 80px 25px; }
                    .services-content-section { padding: 0 80px 60px; }
                    .services-cta-section { padding: 0 80px 50px; }
                }

                @media (max-width: 1024px) {
                    .services-header { padding: 40px 50px 20px; }
                    .services-title { font-size: 30px; }
                    .services-grid-section { padding: 25px 50px 40px; }
                    .services-grid {
                        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                        gap: 20px;
                    }
                    .service-card { padding: 28px; }
                    .services-tabs-section { padding: 0 50px 20px; }
                    .services-content-section { padding: 0 50px 50px; }
                    .services-content-card { padding: 35px; }
                    .services-content-title { font-size: 24px; }
                    .services-cta-section { padding: 0 50px 40px; }
                }

                /* ===== MOBILE ===== */
                @media (max-width: 768px) {
                    .services-header { padding: 30px 25px 15px; }
                    .services-title { font-size: 26px; }
                    .services-subtitle { font-size: 14px; }
                    .services-grid-section { padding: 20px 25px 30px; }
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .service-card {
                        padding: 24px;
                        border-radius: 16px;
                    }
                    .service-icon {
                        width: 48px;
                        height: 48px;
                        min-width: 48px;
                        font-size: 24px;
                        border-radius: 14px;
                    }
                    .service-price {
                        font-size: 12px;
                        padding: 5px 12px;
                    }
                    .service-card-title { font-size: 18px; }
                    .service-card-desc { font-size: 14px; }
                    .services-tabs-section { padding: 0 25px 15px; }
                    .services-tabs {
                        gap: 8px;
                        margin-bottom: 25px;
                    }
                    .services-tab {
                        padding: 10px 16px;
                        font-size: 12px;
                    }
                    .services-content-section { padding: 0 25px 40px; }
                    .services-content-card {
                        padding: 25px 20px;
                        border-radius: 16px;
                    }
                    .services-content-title { font-size: 20px; margin-bottom: 20px; }
                    .services-content-text { font-size: 14px; }
                    .services-cta-section { padding: 0 25px 40px; }
                    .services-cta-card {
                        padding: 30px 25px;
                        border-radius: 16px;
                    }
                    .services-cta-card h3 { font-size: 20px !important; }
                    .services-cta-card p { font-size: 14px !important; }
                    .cta-primary-btn, .cta-secondary-btn {
                        padding: 12px 24px;
                        font-size: 14px;
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    .services-header { padding: 25px 20px 12px; }
                    .services-title { font-size: 22px; }
                    .services-grid-section { padding: 15px 20px 25px; }
                    .service-card { padding: 20px; }
                    .services-tabs-section { padding: 0 20px 12px; }
                    .services-tab { padding: 8px 14px; font-size: 11px; }
                    .services-content-section { padding: 0 20px 30px; }
                    .services-content-card { padding: 20px 16px; }
                    .services-cta-section { padding: 0 20px 30px; }
                    .services-cta-card { padding: 25px 20px; }
                }
            `}</style>
        </div>
    )
}
