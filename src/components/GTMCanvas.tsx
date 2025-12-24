import { motion, AnimatePresence } from 'framer-motion'

interface GTMCanvasProps {
  universe: 'scale' | 'build'
}

const canvasContent = {
  scale: {
    tag: 'THE GTM CANVAS',
    title: 'See The Pipeline In Motion',
    nodes: [
      { id: 1, label: 'Findlead Discovery', x: 50, y: 120, color: '#007BFF' },
      { id: 2, label: 'Human Verification Gate', x: 300, y: 120, color: '#FF007F' },
      { id: 3, label: 'Omnichannel Action', x: 550, y: 120, color: '#39FF14' }
    ],
    stats: [
      { label: 'status: ACTIVE', color: '#666' },
      { label: 'leads_processed: 1,247', color: '#39FF14' },
      { label: 'meetings_booked: 89', color: '#FF007F' }
    ],
    sidebar: {
      health: 94,
      label: 'Efficiency'
    }
  },
  build: {
    tag: 'YOUR GTM CANVAS',
    title: 'Design Your Own Flow',
    nodes: [
      { id: 1, label: 'Your Data Sources', x: 50, y: 120, color: '#007BFF' },
      { id: 2, label: 'Custom Logic Layer', x: 300, y: 120, color: '#FF007F' },
      { id: 3, label: 'Your Integrations', x: 550, y: 120, color: '#39FF14' }
    ],
    stats: [
      { label: 'mode: BUILDER', color: '#007BFF' },
      { label: 'custom_nodes: unlimited', color: '#39FF14' },
      { label: 'integrations: 50+', color: '#FF007F' }
    ],
    sidebar: {
      health: 100,
      label: 'Flexibility'
    }
  }
}

export default function GTMCanvas({ universe }: GTMCanvasProps) {
  const content = canvasContent[universe]

  return (
    <section className="gtm-canvas">
      <div className="canvas-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={universe + '-header'}
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-tag" style={{
              color: universe === 'scale' ? 'var(--logic-blue)' : 'var(--strategy-pink)',
              background: universe === 'scale' ? 'rgba(0, 123, 255, 0.1)' : 'rgba(255, 0, 127, 0.1)',
              borderColor: universe === 'scale' ? 'rgba(0, 123, 255, 0.2)' : 'rgba(255, 0, 127, 0.2)'
            }}>
              {content.tag}
            </span>
            <h2 className="section-title">{content.title}</h2>
          </motion.div>
        </AnimatePresence>

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
            <span className="window-title">{universe === 'scale' ? 'lead-flow.canvas' : 'custom-flow.builder'}</span>
            <div className="window-tabs">
              <span className="tab active">Visual</span>
              <span className="tab">Code</span>
              <span className="tab">{universe === 'scale' ? 'Logs' : 'Config'}</span>
            </div>
          </div>

          <div className="window-body">
            <AnimatePresence mode="wait">
              <motion.svg 
                key={universe}
                className="flow-canvas" 
                viewBox="0 0 750 240"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.polygon
                  points="265,115 275,120 265,125"
                  fill="#FF007F"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                />

                <motion.path
                  d="M 400 120 L 510 120"
                  stroke="url(#pathGradient2)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.polygon
                  points="515,115 525,120 515,125"
                  fill="#39FF14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                />

                {content.nodes.map((node, index) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <text x="125" y="210" fill={content.stats[0].color} fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    {content.stats[0].label}
                  </text>
                  <text x="350" y="210" fill={content.stats[1].color} fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    {content.stats[1].label}
                  </text>
                  <text x="575" y="210" fill={content.stats[2].color} fontSize="10" fontFamily="IBM Plex Mono, monospace">
                    {content.stats[2].label}
                  </text>
                </motion.g>
              </motion.svg>
            </AnimatePresence>

            <div className="canvas-sidebar">
              <div className="sidebar-section">
                <h4>Active Nodes</h4>
                <div className="node-list">
                  {content.nodes.map(node => (
                    <div key={node.id} className="node-item">
                      <span className="node-status" style={{ backgroundColor: node.color }} />
                      <span>{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-section">
                <h4>{universe === 'scale' ? 'Pipeline Health' : 'Builder Mode'}</h4>
                <div className="health-bar">
                  <div className="health-fill" style={{ width: `${content.sidebar.health}%` }} />
                </div>
                <span className="health-label">{content.sidebar.health}% {content.sidebar.label}</span>
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
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 24px;
          border: 1px solid;
          transition: all 0.3s ease;
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
