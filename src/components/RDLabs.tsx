import { motion } from 'framer-motion'

const codeSnippet = `// Paign.ai Autonomous Agent
class LeadQualificationAgent {
  async qualify(lead: Lead) {
    const intent = await this.analyzeIntent(lead);
    const icp_score = this.scoreAgainstICP(lead);
    
    if (icp_score > 0.85 && intent.ready) {
      return this.routeToSales(lead);
    }
    
    return this.addToNurture(lead);
  }
}`

export default function RDLabs() {
  return (
    <section className="rd-labs">
      <div className="labs-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">R&D LABS</span>
          <h2 className="section-title">The Tech Behind The Magic</h2>
          <p className="section-subtitle">
            Peek under the hood of our AI-native GTM infrastructure.
          </p>
        </motion.div>

        <div className="bento-grid">
          <motion.div 
            className="bento-box box-code"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(255, 0, 127, 0.15)' }}
          >
            <div className="box-header">
              <span className="box-tag">PAIGN.AI</span>
              <span className="box-label">Autonomous Agent Code</span>
            </div>
            <pre className="code-block">
              <code>{codeSnippet}</code>
            </pre>
            <div className="box-footer">
              <span className="status-dot" />
              <span>Agent Active • 2.4ms response</span>
            </div>
          </motion.div>

          <motion.div 
            className="bento-box box-3d"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(57, 255, 20, 0.15)' }}
          >
            <div className="box-header">
              <span className="box-tag green">BYX STYLE</span>
              <span className="box-label">3D Product Render</span>
            </div>
            <div className="render-container">
              <motion.div 
                className="cube-3d"
                animate={{ 
                  rotateX: [0, 360],
                  rotateY: [0, 360]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
              >
                <div className="cube-face front">
                  <span>GTM</span>
                </div>
                <div className="cube-face back" />
                <div className="cube-face left" />
                <div className="cube-face right" />
                <div className="cube-face top" />
                <div className="cube-face bottom" />
              </motion.div>
            </div>
            <div className="render-label">Intelous GTM Core v2.0</div>
          </motion.div>

          <motion.div 
            className="bento-box box-whitepaper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="box-header">
              <span className="box-tag blue">WHITEPAPER</span>
            </div>
            <div className="whitepaper-content">
              <h3>Agentic Architecture</h3>
              <p>The future of GTM is autonomous. Learn how our AI agents orchestrate multi-channel outreach with human-level precision.</p>
              <div className="paper-meta">
                <span>12 min read</span>
                <span>•</span>
                <span>PDF Available</span>
              </div>
            </div>
            <motion.button 
              className="download-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Preview
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2V11M8 11L4 7M8 11L12 7M2 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <div className="hover-specs">
              <div className="spec-line">Architecture: Multi-Agent DAG</div>
              <div className="spec-line">Latency: &lt;50ms p99</div>
              <div className="spec-line">Integrations: 50+ CRMs</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .rd-labs {
          background: var(--architectural-white);
          position: relative;
        }

        .labs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--strategy-pink);
          background: rgba(255, 0, 127, 0.08);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 0, 127, 0.2);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--obsidian);
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray-medium);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          grid-template-rows: auto auto;
          gap: 24px;
        }

        .bento-box {
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .box-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .box-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--strategy-pink);
          background: rgba(255, 0, 127, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .box-tag.green {
          color: var(--system-green);
          background: rgba(57, 255, 20, 0.1);
        }

        .box-tag.blue {
          color: #007BFF;
          background: rgba(0, 123, 255, 0.1);
        }

        .box-label {
          font-size: 12px;
          color: var(--gray-medium);
        }

        .box-code {
          grid-row: span 2;
        }

        .code-block {
          background: var(--obsidian);
          border-radius: 12px;
          padding: 24px;
          overflow-x: auto;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #e0e0e0;
        }

        .box-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 12px;
          color: var(--gray-medium);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--system-green);
          border-radius: 50%;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(57, 255, 20, 0.7); }
          50% { box-shadow: 0 0 0 6px rgba(57, 255, 20, 0); }
        }

        .render-container {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 400px;
        }

        .cube-3d {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid var(--system-green);
          background: rgba(57, 255, 20, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 18px;
          color: var(--system-green);
        }

        .cube-face.front { transform: translateZ(50px); }
        .cube-face.back { transform: translateZ(-50px) rotateY(180deg); }
        .cube-face.left { transform: translateX(-50px) rotateY(-90deg); }
        .cube-face.right { transform: translateX(50px) rotateY(90deg); }
        .cube-face.top { transform: translateY(-50px) rotateX(90deg); }
        .cube-face.bottom { transform: translateY(50px) rotateX(-90deg); }

        .render-label {
          text-align: center;
          font-size: 13px;
          color: var(--gray-medium);
          margin-top: 12px;
        }

        .whitepaper-content h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--obsidian);
          margin-bottom: 12px;
        }

        .whitepaper-content p {
          font-size: 14px;
          color: var(--gray-medium);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .paper-meta {
          display: flex;
          gap: 8px;
          font-size: 12px;
          color: var(--gray-light);
          margin-bottom: 20px;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--obsidian);
          color: var(--white);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: #1a1a1a;
        }

        .hover-specs {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--obsidian);
          padding: 16px 28px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: var(--system-green);
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .box-whitepaper:hover .hover-specs {
          transform: translateY(0);
        }

        .spec-line {
          margin-bottom: 4px;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }

          .box-code {
            grid-row: auto;
          }
        }
      `}</style>
    </section>
  )
}
