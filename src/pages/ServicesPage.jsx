import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const services = [
    {
        id: 1, emoji: '🔧', title: 'Servicio Profesional 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 'Desde $50.000',
    },
    {
        id: 2, emoji: '🎨', title: 'Servicio Profesional 2',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 'Desde $80.000',
    },
    {
        id: 3, emoji: '💡', title: 'Servicio Profesional 3',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 'Desde $120.000',
    },
    {
        id: 4, emoji: '📐', title: 'Servicio Profesional 4',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 'Desde $95.000',
    },
    {
        id: 5, emoji: '🏗️', title: 'Servicio Profesional 5',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: 'Desde $150.000',
    },
    {
        id: 6, emoji: '✨', title: 'Servicio Profesional 6',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
        price: 'Desde $75.000',
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
                <section style={{ padding: '60px 120px 30px', textAlign: 'center' }}>
                    <h1
                        className="animate-fade-in-up"
                        style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px' }}
                    >
                        Nuestros <span className="text-gradient">Servicios</span>
                    </h1>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--color-text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Conoce nuestra amplia gama de servicios profesionales. Somos expertos
                        comprometidos con la excelencia.
                    </p>
                </section>

                {/* Service Cards Grid */}
                <section style={{ padding: '40px 120px 60px' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '28px',
                            maxWidth: '1400px',
                            margin: '0 auto',
                        }}
                    >
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className="animate-fade-in-up"
                                style={{
                                    backgroundColor: 'var(--color-dark-card)',
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <div
                                        style={{
                                            width: '56px',
                                            height: '56px',
                                            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '28px',
                                        }}
                                    >
                                        {service.emoji}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: 'var(--color-accent-light)',
                                            background: 'var(--color-accent-glow)',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                        }}
                                    >
                                        {service.price}
                                    </span>
                                </div>
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        marginBottom: '12px',
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--color-text-muted)',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* More Info Section (tabbed like reference About page) */}
                <section style={{ padding: '0 120px 30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                        {Object.entries(sectionContent).map(([key, val]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                style={{
                                    backgroundColor: activeSection === key
                                        ? 'var(--color-accent)' : 'var(--color-dark-card)',
                                    color: activeSection === key ? 'white' : 'var(--color-text-secondary)',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeSection !== key) e.target.style.backgroundColor = 'var(--color-dark-card-hover)'
                                }}
                                onMouseLeave={(e) => {
                                    if (activeSection !== key) e.target.style.backgroundColor = 'var(--color-dark-card)'
                                }}
                            >
                                {val.title}
                            </button>
                        ))}
                    </div>
                </section>

                <section style={{ padding: '0 120px 80px' }}>
                    <div
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            backgroundColor: 'var(--color-dark-card)',
                            borderRadius: '20px',
                            padding: '50px',
                            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                marginBottom: '30px',
                                borderBottom: '3px solid var(--color-accent)',
                                paddingBottom: '15px',
                            }}
                        >
                            {sectionContent[activeSection].title}
                        </h2>
                        <div
                            style={{
                                fontSize: '16px',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.8,
                                whiteSpace: 'pre-line',
                            }}
                        >
                            {sectionContent[activeSection].content}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{ textAlign: 'center', padding: '0 120px 60px' }}>
                    <div
                        style={{
                            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>
                            ¿Listo para Cotizar?
                        </h3>
                        <p style={{ fontSize: '16px', marginBottom: '25px', opacity: 0.9 }}>
                            Únete a cientos de clientes que ya confían en nosotros
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => navigate('/#cotizar')}
                                style={{
                                    backgroundColor: 'white',
                                    color: 'var(--color-accent)',
                                    padding: '15px 30px',
                                    border: 'none',
                                    borderRadius: '30px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
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
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    padding: '15px 30px',
                                    border: '2px solid white',
                                    borderRadius: '30px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
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
                @media (max-width: 1366px) {
                    section { padding-left: 80px !important; padding-right: 80px !important; }
                }
                @media (max-width: 1024px) {
                    section { padding-left: 50px !important; padding-right: 50px !important; }
                }
                @media (max-width: 768px) {
                    section { padding-left: 25px !important; padding-right: 25px !important; }
                }
            `}</style>
        </div>
    )
}
