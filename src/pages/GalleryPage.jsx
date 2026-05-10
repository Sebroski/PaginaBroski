import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const imagesContext = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,svg,webp,avif}', { eager: true });

const galleryItems = Object.keys(imagesContext)
    .filter(path => path.split('/').length > 4)
    .map((path, idx) => {
        const module = imagesContext[path];
        const url = module.default || module;
        const parts = path.split('/');
        const category = parts[3].toLowerCase();
        const filename = parts[parts.length - 1];
        
        return {
            id: idx + 1,
            category: category,
            title: filename,
            description: `Visualización de la categoría: ${category}`,
            url: url
        };
    });

const uniqueCategories = [...new Set(galleryItems.map(item => item.category))];
const categories = [
    { id: 'todas', name: 'Todas' },
    ...uniqueCategories.map(cat => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1)
    }))
];

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
                <section className="gallery-header">
                    <h1 className="animate-fade-in-up gallery-title">
                        Galería de <span className="text-gradient">Proyectos</span>
                    </h1>
                    <p className="gallery-subtitle">
                        Explora nuestros proyectos realizados. Navega por las diferentes
                        categorías para ver todos los detalles.
                    </p>
                </section>

                {/* Category Filters */}
                <section className="gallery-filters-section">
                    <div className="gallery-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            >
                                {cat.name} ({getCategoryCount(cat.id)})
                            </button>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="gallery-grid-section">
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
                                            backgroundImage: `url("${item.url}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
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
                                        <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0', textTransform: 'capitalize' }}>
                                            {item.category}
                                        </h3>
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
                <section className="gallery-back-section">
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
                    <div className="modal-content gallery-modal" onClick={(e) => e.stopPropagation()}>
                        {/* Close */}
                        <button onClick={closeModal} className="modal-close-btn">
                            ×
                        </button>
                        {/* Prev */}
                        <button onClick={prevImage} className="modal-nav-btn modal-prev-btn">
                            ‹
                        </button>
                        {/* Next */}
                        <button onClick={nextImage} className="modal-nav-btn modal-next-btn">
                            ›
                        </button>
                        {/* Image */}
                        <div
                            className="modal-image"
                            style={{
                                backgroundImage: `url("${modalItem.url}")`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        />
                        {/* Caption */}
                        <div className="modal-caption">
                            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0', textTransform: 'capitalize' }}>
                                {modalItem.category}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {/* Responsive */}
            <style>{`
                .gallery-header {
                    padding: 60px 120px 30px;
                    text-align: center;
                }
                .gallery-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .gallery-subtitle {
                    font-size: 16px;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .gallery-filters-section {
                    padding: 0 120px 40px;
                }
                .gallery-filters {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }
                .gallery-filter-btn {
                    background-color: var(--color-dark-card);
                    color: var(--color-text-secondary);
                    border: none;
                    padding: 12px 20px;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-family: var(--font-body);
                }
                .gallery-filter-btn:hover {
                    background-color: var(--color-dark-card-hover);
                }
                .gallery-filter-btn.active {
                    background-color: var(--color-accent);
                    color: #fff;
                }
                .gallery-filter-btn.active:hover {
                    background-color: var(--color-accent);
                }
                .gallery-grid-section {
                    padding: 0 120px 80px;
                }
                .gallery-back-section {
                    text-align: center;
                    padding: 0 120px 60px;
                }

                /* Modal */
                .gallery-modal {
                    position: relative;
                }
                .modal-close-btn {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
                    color: #fff;
                    border: none;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    font-size: 26px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                .modal-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: var(--color-accent);
                    color: #fff;
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                .modal-nav-btn:hover {
                    background-color: var(--color-accent-light);
                }
                .modal-prev-btn {
                    left: -60px;
                }
                .modal-next-btn {
                    right: -60px;
                }
                .modal-image {
                    width: 70vw;
                    max-width: 800px;
                    height: 60vh;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 80px;
                    color: rgba(255,255,255,0.3);
                }
                .modal-caption {
                    position: absolute;
                    bottom: -60px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    color: #fff;
                }

                /* ===== TABLET ===== */
                @media (max-width: 1366px) {
                    .gallery-header { padding: 50px 80px 25px; }
                    .gallery-filters-section { padding: 0 80px 30px; }
                    .gallery-grid-section { padding: 0 80px 60px; }
                    .gallery-back-section { padding: 0 80px 50px; }
                }

                @media (max-width: 1024px) {
                    .gallery-header { padding: 40px 50px 20px; }
                    .gallery-title { font-size: 30px; }
                    .gallery-filters-section { padding: 0 50px 25px; }
                    .gallery-grid-section { padding: 0 50px 50px; }
                    .gallery-back-section { padding: 0 50px 40px; }
                    .modal-prev-btn { left: -55px; }
                    .modal-next-btn { right: -55px; }
                }

                /* ===== MOBILE ===== */
                @media (max-width: 768px) {
                    .gallery-header { padding: 30px 25px 15px; }
                    .gallery-title { font-size: 26px; }
                    .gallery-subtitle { font-size: 14px; }
                    .gallery-filters-section { padding: 0 25px 20px; }
                    .gallery-filters { gap: 8px; }
                    .gallery-filter-btn {
                        padding: 10px 16px;
                        font-size: 12px;
                    }
                    .gallery-grid-section { padding: 0 25px 40px; }
                    .gallery-back-section { padding: 0 25px 40px; }

                    /* Modal mobile */
                    .modal-close-btn {
                        top: -45px;
                        right: 5px;
                        width: 38px;
                        height: 38px;
                        font-size: 22px;
                    }
                    .modal-nav-btn {
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }
                    .modal-prev-btn {
                        left: 8px;
                        top: 50%;
                    }
                    .modal-next-btn {
                        right: 8px;
                        top: 50%;
                    }
                    .modal-image {
                        width: 90vw;
                        height: 50vh;
                        font-size: 50px;
                        border-radius: 10px;
                    }
                    .modal-caption {
                        bottom: -50px;
                    }
                    .modal-caption h3 { font-size: 15px !important; }
                    .modal-caption p { font-size: 12px !important; }
                }

                @media (max-width: 480px) {
                    .gallery-header { padding: 25px 20px 12px; }
                    .gallery-title { font-size: 22px; }
                    .gallery-filters-section { padding: 0 20px 15px; }
                    .gallery-filter-btn { padding: 8px 12px; font-size: 11px; }
                    .gallery-grid-section { padding: 0 20px 30px; }
                    .gallery-back-section { padding: 0 20px 30px; }
                    .modal-image {
                        width: 92vw;
                        height: 40vh;
                        font-size: 40px;
                    }
                    .modal-nav-btn {
                        width: 34px;
                        height: 34px;
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    )
}
