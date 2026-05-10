import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/galeria', label: 'Galería' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const scrollToForm = () => {
        if (location.pathname !== '/') {
            window.location.href = '/#cotizar'
        } else {
            const el = document.getElementById('cotizar')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '32px 120px',
                paddingLeft: '40px',
                backgroundColor: 'transparent',
                position: 'relative',
                zIndex: 100,
                maxWidth: '2560px',
                margin: '0 auto',
            }}
        >
            {/* Logo */}
            <Link to="/" className="logo-container">
                <img
                    src="/logo.png"
                    alt="Zenturion"
                    className="logo-img"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                <span
                    style={{
                        display: 'none',
                        fontSize: '28px',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        letterSpacing: '-0.5px',
                    }}
                >
                    ZENTURION
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                {/* Menu links visible on desktop */}
                <div
                    className="nav-desktop"
                    style={{
                        display: 'flex',
                        gap: '40px',
                        alignItems: 'center',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-pill ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <button onClick={scrollToForm} className="pill-btn">
                    COTIZAR
                </button>
            </nav>

            {/* Spacer to balance the logo flex and center the nav */}
            <div className="nav-spacer"></div>

            {/* Mobile burger */}
            <button
                className="mobile-burger"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-primary)',
                    fontSize: '28px',
                    cursor: 'pointer',
                    zIndex: 110,
                }}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(9, 9, 11, 0.95)',
                        zIndex: 105,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: location.pathname === link.to
                                    ? 'var(--color-accent-light)'
                                    : 'var(--color-text-primary)',
                                fontSize: '22px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                padding: '14px 30px',
                                borderRadius: '22px',
                                background: location.pathname === link.to
                                    ? 'rgba(37, 99, 235, 0.15)'
                                    : 'transparent',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false)
                            scrollToForm()
                        }}
                        className="pill-btn"
                        style={{ marginTop: '12px' }}
                    >
                        COTIZAR
                    </button>
                </div>
            )}

            <style>{`
                .logo-container {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    z-index: 120;
                    flex: 1;
                }
                .nav-spacer {
                    flex: 1;
                }
                .logo-img {
                    height: 55px;
                    object-fit: contain;
                }
                @media (max-width: 768px) {
                    header {
                        padding: 18px 25px !important;
                        padding-left: 15px !important;
                    }
                    .nav-desktop {
                        display: none !important;
                    }
                    .pill-btn {
                        display: none;
                    }
                    .mobile-burger {
                        display: block !important;
                    }
                    .logo-img {
                        height: 38px;
                    }
                    .nav-spacer {
                        display: none;
                    }
                }
                @media (max-width: 1366px) {
                    header {
                        padding: 24px 80px !important;
                        padding-left: 30px !important;
                    }
                }
                @media (max-width: 1024px) {
                    header {
                        padding: 20px 50px !important;
                        padding-left: 20px !important;
                    }
                    .logo-img {
                        height: 45px;
                    }
                }
            `}</style>
        </header>
    )
}
