import { motion } from 'framer-motion'

const flowNodes = [
  { id: 1, label: 'Findlead Discovery', x: 50, y: 120, color: '#007BFF' },
  { id: 2, label: 'Human Verification Gate', x: 300, y: 120, color: '#FF007F' },
  { id: 3, label: 'Omnichannel Action', x: 550, y: 120, color: '#39FF14' }
]

export default function GTMCanvas() {
  return (
    <section className="gtm-canvas">
      <div className="canvas-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">THE GTM CANVAS</span>
          <h2 className="section-title">See The Pipeline In Motion</h2>
        </motion.div>

        <motion.div
          className="code-window"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="window-header">
            <div className="window-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="window-title">lead-flow.canvas</span>
            <div className="window-tabs">
              <span className="tab active">Visual</span>
              <span className="tab">Code</span>
              <span className="tab">Logs</span>
            </div>
          </div>

          <div className="window-body">
            <svg className="flow-canvas" viewBox="0 0 750 240">
              <defs>
                <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#007BFF" />
                  <stop offset="100%" stopColor="#FF007F" />
                </linearGradient>
                <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF007F" />
                  <stop offset="100%" stopColor="#39FF14" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.path
                d="M 150 120 L 260 120"
                stroke="url(#pathGradient1)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.polygon
                points="265,115 275,120 265,125"
                fill="#FF007F"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              />

              <motion.path
                d="M 400 120 L 510 120"
                stroke="url(#pathGradient2)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.polygon
                points="515,115 525,120 515,125"
                fill="#39FF14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
              />

              {flowNodes.map((node, index) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <rect
                    x={node.x}
                    y={node.y - 35}
                    width="150"
                    height="70"
                    rx="12"
                    fill="#0a0a0a"
                    stroke={node.color}
                    strokeWidth="2"
                  />
                  <rect
                    x={node.x}
                    y={node.y - 35}
                    width="150"
                    height="70"
                    rx="12"
                    fill={`${node.color}10`}
                  />
                  <text
                    x={node.x + 75}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    {node.label}
                  </text>
                  <circle
                    cx={node.x + 75}
                    cy={node.y - 55}
                    r="6"
                    fill={node.color}
                    filter="url(#glow)"
                  />
                </motion.g>
              ))}

              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5 }}
              >
                <text x="125" y="210" fill="#666" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                  status: ACTIVE
                </text>
                <text x="350" y="210" fill="#39FF14" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                  leads_processed: 1,247
                </text>
                <text x="575" y="210" fill="#FF007F" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                  meetings_booked: 89
                </text>
              </motion.g>
            </svg>

            <div className="canvas-sidebar">
              <div className="sidebar-section">
                <h4>Active Nodes</h4>
                <div className="node-list">
                  {flowNodes.map(node => (
                    <div key={node.id} className="node-item">
                      <span className="node-status" style={{ backgroundColor: node.color }} />
                      <span>{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-section">
                <h4>Pipeline Health</h4>
                <div className="health-bar">
                  <div className="health-fill" style={{ width: '94%' }} />
                </div>
                <span className="health-label">94% Efficiency</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gtm-canvas {
          background: var(--obsidian);
          position: relative;
        }

        .canvas-container {
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
          color: var(--logic-blue);
          background: rgba(0, 123, 255, 0.1);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid rgba(0, 123, 255, 0.2);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .code-window {
          background: #0a0a0a;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
        }

        .window-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #111;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .window-controls {
          display: flex;
          gap: 8px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.close { background: #ff5f57; }
        .control.minimize { background: #febc2e; }
        .control.maximize { background: #28c840; }

        .window-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--gray-medium);
        }

        .window-tabs {
          display: flex;
          gap: 4px;
          margin-left: auto;
        }

        .tab {
          padding: 6px 16px;
          font-size: 12px;
          color: var(--gray-medium);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab.active {
          background: rgba(0, 123, 255, 0.2);
          color: var(--logic-blue);
        }

        .window-body {
          display: flex;
          min-height: 320px;
        }

        .flow-canvas {
          flex: 1;
          padding: 20px;
        }

        .canvas-sidebar {
          width: 220px;
          background: rgba(255, 255, 255, 0.02);
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px;
        }

        .sidebar-section {
          margin-bottom: 24px;
        }

        .sidebar-section h4 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--gray-medium);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .node-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .node-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--gray-light);
        }

        .node-status {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .health-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .health-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--system-green), var(--logic-blue));
          border-radius: 3px;
        }

        .health-label {
          font-size: 12px;
          color: var(--system-green);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .canvas-sidebar {
            display: none;
          }

          .window-tabs {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
