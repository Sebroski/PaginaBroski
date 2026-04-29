import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import imgInterior1 from '../assets/img/IMG_2959.jpeg'
import imgCargo from '../assets/img/IMG_5451.jpeg'
import imgCargoPersona from '../assets/img/IMG_5453.jpeg'
import imgInterior2 from '../assets/img/c4e498f1-9b4d-42a7-a910-c797910c92b8.jpeg'

const servicesOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'servicio-1', label: 'Servicio Profesional 1' },
    { value: 'servicio-2', label: 'Servicio Profesional 2' },
    { value: 'servicio-3', label: 'Servicio Profesional 3' },
    { value: 'servicio-4', label: 'Servicio Profesional 4' },
    { value: 'servicio-5', label: 'Servicio Profesional 5' },
    { value: 'servicio-6', label: 'Servicio Profesional 6' },
]

const reviews = [
    {
        name: 'Carlos Mendoza',
        image: imgCargoPersona,
        rating: 5,
        text: '¡Excelente servicio! Me ayudaron con todo el proceso de envío de principio a fin. La atención fue de primera y mis paquetes llegaron en perfecto estado. Sin duda los volvería a elegir.',
    },
    {
        name: 'María Fernández',
        image: imgCargo,
        rating: 4.5,
        text: 'Muy profesionales y confiables. El seguimiento fue constante y siempre estuvieron disponibles para resolver mis dudas. La entrega fue puntual y todo llegó como esperaba.',
    },
    {
        name: 'Andrés Gutiérrez',
        image: imgInterior1,
        rating: 4,
        text: 'Buen servicio en general. Los vehículos están en excelentes condiciones y el equipo es muy amable. Los precios son competitivos comparados con otras opciones del mercado.',
    },
    {
        name: 'Laura Rodríguez',
        image: imgInterior2,
        rating: 3.5,
        text: 'Cumplieron con lo prometido. El proceso fue sencillo y la comunicación fue clara. Los recomiendo para quien necesite un servicio serio y responsable.',
    },
]

// Star renderer helper
function StarRating({ rating }) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<span key={i} className="review-star full">★</span>)
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars.push(<span key={i} className="review-star half">★</span>)
        } else {
            stars.push(<span key={i} className="review-star empty">★</span>)
        }
    }
    return <div className="review-stars">{stars}</div>
}

