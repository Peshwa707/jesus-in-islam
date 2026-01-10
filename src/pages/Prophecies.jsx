import { useState } from 'react'
import { BookText, ChevronDown, ChevronUp, Quote, CheckCircle, AlertCircle } from 'lucide-react'
import { propheciesAndDenials } from '../data/jesusData'

export default function Prophecies() {
  const [activeTab, setActiveTab] = useState('prophecies')
  const [expandedId, setExpandedId] = useState(1)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #0277bd, #039be5)' }}>
          <BookText size={28} />
        </div>
        <h1>{propheciesAndDenials.title}</h1>
        <p className="arabic-title">{propheciesAndDenials.arabicTitle}</p>
        <p>Evidence from the Bible itself</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #e1f5fe, #b3e5fc)' }}>
        <h4><BookText size={18} /> Context</h4>
        <p>{propheciesAndDenials.introduction}</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'prophecies' ? 'active' : ''}`}
          onClick={() => { setActiveTab('prophecies'); setExpandedId(1); }}
        >
          Prophecies of Muhammad
        </button>
        <button
          className={`tab ${activeTab === 'denials' ? 'active' : ''}`}
          onClick={() => { setActiveTab('denials'); setExpandedId(1); }}
        >
          Jesus' Denial of Divinity
        </button>
      </div>

      {activeTab === 'prophecies' && (
        <>
          <p style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Old Testament prophecies about an Arab prophet
          </p>

          {propheciesAndDenials.prophecies.map(item => (
            <div key={item.id} className="expandable">
              <div
                className="expandable-header"
                onClick={() => toggleExpand(item.id)}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {item.reference}
                  </p>
                </div>
                {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {expandedId === item.id && (
                <div className="expandable-content">
                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '1rem',
                    borderLeft: '4px solid #1976d2'
                  }}>
                    <Quote size={16} color="#1976d2" style={{ marginBottom: '0.5rem' }} />
                    <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      — {item.reference}
                    </p>
                  </div>

                  <p style={{
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    marginTop: '1rem'
                  }}>
                    {item.explanation}
                  </p>

                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                      <p style={{ fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                        Key Points:
                      </p>
                      {item.keyPoints.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <CheckCircle size={16} color="var(--primary-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {activeTab === 'denials' && (
        <>
          <p style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Jesus' own words affirming his humanity and servitude to God
          </p>

          {propheciesAndDenials.jesusDenialOfDivinity.map(item => (
            <div key={item.id} className="expandable">
              <div
                className="expandable-header"
                onClick={() => toggleExpand(item.id)}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {item.reference}
                  </p>
                </div>
                {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {expandedId === item.id && (
                <div className="expandable-content">
                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '1rem',
                    borderLeft: '4px solid #f57c00'
                  }}>
                    <Quote size={16} color="#f57c00" style={{ marginBottom: '0.5rem' }} />
                    <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.7', fontWeight: '500' }}>
                      {item.text}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      — {item.reference}
                    </p>
                  </div>

                  <div style={{
                    padding: '1rem',
                    background: 'var(--surface-hover)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '1rem'
                  }}>
                    <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <AlertCircle size={18} color="var(--primary-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {item.explanation}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      <div className="card" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
        <h3>The Quranic Confirmation</h3>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          {propheciesAndDenials.conclusion}
        </p>
      </div>

      <div className="info-box" style={{ marginTop: '1rem' }}>
        <h4>Invitation to Reflect</h4>
        <p>
          The Quran invites people to ponder: "Do they not reflect upon the Quran? If it had been from
          any other than Allah, they would have found within it much contradiction." (4:82).
          Similarly, examining the Bible with an open heart reveals Jesus' true message of monotheism.
        </p>
      </div>
    </div>
  )
}
