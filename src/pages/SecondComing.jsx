import { Clock, AlertCircle, CheckCircle, MapPin } from 'lucide-react'
import { secondComingInfo } from '../data/jesusData'

export default function SecondComing() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #5c6bc0, #7986cb)' }}>
          <Clock size={28} />
        </div>
        <h1>The Second Coming</h1>
        <p className="arabic-title">نزول عيسى عليه السلام</p>
        <p>Islamic beliefs about the return of Prophet Isa before the Day of Judgment</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #e8eaf6, #f3e5f5)' }}>
        <h4><AlertCircle size={18} /> Important Belief</h4>
        <p>
          The return of Prophet Isa (Jesus) is one of the major signs of the Day of Judgment in Islam.
          This belief is established in both the Quran and authentic Hadith.
        </p>
      </div>

      <div className="card">
        <h3>Overview</h3>
        <p style={{ lineHeight: '1.8' }}>{secondComingInfo.overview}</p>
      </div>

      <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--primary-color)' }}>
        <MapPin size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Signs of His Return
      </h2>

      <div className="card">
        {secondComingInfo.signs.map((sign, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: index < secondComingInfo.signs.length - 1 ? '1rem' : 0,
            paddingBottom: index < secondComingInfo.signs.length - 1 ? '1rem' : 0,
            borderBottom: index < secondComingInfo.signs.length - 1 ? '1px solid var(--border-color)' : 'none'
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
              fontSize: '0.85rem',
              fontWeight: 'bold'
            }}>
              {index + 1}
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{sign}</p>
          </div>
        ))}
      </div>

      <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--primary-color)' }}>
        <CheckCircle size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        His Mission Upon Return
      </h2>

      <div className="card">
        {secondComingInfo.mission.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: index < secondComingInfo.mission.length - 1 ? '1rem' : 0
          }}>
            <CheckCircle size={20} color="var(--primary-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
            <p style={{ color: 'var(--text-secondary)' }}>{item}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Quranic Evidence</h3>
        <div style={{
          padding: '1rem',
          background: 'var(--surface-hover)',
          borderRadius: 'var(--radius-sm)',
          marginTop: '0.75rem'
        }}>
          <p className="arabic-text" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
            {secondComingInfo.quranicEvidence.arabic}
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            "{secondComingInfo.quranicEvidence.translation}"
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            — {secondComingInfo.quranicEvidence.reference}
          </p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>Hadith Evidence</h3>
        <div style={{
          padding: '1rem',
          background: 'var(--surface-hover)',
          borderRadius: 'var(--radius-sm)',
          marginTop: '0.75rem',
          borderLeft: '3px solid var(--secondary-color)'
        }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            "{secondComingInfo.hadithEvidence.text}"
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            — {secondComingInfo.hadithEvidence.source}
          </p>
        </div>
      </div>
    </div>
  )
}
