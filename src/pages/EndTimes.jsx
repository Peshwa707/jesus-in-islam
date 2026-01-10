import { useState } from 'react'
import { Flame, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, BookOpen, Swords } from 'lucide-react'
import { endTimesInfo } from '../data/jesusData'

export default function EndTimes() {
  const [activeTab, setActiveTab] = useState('major')
  const [expandedId, setExpandedId] = useState(1)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #c62828, #e53935)' }}>
          <Flame size={28} />
        </div>
        <h1>{endTimesInfo.title}</h1>
        <p className="arabic-title">{endTimesInfo.arabicTitle}</p>
        <p>Comparing Islamic and Christian eschatology</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #ffebee, #ffcdd2)' }}>
        <h4><AlertTriangle size={18} /> Important Context</h4>
        <p>{endTimesInfo.introduction}</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'major' ? 'active' : ''}`}
          onClick={() => { setActiveTab('major'); setExpandedId(1); }}
        >
          Major Signs
        </button>
        <button
          className={`tab ${activeTab === 'minor' ? 'active' : ''}`}
          onClick={() => setActiveTab('minor')}
        >
          Minor Signs
        </button>
        <button
          className={`tab ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button
          className={`tab ${activeTab === 'differences' ? 'active' : ''}`}
          onClick={() => setActiveTab('differences')}
        >
          Key Differences
        </button>
      </div>

      {activeTab === 'major' && (
        <>
          {endTimesInfo.majorSigns.map(sign => (
            <div key={sign.id} className="expandable">
              <div
                className="expandable-header"
                onClick={() => toggleExpand(sign.id)}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{sign.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--secondary-color)', marginTop: '0.25rem' }}>
                    {sign.arabicTitle}
                  </p>
                </div>
                {expandedId === sign.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {expandedId === sign.id && (
                <div className="expandable-content">
                  {/* Islamic View */}
                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '1rem',
                    borderLeft: '4px solid var(--primary-color)'
                  }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Swords size={18} /> Islamic Belief
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                      {sign.islamicBelief.description}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      {sign.islamicBelief.keyPoints.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <CheckCircle size={14} color="var(--primary-color)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{point}</span>
                        </div>
                      ))}
                    </div>

                    {sign.islamicBelief.hadithEvidence && (
                      <div style={{ marginTop: '1rem' }}>
                        <p style={{ fontWeight: '600', fontSize: '0.85rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                          Hadith Evidence:
                        </p>
                        {sign.islamicBelief.hadithEvidence.map((hadith, idx) => (
                          <div key={idx} style={{
                            padding: '0.75rem',
                            background: 'rgba(255,255,255,0.7)',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: '0.5rem',
                            fontSize: '0.85rem'
                          }}>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>"{hadith.text}"</p>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>— {hadith.source}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {sign.islamicBelief.quranicEvidence && (
                      <div style={{
                        padding: '0.75rem',
                        background: 'rgba(255,255,255,0.7)',
                        borderRadius: 'var(--radius-sm)',
                        marginTop: '0.5rem'
                      }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          {sign.islamicBelief.quranicEvidence}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Christian View */}
                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '1rem',
                    borderLeft: '4px solid #1976d2'
                  }}>
                    <h4 style={{ color: '#1976d2', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BookOpen size={18} /> Christian Belief
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                      {sign.christianBelief.description}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      {sign.christianBelief.keyPoints.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <CheckCircle size={14} color="#1976d2" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{point}</span>
                        </div>
                      ))}
                    </div>

                    {sign.christianBelief.biblicalReferences && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <p style={{ fontWeight: '600', fontSize: '0.85rem', color: '#1976d2', marginBottom: '0.5rem' }}>
                          Biblical References:
                        </p>
                        {sign.christianBelief.biblicalReferences.map((ref, idx) => (
                          <p key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                            • {ref}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {activeTab === 'minor' && (
        <div className="card">
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Minor Signs of the Hour</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            These signs precede the major signs and many are believed to have already occurred or are occurring now.
          </p>
          {endTimesInfo.minorSigns.map((sign, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              marginBottom: '0.75rem',
              paddingBottom: '0.75rem',
              borderBottom: idx < endTimesInfo.minorSigns.length - 1 ? '1px solid var(--border-color)' : 'none'
            }}>
              <div style={{
                minWidth: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--secondary-color)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                {idx + 1}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{sign}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'timeline' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Islamic Timeline</h3>
            {endTimesInfo.timeline.islamic.map((event, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem'
              }}>
                <div style={{
                  minWidth: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {idx + 1}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>{event}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ borderLeft: '4px solid #1976d2' }}>
            <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>Christian Timeline</h3>
            {endTimesInfo.timeline.christian.map((event, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem'
              }}>
                <div style={{
                  minWidth: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#1976d2',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {idx + 1}
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'differences' && (
        <>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'var(--surface)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)'
            }}>
              <thead>
                <tr style={{ background: 'var(--primary-color)', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', width: '25%' }}>Topic</th>
                  <th style={{ padding: '1rem', textAlign: 'left', width: '37.5%' }}>Islamic View</th>
                  <th style={{ padding: '1rem', textAlign: 'left', width: '37.5%' }}>Christian View</th>
                </tr>
              </thead>
              <tbody>
                {endTimesInfo.keyDifferences.map((diff, index) => (
                  <tr key={index} style={{
                    borderBottom: index < endTimesInfo.keyDifferences.length - 1 ? '1px solid var(--border-color)' : 'none',
                    background: index % 2 === 0 ? 'var(--surface)' : 'var(--surface-hover)'
                  }}>
                    <td style={{
                      padding: '1rem',
                      fontWeight: '600',
                      color: 'var(--primary-color)'
                    }}>
                      {diff.topic}
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                      {diff.islam}
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                      {diff.christianity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="card" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
        <h3>Common Ground</h3>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          {endTimesInfo.conclusion}
        </p>
      </div>

      <div className="info-box" style={{ marginTop: '1rem' }}>
        <h4>Preparing for the End Times</h4>
        <p>
          Both traditions emphasize that the exact timing is known only to God. The focus should be on
          righteous living, sincere worship, and being prepared at all times. As the Quran states:
          "They ask you about the Hour - when will it come? Say, 'Knowledge of it is only with my Lord.
          None will reveal its time except Him.'" (7:187)
        </p>
      </div>
    </div>
  )
}
