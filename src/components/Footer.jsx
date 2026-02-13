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
                            ⚡ ServiciosPro
                        </h3>
                        <p
                            style={{
                                fontSize: '14px',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.7,
                            }}
                        >
                            Servicios profesionales de excelencia.
                            Cotiza ahora y obtén el mejor presupuesto
                            para tu proyecto.
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

                    {/* Contact */}
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
                            Contacto
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-text-dim)' }}>
                            <span>📍 Dirección placeholder</span>
                            <span>📞 +56 9 xxxx xxxx</span>
                            <span>✉️ contacto@serviciospro.cl</span>
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
                            {['📘', '📸', '📺', '💼'].map((icon, i) => (
                                <span
                                    key={i}
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
                                    }}
                                >
                                    {icon}
                                </span>
                            ))}
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
                        © {new Date().getFullYear()} ServiciosPro. Todos los derechos reservados.
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
                }
            `}</style>
        </footer>
    )
}
