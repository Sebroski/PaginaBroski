import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const galleryItems = [
    { id: 1, category: 'exterior', title: 'Proyecto Exterior 1', description: 'Vista panorámica del proyecto' },
    { id: 2, category: 'interior', title: 'Diseño Interior 1', description: 'Espacio moderno y funcional' },
    { id: 3, category: 'exterior', title: 'Proyecto Exterior 2', description: 'Fachada principal renovada' },
    { id: 4, category: 'interior', title: 'Diseño Interior 2', description: 'Área de trabajo optimizada' },
    { id: 5, category: 'detalle', title: 'Detalle Premium 1', description: 'Acabados de alta calidad' },
    { id: 6, category: 'detalle', title: 'Detalle Premium 2', description: 'Materiales seleccionados' },
    { id: 7, category: 'exterior', title: 'Proyecto Exterior 3', description: 'Lateral de la propiedad' },
    { id: 8, category: 'interior', title: 'Diseño Interior 3', description: 'Iluminación natural' },
    { id: 9, category: 'detalle', title: 'Detalle Premium 3', description: 'Texturas y acabados' },
    { id: 10, category: 'exterior', title: 'Proyecto Exterior 4', description: 'Acceso principal' },
    { id: 11, category: 'interior', title: 'Diseño Interior 4', description: 'Cocina integral' },
    { id: 12, category: 'detalle', title: 'Detalle Premium 4', description: 'Instalaciones modernas' },
]

const gradientMap = {
    exterior: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    interior: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
    detalle: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
}

const categories = [
    { id: 'todas', name: 'Todas' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'detalle', name: 'Detalles' },
]

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('todas')
    const [modalItem, setModalItem] = useState(null)
    const navigate = useNavigate()

    const filtered = activeCategory === 'todas'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory)

    const openModal = (item) => setModalItem(item)
    const closeModal = () => setModalItem(null)

    const nextImage = () => {
        const idx = filtered.findIndex((i) => i.id === modalItem.id)
        setModalItem(filtered[(idx + 1) % filtered.length])
    }

    const prevImage = () => {
        const idx = filtered.findIndex((i) => i.id === modalItem.id)
        setModalItem(filtered[idx === 0 ? filtered.length - 1 : idx - 1])
    }

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') closeModal()
            if (e.key === 'ArrowRight' && modalItem) nextImage()
            if (e.key === 'ArrowLeft' && modalItem) prevImage()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [modalItem])

    const getCategoryCount = (id) =>
        id === 'todas' ? galleryItems.length : galleryItems.filter((i) => i.category === id).length

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
                        Galería de <span className="text-gradient">Proyectos</span>
                    </h1>
                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--color-text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        Explora nuestros proyectos realizados. Navega por las diferentes
                        categorías para ver todos los detalles.
                    </p>
                </section>

                {/* Category Filters */}
                <section style={{ padding: '0 120px 40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                style={{
                                    backgroundColor: activeCategory === cat.id
                                        ? 'var(--color-accent)' : 'var(--color-dark-card)',
                                    color: activeCategory === cat.id ? '#fff' : 'var(--color-text-secondary)',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '25px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeCategory !== cat.id)
                                        e.target.style.backgroundColor = 'var(--color-dark-card-hover)'
                                }}
                                onMouseLeave={(e) => {
                                    if (activeCategory !== cat.id)
                                        e.target.style.backgroundColor = 'var(--color-dark-card)'
                                }}
                            >
                                {cat.name} ({getCategoryCount(cat.id)})
                            </button>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}
                <section style={{ padding: '0 120px 80px' }}>
                    <div className="gallery-grid">
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                onClick={() => openModal(item)}
                            >
                                <div style={{ position: 'relative', paddingBottom: '75%' }}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: gradientMap[item.category],
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '48px',
                                            color: 'rgba(255,255,255,0.3)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        📷
                                    </div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                            color: 'white',
                                            padding: '20px 15px 15px',
                                        }}
                                    >
                                        <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 5px 0' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ fontSize: '14px', margin: 0, opacity: 0.9 }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>
                                No hay imágenes en esta categoría
                            </h3>
                            <p style={{ color: 'var(--color-text-dim)' }}>
                                Selecciona otra categoría para ver más proyectos
                            </p>
                        </div>
                    )}
                </section>

                {/* Back to Home CTA */}
                <section style={{ textAlign: 'center', padding: '0 120px 60px' }}>
                    <button
                        onClick={() => navigate('/')}
                        className="pill-btn"
                    >
                        VOLVER AL INICIO
                    </button>
                </section>
            </div>

            {/* MODAL */}
            {modalItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close */}
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '0',
                                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%)',
                                color: '#fff',
                                border: 'none',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                fontSize: '26px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            ×
                        </button>
                        {/* Prev */}
                        <button
                            onClick={prevImage}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(37, 99, 235, 0.7)',
                                color: '#fff',
                                border: 'none',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                fontSize: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            ‹
                        </button>
                        {/* Next */}
                        <button
                            onClick={nextImage}
                            style={{
                                position: 'absolute',
                                right: '-60px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(37, 99, 235, 0.7)',
                                color: '#fff',
                                border: 'none',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                fontSize: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            ›
                        </button>
                        {/* Image */}
                        <div
                            style={{
                                width: '70vw',
                                maxWidth: '800px',
                                height: '60vh',
                                background: gradientMap[modalItem.category],
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '80px',
                                color: 'rgba(255,255,255,0.3)',
                            }}
                        >
                            📷
                        </div>
                        {/* Caption */}
                        <div style={{ position: 'absolute', bottom: '-60px', left: 0, right: 0, textAlign: 'center', color: '#fff' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 5px 0' }}>
                                {modalItem.title}
                            </h3>
                            <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>
                                {modalItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

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