export default function HomePage() {
    const navigate = useNavigate()
    const [scrollY, setScrollY] = useState(0)
    const [currentReview, setCurrentReview] = useState(0)
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
            setCurrentReview((prev) => (prev + 1) % reviews.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length)
    const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)

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
                <section className="hero-section">
                    {/* Hero background */}
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
                    <div className="hero-decorative">
                        ⚡
                    </div>

                    {/* Hero Content */}
                    <div className="hero-content animate-fade-in-up">
                        <h1 className="hero-title">
                            Si buscas el mejor producto o servicio,{' '}
                            <span className="text-gradient">nosotros somos los mejores</span>
                        </h1>
                        <button onClick={() => navigate('/servicios')} className="pill-btn">
                            VER SERVICIOS
                        </button>
                    </div>
                </section>

                {/* ==================== CONTENT SECTION ==================== */}
                <section className="content-section">
                    {/* Image Container */}
                    <div className="content-image">
                        🏢
                    </div>

                    {/* Text Content */}
                    <div className="content-text">
                        <h2 className="content-title">
                            ¡Nuestros Servicios Pueden Ser{' '}
                            <span className="text-gradient">Tuyos!</span>
                        </h2>
                        <p className="content-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <p className="content-paragraph">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>
                </section>

                {/* ==================== ACTION BUTTONS ==================== */}
                <section className="action-buttons-section">
                    {['UBICACIÓN', 'DETALLES', 'MÁS INFO', 'CONTACTO'].map((label) => (
                        <button
                            key={label}
                            className="pill-btn action-btn"
                            onClick={() => { }}
                        >
                            {label}
                        </button>
                    ))}
                </section>

                {/* ==================== RESEÑAS SECTION ==================== */}
                <section className="reviews-section">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 className="reviews-title">
                                Lo Que Dicen Nuestros{' '}
                                <span className="text-gradient">Clientes</span>
                            </h2>
                            <p className="reviews-subtitle">
                                Descubre por qué somos la opción preferida de cientos de clientes satisfechos.
                            </p>
                        </div>
                        <div className="review-carousel-wrapper">
                            <button className="review-carousel-btn prev" onClick={prevReview}>‹</button>
                            <div className="review-carousel-viewport">
                                {reviews.map((review, i) => (
                                    <div
                                        key={i}
                                        className={`review-card ${i === currentReview ? 'active' : ''}`}
                                        style={{
                                            opacity: i === currentReview ? 1 : 0,
                                            transform: i === currentReview ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                                            pointerEvents: i === currentReview ? 'auto' : 'none',
                                        }}
                                    >
                                        <div className="review-card-inner">
                                            <div className="review-card-image">
                                                <img src={review.image} alt={`Reseña de ${review.name}`} />
                                                <div className="review-card-image-overlay" />
                                            </div>
                                            <div className="review-card-body">
                                                <StarRating rating={review.rating} />
                                                <p className="review-text">"{review.text}"</p>
                                                <div className="review-author">
                                                    <div className="review-author-avatar">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="review-author-name">{review.name}</p>
                                                        <p className="review-author-label">Cliente verificado</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="review-carousel-btn next" onClick={nextReview}>›</button>
                        </div>
                        <div className="review-dots">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    className={`review-dot ${i === currentReview ? 'active' : ''}`}
                                    onClick={() => setCurrentReview(i)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== GALLERY CTA ==================== */}
                <section className="gallery-cta-section">
                    <button
                        onClick={() => navigate('/galeria')}
                        className="pill-btn gallery-cta-btn"
                    >
                        Galería
                    </button>
                </section>

                {/* ==================== QUOTATION FORM ==================== */}
                <section id="cotizar" className="form-section">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 className="form-title">
                                Cotiza <span className="text-gradient">Ahora</span>
                            </h2>
                            <p className="form-subtitle">
                                Completa el formulario para recibir tu cotización personalizada.
                                Todos tus datos son confidenciales.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="form-success">
                                <div className="form-success-icon">
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
                            <form onSubmit={handleSubmit} className="form-card">
                                <h3 className="form-card-title">
                                    Información de Contacto
                                </h3>

                                <div className="form-grid">
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
                                        className="pill-btn-secondary"
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
                    className="scroll-top-btn"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    ^
                </button>
            )}

            {/* Responsive styles */}
            <style>{`
                .hero-section {
                    position: relative;
                    height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding-right: 150px;
                    overflow: hidden;
                    max-width: 2560px;
                    margin: 0 auto;
                    transform: translateY(${scrollY * 0.15}px);
                }
                .hero-decorative {
                    position: absolute;
                    top: 50%;
                    left: 8%;
                    transform: translateY(-50%);
                    width: 380px;
                    height: 380px;
                    border-radius: 30px;
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%);
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 120px;
                    z-index: 2;
                }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    max-width: 550px;
                    margin-right: 80px;
                }
                .hero-title {
                    font-size: 52px;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 50px;
                    line-height: 1.2;
                }
                .content-section {
                    display: flex;
                    gap: 80px;
                    padding: 120px 120px 90px;
                    align-items: flex-start;
                    max-width: 2560px;
                    margin: 0 auto;
                }
                .content-image {
                    flex: 0 0 500px;
                    height: 320px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(139, 92, 246, 0.2) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 64px;
                }
                .content-text {
                    flex: 1;
                    padding-top: 15px;
                }
                .content-title {
                    font-size: 34px;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 35px;
                    line-height: 1.3;
                }
                .content-paragraph {
                    font-size: 18px;
                    line-height: 1.9;
                    color: var(--color-text-secondary);
                    margin-bottom: 28px;
                    text-align: justify;
                    font-weight: 400;
                }
                .content-paragraph:last-child {
                    margin-bottom: 0;
                }
                .action-buttons-section {
                    display: flex;
                    gap: 28px;
                    padding: 0 120px 70px;
                    flex-wrap: wrap;
                    max-width: 2560px;
                    margin: 0 auto;
                }
                .action-btn {
                    min-width: 190px;
                }
                .reviews-section {
                    padding: 70px 120px 60px;
                    max-width: 2560px;
                    margin: 0 auto;
                }
                .reviews-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 18px;
                }
                .reviews-subtitle {
                    font-size: 16px;
                    color: var(--color-text-muted);
                    max-width: 550px;
                    margin: 0 auto;
                }
                .review-carousel-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .review-carousel-viewport {
                    position: relative;
                    width: 100%;
                    min-height: 480px;
                }
                .review-carousel-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(37, 99, 235, 0.7);
                    color: #fff;
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 26px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    font-family: var(--font-body);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .review-carousel-btn:hover {
                    background: rgba(37, 99, 235, 0.95);
                    transform: translateY(-50%) scale(1.1);
                }
                .review-carousel-btn.prev { left: -25px; }
                .review-carousel-btn.next { right: -25px; }
                .review-card {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .review-card-inner {
                    background: var(--color-dark-card);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 12px 35px rgba(0,0,0,0.3);
                    border: 1px solid var(--color-dark-border);
                    display: flex;
                    flex-direction: row;
                }
                .review-card-image {
                    position: relative;
                    flex: 0 0 380px;
                    min-height: 380px;
                    overflow: hidden;
                }
                .review-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .review-card-image-overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 50%;
                    background: linear-gradient(to left, var(--color-dark-card) 0%, transparent 100%);
                    pointer-events: none;
                }
                .review-card-body {
                    flex: 1;
                    padding: 40px 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .review-stars {
                    display: flex;
                    gap: 3px;
                    margin-bottom: 18px;
                }
                .review-star {
                    font-size: 22px;
                    line-height: 1;
                }
                .review-star.full {
                    color: #f59e0b;
                }
                .review-star.half {
                    color: #f59e0b;
                    opacity: 0.55;
                }
                .review-star.empty {
                    color: var(--color-dark-border);
                }
                .review-text {
                    font-size: 16px;
                    line-height: 1.85;
                    color: var(--color-text-secondary);
                    margin-bottom: 28px;
                    font-style: italic;
                }
                .review-author {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding-top: 20px;
                    border-top: 1px solid var(--color-dark-border);
                }
                .review-author-avatar {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 20px;
                    color: #fff;
                    flex-shrink: 0;
                }
                .review-author-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--color-text-primary);
                }
                .review-author-label {
                    font-size: 12px;
                    color: var(--color-accent-soft);
                    margin-top: 3px;
                }
                .review-dots {
                    display: flex;
                    justify-content: center;
                    gap: 14px;
                    margin-top: 28px;
                }
                .review-dot {
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    border: none;
                    background-color: rgba(37,99,235,0.25);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .review-dot.active {
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    transform: scale(1.25);
                }
                .review-dot:hover {
                    background-color: var(--color-accent-light);
                }
                .gallery-cta-section {
                    text-align: center;
                    padding: 100px 120px 90px;
                    max-width: 2560px;
                    margin: 0 auto;
                }
                .gallery-cta-btn {
                    padding: 20px 55px !important;
                    font-size: 20px !important;
                }
                .form-section {
                    padding: 80px 120px;
                    max-width: 2560px;
                    margin: 0 auto;
                }
                .form-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .form-subtitle {
                    font-size: 16px;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .form-success {
                    background-color: var(--color-dark-card);
                    border-radius: 20px;
                    padding: 60px 40px;
                    text-align: center;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                }
                .form-success-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    font-size: 40px;
                    color: white;
                }
                .form-card {
                    background-color: var(--color-dark-card);
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                }
                .form-card-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    border-bottom: 3px solid var(--color-accent);
                    padding-bottom: 10px;
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                    margin-bottom: 24px;
                }
                .pill-btn-secondary {
                    background: var(--color-dark-border);
                    color: var(--color-text-secondary);
                    padding: 16px 36px;
                    border: none;
                    border-radius: 28px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-family: var(--font-body);
                }
                .pill-btn-secondary:hover {
                    background: var(--color-dark-card-hover);
                }
                .scroll-top-btn {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    z-index: 1000;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: none;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    color: #fff;
                    font-size: 24px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
                    transition: transform 0.3s ease;
                }

                /* ===== TABLET ===== */
                @media (max-width: 1366px) {
                    .hero-section { padding-right: 80px; }
                    .hero-content { margin-right: 40px; }
                    .hero-decorative { width: 300px; height: 300px; font-size: 90px; }
                    .content-section { padding: 80px 80px 60px; gap: 50px; }
                    .content-image { flex: 0 0 400px; height: 280px; }
                    .action-buttons-section { padding: 0 80px 50px; }
                    .reviews-section { padding: 50px 80px 50px; }
                    .gallery-cta-section { padding: 70px 80px 60px; }
                    .form-section { padding: 60px 80px; }
                }

                @media (max-width: 1024px) {
                    .hero-section {
                        height: 70vh;
                        justify-content: center;
                        padding-right: 50px;
                        padding-left: 50px;
                    }
                    .hero-decorative {
                        width: 220px;
                        height: 220px;
                        font-size: 70px;
                        left: 5%;
                    }
                    .hero-content { margin-right: 0; max-width: 450px; }
                    .hero-title { font-size: 40px; margin-bottom: 35px; }
                    .content-section {
                        flex-direction: column;
                        padding: 60px 50px;
                        gap: 40px;
                    }
                    .content-image {
                        flex: none;
                        width: 100%;
                        height: 280px;
                    }
                    .content-title { font-size: 28px; margin-bottom: 25px; }
                    .content-paragraph { font-size: 16px; }
                    .action-buttons-section {
                        padding: 0 50px 40px;
                        gap: 16px;
                        justify-content: center;
                    }
                    .action-btn { min-width: 160px; }
                    .reviews-section { padding: 40px 50px 40px; }
                    .gallery-cta-section { padding: 50px 50px 50px; }
                    .form-section { padding: 50px 50px; }
                    .form-title { font-size: 30px; }
                }

                /* ===== MOBILE ===== */
                @media (max-width: 768px) {
                    .hero-section {
                        height: auto;
                        min-height: 65vh;
                        flex-direction: column;
                        justify-content: center;
                        padding: 80px 25px 50px;
                    }
                    .hero-decorative {
                        display: none;
                    }
                    .hero-content {
                        max-width: 100%;
                        margin-right: 0;
                    }
                    .hero-title {
                        font-size: 30px;
                        margin-bottom: 30px;
                    }
                    .content-section {
                        flex-direction: column;
                        padding: 40px 25px;
                        gap: 30px;
                    }
                    .content-image {
                        height: 220px;
                        font-size: 48px;
                    }
                    .content-title {
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    .content-paragraph {
                        font-size: 15px;
                        line-height: 1.8;
                        text-align: left;
                    }
                    .action-buttons-section {
                        padding: 0 25px 30px;
                        gap: 12px;
                        justify-content: center;
                    }
                    .action-btn {
                        min-width: calc(50% - 8px);
                        flex: 1 1 calc(50% - 8px);
                    }
                    .reviews-section { padding: 30px 25px 30px; }
                    .reviews-title { font-size: 28px; }
                    .review-card-inner { flex-direction: column; }
                    .review-card-image { flex: none; height: 220px; min-height: auto; }
                    .review-card-image-overlay {
                        top: auto; bottom: 0; left: 0; right: 0;
                        width: 100%; height: 50%;
                        background: linear-gradient(to top, var(--color-dark-card) 0%, transparent 100%);
                    }
                    .review-carousel-viewport { min-height: 520px; }
                    .review-carousel-btn { width: 38px; height: 38px; font-size: 18px; }
                    .review-carousel-btn.prev { left: -5px; }
                    .review-carousel-btn.next { right: -5px; }
                    .review-dots { gap: 10px; margin-top: 20px; }
                    .review-dot { width: 12px; height: 12px; }
                    .gallery-cta-section { padding: 40px 25px 40px; }
                    .gallery-cta-btn {
                        padding: 16px 40px !important;
                        font-size: 16px !important;
                    }
                    .form-section { padding: 40px 25px; }
                    .form-card {
                        padding: 25px 20px;
                        border-radius: 16px;
                    }
                    .form-title { font-size: 26px; }
                    .form-subtitle { font-size: 14px; }
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .form-card-title { font-size: 18px; }
                    .pill-btn-secondary {
                        padding: 13px 26px;
                        font-size: 13px;
                    }
                    .scroll-top-btn {
                        width: 44px;
                        height: 44px;
                        bottom: 18px;
                        right: 18px;
                        font-size: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        min-height: 55vh;
                        padding: 70px 20px 40px;
                    }
                    .hero-title {
                        font-size: 25px;
                        margin-bottom: 25px;
                    }
                    .content-section { padding: 30px 20px; }
                    .content-image { height: 180px; font-size: 40px; border-radius: 18px; }
                    .content-title { font-size: 22px; }
                    .content-paragraph { font-size: 14px; }
                    .action-buttons-section { padding: 0 20px 25px; gap: 10px; }
                    .action-btn {
                        min-width: calc(50% - 6px);
                    }
                    .reviews-section { padding: 25px 20px 25px; }
                    .reviews-title { font-size: 24px; }
                    .review-card-body { padding: 18px 20px 22px; }
                    .review-text { font-size: 14px; }
                    .review-carousel-viewport { min-height: 480px; }
                    .review-card-image { height: 180px; }
                    .gallery-cta-section { padding: 30px 20px 30px; }
                    .form-section { padding: 30px 20px; }
                    .form-card { padding: 20px 16px; }
                    .form-title { font-size: 22px; }
                }
            `}</style>
        </div>
    )
}
