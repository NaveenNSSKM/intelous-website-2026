import { motion } from 'framer-motion'

export default function BOTModule() {
  return (
    <section className="bot-module">
      <div className="bot-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">BUILD → OPERATE → TRANSFER</span>
          <h2 className="section-title">WE BUILD THE SHIP.<br/>YOU CAPTAIN IT.</h2>
        </motion.div>

        <div className="bot-content">
          <motion.div 
            className="bot-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="handover-illustration">
              <div className="hand hand-left">
                <svg viewBox="0 0 120 100" fill="none">
                  <path d="M10 60 Q 20 40, 50 35 L 80 35 Q 90 35, 95 45 L 100 55 Q 105 65, 95 70 L 50 75 Q 30 78, 20 70 Q 10 62, 10 60Z" 
                    fill="var(--obsidian)" stroke="var(--strategy-pink)" strokeWidth="2"/>
                  <rect x="45" y="25" width="40" height="25" rx="4" fill="var(--strategy-pink)" opacity="0.9"/>
                  <rect x="50" y="30" width="30" height="3" rx="1" fill="white" opacity="0.5"/>
                  <rect x="50" y="36" width="20" height="3" rx="1" fill="white" opacity="0.5"/>
                  <rect x="50" y="42" width="25" height="3" rx="1" fill="white" opacity="0.5"/>
                </svg>
                <span className="hand-label">INTELOUS LABS</span>
              </div>

              <motion.div 
                className="transfer-arrow"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.svg 
                  viewBox="0 0 100 40" 
                  fill="none"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M5 20 L 70 20" stroke="var(--system-green)" strokeWidth="3" strokeDasharray="8 4"/>
                  <path d="M65 10 L 85 20 L 65 30" stroke="var(--system-green)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>

              <div className="hand hand-right">
                <svg viewBox="0 0 120 100" fill="none">
                  <path d="M110 60 Q 100 40, 70 35 L 40 35 Q 30 35, 25 45 L 20 55 Q 15 65, 25 70 L 70 75 Q 90 78, 100 70 Q 110 62, 110 60Z" 
                    fill="var(--white)" stroke="var(--system-green)" strokeWidth="2"/>
                </svg>
                <span className="hand-label">YOUR TEAM</span>
              </div>
            </div>

            <div className="engine-diagram">
              <motion.div 
                className="engine-core"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="core-ring ring-1" />
                <div className="core-ring ring-2" />
                <div className="core-center">
                  <span>GTM</span>
                  <span className="small">ENGINE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bot-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bot-phases">
              <div className="phase">
                <div className="phase-number" style={{ background: 'var(--strategy-pink)' }}>1</div>
                <div className="phase-content">
                  <h4>BUILD</h4>
                  <p>We architect your entire GTM system—data pipelines, agentic workflows, CRM integrations, and outbound sequences.</p>
                </div>
              </div>

              <div className="phase">
                <div className="phase-number" style={{ background: 'var(--system-green)' }}>2</div>
                <div className="phase-content">
                  <h4>OPERATE</h4>
                  <p>We run your system until it generates your first 20 qualified leads. Real operators, real results.</p>
                </div>
              </div>

              <div className="phase">
                <div className="phase-number" style={{ background: '#007BFF' }}>3</div>
                <div className="phase-content">
                  <h4>TRANSFER</h4>
                  <p>Full documentation, training, and handover. Your team takes the wheel with confidence.</p>
                </div>
              </div>
            </div>

            <div className="bot-guarantee">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-text">
                <strong>The Intelous Guarantee:</strong> If we don't deliver 20 qualified leads, we extend our operation at no cost.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .bot-module {
          background: var(--obsidian);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .bot-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--system-green);
          background: rgba(57, 255, 20, 0.1);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(57, 255, 20, 0.2);
        }

        .section-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .bot-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .bot-visual {
          position: relative;
        }

        .handover-illustration {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .hand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hand svg {
          width: 120px;
          height: 100px;
        }

        .hand-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          opacity: 0.7;
        }

        .transfer-arrow svg {
          width: 100px;
          height: 40px;
        }

        .engine-diagram {
          display: flex;
          justify-content: center;
        }

        .engine-core {
          width: 200px;
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .core-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed;
        }

        .ring-1 {
          width: 100%;
          height: 100%;
          border-color: var(--strategy-pink);
          opacity: 0.4;
        }

        .ring-2 {
          width: 75%;
          height: 75%;
          border-color: var(--system-green);
          opacity: 0.6;
        }

        .core-center {
          background: linear-gradient(135deg, var(--strategy-pink), #007BFF);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .core-center .small {
          font-size: 10px;
          opacity: 0.8;
        }

        .bot-phases {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
        }

        .phase {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .phase-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
          color: var(--obsidian);
          flex-shrink: 0;
        }

        .phase-content h4 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .phase-content p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .bot-guarantee {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(57, 255, 20, 0.1);
          border: 1px solid rgba(57, 255, 20, 0.2);
          border-radius: 12px;
          padding: 20px;
        }

        .guarantee-icon {
          font-size: 32px;
        }

        .guarantee-text {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
        }

        .guarantee-text strong {
          color: var(--system-green);
        }

        @media (max-width: 900px) {
          .bot-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .handover-illustration {
            flex-direction: column;
            gap: 20px;
          }

          .transfer-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  )
}
