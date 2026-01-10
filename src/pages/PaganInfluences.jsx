import { useState } from 'react'
import { Compass, ChevronDown, ChevronUp, AlertTriangle, BookOpen } from 'lucide-react'
import { paganInfluences } from '../data/jesusData'

export default function PaganInfluences() {
  const [expandedId, setExpandedId] = useState(1)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #7b1fa2, #9c27b0)' }}>
          <Compass size={28} />
        </div>
        <h1>{paganInfluences.title}</h1>
        <p className="arabic-title">{paganInfluences.arabicTitle}</p>
        <p>Examining historical parallels and later additions</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)' }}>
        <h4><AlertTriangle size={18} /> Academic Context</h4>
        <p>{paganInfluences.introduction}</p>
      </div>

      {paganInfluences.categories.map(item => (
        <div key={item.id} className="expandable">
          <div
            className="expandable-header"
            onClick={() => toggleExpand(item.id)}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
            </div>
            {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {expandedId === item.id && (
            <div className="expandable-content">
              <p style={{
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginTop: '1rem'
              }}>
                {item.content}
              </p>

              {item.paganParallels && item.paganParallels.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    Pagan Parallels:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.paganParallels.map((parallel, idx) => (
                      <span key={idx} className="badge badge-secondary" style={{ fontSize: '0.8rem' }}>
                        {parallel}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.sources && item.sources.length > 0 && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'var(--surface-hover)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <strong>Sources:</strong> {item.sources.join(', ')}
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="card" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
        <h3><BookOpen size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> The Islamic Perspective</h3>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          {paganInfluences.conclusion}
        </p>
      </div>

      <div className="info-box" style={{ marginTop: '1rem' }}>
        <h4>Return to Pure Monotheism</h4>
        <p>
          Islam calls humanity back to the original message of all prophets - including Jesus -
          which is the worship of One God without partners, images, or intermediaries.
          This is the straight path that was taught by Abraham, Moses, Jesus, and Muhammad (peace be upon them all).
        </p>
      </div>
    </div>
  )
}
