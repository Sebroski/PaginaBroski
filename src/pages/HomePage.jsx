import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const servicesOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'servicio-1', label: 'Servicio Profesional 1' },
    { value: 'servicio-2', label: 'Servicio Profesional 2' },
    { value: 'servicio-3', label: 'Servicio Profesional 3' },
    { value: 'servicio-4', label: 'Servicio Profesional 4' },
    { value: 'servicio-5', label: 'Servicio Profesional 5' },
    { value: 'servicio-6', label: 'Servicio Profesional 6' },
]

// Placeholder carousel images (gradient backgrounds)
const carouselImages = [
    'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #8b5cf6 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 50%, #2563eb 100%)',
    'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #8b5cf6 100%)',
    'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #3b82f6 100%)',
    'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #a78bfa 100%)',
]

export default function HomePage() {
    const navigate = useNavigate()
    const [scrollY, setScrollY] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [formData, setFormData] = useState({
        nombre: '', correo: '', telefono: '', servicio: '', presupuesto: '',
    })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Floating Background Shapes */}
            <ul className="background-shapes">
                {[...Array(10)].map((_, i) => (
                    <li key={i} />
                ))}
            </ul>

            {/* Content Wrapper */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>

                {/* ==================== HERO SECTION ==================== */}
                <section
                    style={{
                        position: 'relative',
                        height: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '150px',
                        overflow: 'hidden',
                        maxWidth: '2560px',
                        margin: '0 auto',
                        transform: `translateY(${scrollY * 0.15}px)`,
                    }}
                >
                    {/* Hero background image placeholder (left side) */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `
                                radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
                                radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1,
                        }}
                    />
                    {/* Large decorative element on the left */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '8%',
                            transform: 'translateY(-50%)',
                            width: '380px',
                            height: '380px',
                            borderRadius: '30px',
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%)',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '120px',
                            zIndex: 2,
                        }}
                    >
                        ⚡
                    </div>

                    {/* Hero Content (right side) */}
                    <div
                        className="animate-fade-in-up"
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            textAlign: 'center',
                            maxWidth: '550px',
                            marginRight: '80px',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '52px',
                                fontWeight: 700,
                                color: 'var(--color-text-primary)',
                                marginBottom: '50px',
                                lineHeight: 1.2,
                            }}
                        >
                            Si buscas el mejor producto o servicio,{' '}
                            <span className="text-gradient">nosotros somos los mejores</span>
                        </h1>
                        <button onClick={() => navigate('/servicios')} className="pill-btn">
                            VER SERVICIOS
                        </button>
                    </div>
                </section>

                {/* ==================== CONTENT SECTION ==================== */}
                <section
                    style={{
                        display: 'flex',
                        gap: '80px',
                        padding: '120px 120px 90px',
                        alignItems: 'flex-start',
                        maxWidth: '2560px',
                        margin: '0 auto',
                    }}
                >
                    {/* Image Container */}
                    <div
                        style={{
                            flex: '0 0 500px',
                            height: '320px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(139, 92, 246, 0.2) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                        }}
                    >
                        🏢
                    </div>

                    {/* Text Content */}
                    <div style={{ flex: 1, paddingTop: '15px' }}>
                        <h2
                            style={{
                                fontSize: '34px',
                                fontWeight: 700,
                                color: 'var(--color-text-primary)',
                                marginBottom: '35px',
                                lineHeight: 1.3,
                            }}
                        >
                            ¡Nuestros Servicios Pueden Ser{' '}
                            <span className="text-gradient">Tuyos!</span>
                        </h2>
                        <p
                            style={{
                                fontSize: '18px',
                                lineHeight: 1.9,
                                color: 'var(--color-text-secondary)',
                                marginBottom: '28px',
                                textAlign: 'justify',
                                fontWeight: 400,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <p
                            style={{
                                fontSize: '18px',
                                lineHeight: 1.9,
                                color: 'var(--color-text-secondary)',
                                fontWeight: 400,
                                textAlign: 'justify',
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>
                </section>

                {/* ==================== ACTION BUTTONS ==================== */}
                <section
                    style={{
                        display: 'flex',
                        gap: '28px',
                        padding: '0 120px 70px',
                        flexWrap: 'wrap',
                        maxWidth: '2560px',
                        margin: '0 auto',
                    }}
                >
                    {['UBICACIÓN', 'DETALLES', 'MÁS INFO', 'CONTACTO'].map((label) => (
                        <button
                            key={label}
                            className="pill-btn"
                            style={{ minWidth: '190px' }}
                            onClick={() => { }}
                        >
                            {label}
                        </button>
                    ))}
                </section>

                {/* ==================== CAROUSEL SECTION ==================== */}
                <section
                    style={{
                        padding: '70px 120px 60px',
                        maxWidth: '2560px',
                        margin: '0 auto',
                    }}
                >
                    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                        <div className="carousel-wrapper">
                            <button className="carousel-btn prev" onClick={prevSlide}>
                                ‹
                            </button>
                            <div
                                className="carousel-track"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselImages.map((bg, i) => (
                                    <div
                                        key={i}
                                        className="carousel-slide"
                                        style={{
                                            background: bg,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '48px',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontWeight: 700,
                                        }}
                                    >
                                        Imagen {i + 1}
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-btn next" onClick={nextSlide}>
                                ›
                            </button>
                        </div>
                        <div className="carousel-dots">
                            {carouselImages.map((_, i) => (
                                <button
                                    key={i}
                                    className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(i)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== GALLERY CTA ==================== */}
                <section
                    style={{
                        textAlign: 'center',
                        padding: '100px 120px 90px',
                        maxWidth: '2560px',
                        margin: '0 auto',
                    }}
                >
                    <button
                        onClick={() => navigate('/galeria')}
                        className="pill-btn"
                        style={{ padding: '20px 55px', fontSize: '20px' }}
                    >
                        Galería
                    </button>
                </section>

                {/* ==================== QUOTATION FORM ==================== */}
                <section
                    id="cotizar"
                    style={{
                        padding: '80px 120px',
                        maxWidth: '2560px',
                        margin: '0 auto',
                    }}
                >
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2
                                style={{
                                    fontSize: '36px',
                                    fontWeight: 700,
                                    marginBottom: '20px',
                                }}
                            >
                                Cotiza <span className="text-gradient">Ahora</span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--color-text-muted)',
                                    maxWidth: '600px',
                                    margin: '0 auto',
                                }}
                            >
                                Completa el formulario para recibir tu cotización personalizada.
                                Todos tus datos son confidenciales.
                            </p>
                        </div>

                        {submitted ? (
                            <div
                                style={{
                                    backgroundColor: 'var(--color-dark-card)',
                                    borderRadius: '20px',
                                    padding: '60px 40px',
                                    textAlign: 'center',
                                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 30px',
                                        fontSize: '40px',
                                        color: 'white',
                                    }}
                                >
                                    ✓
                                </div>
                                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '15px' }}>
                                    ¡Solicitud Enviada!
                                </h3>
                                <p style={{ fontSize: '16px', color: 'var(--color-text-muted)' }}>
                                    Te contactaremos pronto con tu cotización personalizada.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    backgroundColor: 'var(--color-dark-card)',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        marginBottom: '25px',
                                        borderBottom: '3px solid var(--color-accent)',
                                        paddingBottom: '10px',
                                    }}
                                >
                                    Información de Contacto
                                </h3>

                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: '20px',
                                        marginBottom: '24px',
                                    }}
                                >
                                    <div>
                                        <label className="form-label">Nombre Completo *</label>
                                        <input
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Ingresa tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Correo Electrónico *</label>
                                        <input
                                            name="correo"
                                            type="email"
                                            value={formData.correo}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="ejemplo@correo.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Teléfono *</label>
                                        <input
                                            name="telefono"
                                            type="tel"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="+56 9 1234 5678"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Servicio a Cotizar *</label>
                                        <select
                                            name="servicio"
                                            value={formData.servicio}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        >
                                            {servicesOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '30px' }}>
                                    <label className="form-label">Presupuesto Estimado</label>
                                    <input
                                        name="presupuesto"
                                        value={formData.presupuesto}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="Ej: $500.000 - $1.000.000"
                                    />
                                </div>

                                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <button type="submit" className="pill-btn">
                                        ENVIAR COTIZACIÓN
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData({ nombre: '', correo: '', telefono: '', servicio: '', presupuesto: '' })
                                        }
                                        style={{
                                            background: 'var(--color-dark-border)',
                                            color: 'var(--color-text-secondary)',
                                            padding: '16px 36px',
                                            border: 'none',
                                            borderRadius: '28px',
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        LIMPIAR
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </div>

            {/* Scroll-to-Top Button */}
            {scrollY > 300 && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '25px',
                        right: '25px',
                        zIndex: 1000,
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)',
                        color: '#fff',
                        fontSize: '24px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    ^
                </button>
            )}

            {/* Responsive styles */}
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
