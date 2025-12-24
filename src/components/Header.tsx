import { motion } from 'framer-motion'

export default function Header() {
  const navLinks = ['Venture Services', 'Success Stories', 'Paign.ai', 'Articles']

  return (
    <header className="header">
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Intelous</span>
          <span className="logo-labs">Labs</span>
        </motion.div>

        <nav className="nav">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href="#"
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ color: '#FF007F' }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="cta-button"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(57, 255, 20, 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          Book Architecture Session
        </motion.button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo-text {
          color: var(--obsidian);
        }

        .logo-labs {
          color: var(--strategy-pink);
        }

        .nav {
          display: flex;
          gap: 36px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-medium);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--strategy-pink);
        }

        .cta-button {
          background: var(--system-green);
          color: var(--obsidian);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .nav {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .header-container {
            padding: 12px 16px;
          }

          .cta-button {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </header>
  )
}
