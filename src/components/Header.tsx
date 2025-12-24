import { motion } from 'framer-motion'

const navLinks = [
  'Managed Lead Gen',
  'Intelous OS',
  'IntelousABM',
  'Findlead',
  'Use Cases',
  'Blogs',
  'Services'
]

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Intelous</span>
          <span className="logo-ai">.ai</span>
        </div>
        
        <nav className="nav">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ color: '#FF007F' }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 127, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Join Q1 2026 Cohort
        </motion.button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px 0;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo-text {
          color: var(--white);
        }

        .logo-ai {
          color: var(--strategy-pink);
        }

        .nav {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-light);
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .cta-button {
          background: var(--strategy-pink);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        @media (max-width: 1200px) {
          .nav {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
          }
          
          .logo {
            font-size: 20px;
          }

          .cta-button {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </motion.header>
  )
}
