import { Link } from 'react-router-dom'

const quickLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/galeria', label: 'Galería' },
]

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: 'var(--color-dark-soft)',
                borderTop: '1px solid var(--color-dark-border)',
                position: 'relative',
                zIndex: 2,
            }}
        >
            <div
                style={{
                    maxWidth: '2560px',
                    margin: '0 auto',
                    padding: '50px 120px',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '50px',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <h3
                            style={{
                                fontSize: '22px',
                                fontWeight: 700,
                                marginBottom: '18px',
                            }}
                        >
                            ZENTURION
                        </h3>
                        <p
                            style={{
                                fontSize: '14px',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.7,
                            }}
                        >
                            Logistics Hub de excelencia.
                            Cotiza ahora y obtén el mejor presupuesto
                            para tus necesidades logísticas.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '18px',
                            }}
                        >
                            Navegación
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    style={{
                                        color: 'var(--color-text-dim)',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-accent-light)')}
                                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-dim)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4
                            style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '18px',
                            }}
                        >
                            Redes Sociales
                        </h4>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a
                                href="https://www.instagram.com/zenturion.cr?igsh=MXJrbnhicjNyZHJ2Zw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--color-dark-card)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--color-dark-card)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        marginTop: '40px',
                        paddingTop: '20px',
                        borderTop: '1px solid var(--color-dark-border)',
                        textAlign: 'center',
                    }}
                >
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '12px' }}>
                        © {new Date().getFullYear()} Zenturion. Todos los derechos reservados.
                    </p>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 1366px) {
                    footer > div { padding: 40px 80px !important; }
                }
                @media (max-width: 1024px) {
                    footer > div { padding: 35px 50px !important; }
                }
                @media (max-width: 768px) {
                    footer > div { padding: 30px 25px !important; }
                    footer > div > div:first-child {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 30px !important;
                    }
                }
                @media (max-width: 480px) {
                    footer > div { padding: 25px 20px !important; }
                    footer > div > div:first-child {
                        grid-template-columns: 1fr !important;
                        gap: 25px !important;
                        text-align: center;
                    }
                    footer > div > div:first-child > div > div {
                        align-items: center !important;
                    }
                    footer > div > div:first-child > div:last-child > div {
                        justify-content: center !important;
                    }
                }
            `}</style>
        </footer>
    )
}
