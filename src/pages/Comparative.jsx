import { GitCompare, Check, X } from 'lucide-react'
import { comparativeBeliefs } from '../data/jesusData'

export default function Comparative() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="header-icon" style={{ background: 'linear-gradient(135deg, #00897b, #26a69a)' }}>
          <GitCompare size={28} />
        </div>
        <h1>Comparative View</h1>
        <p className="arabic-title">مقارنة بين الإسلام والمسيحية</p>
        <p>Understanding the differences in beliefs about Jesus</p>
      </div>

      <div className="info-box" style={{ background: 'linear-gradient(135deg, #e0f2f1, #e8f5e9)' }}>
        <h4><GitCompare size={18} /> Purpose</h4>
        <p>
          This comparison is meant for educational purposes to help understand the theological
          differences between Islam and Christianity regarding Prophet Isa (Jesus).
          Both faiths hold him in high regard, though with different understandings of his nature and mission.
        </p>
      </div>

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
              <th style={{ padding: '1rem', textAlign: 'left', width: '30%' }}>Topic</th>
              <th style={{ padding: '1rem', textAlign: 'left', width: '35%' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Islamic Belief
                </span>
              </th>
              <th style={{ padding: '1rem', textAlign: 'left', width: '35%' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Christian Belief
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparativeBeliefs.map((belief, index) => (
              <tr key={index} style={{
                borderBottom: index < comparativeBeliefs.length - 1 ? '1px solid var(--border-color)' : 'none',
                background: index % 2 === 0 ? 'var(--surface)' : 'var(--surface-hover)'
              }}>
                <td style={{
                  padding: '1rem',
                  fontWeight: '600',
                  color: 'var(--primary-color)'
                }}>
                  {belief.topic}
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                  {belief.islamicBelief}
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                  {belief.christianBelief}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Common Ground</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Despite theological differences, Muslims and Christians share many beliefs about Jesus:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Virgin birth through Mary',
            'Performed miracles',
            'Was a righteous and sinless person',
            'Ascended to heaven',
            'Will return before the end of times',
            'Called people to worship God'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={18} color="var(--primary-color)" />
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>Key Differences</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          The fundamental differences center around:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Divine nature of Jesus',
            'The concept of Trinity',
            'Crucifixion and resurrection',
            'Jesus as savior vs prophet'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <X size={18} color="var(--secondary-color)" />
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="info-box" style={{ marginTop: '1.5rem' }}>
        <h4>A Note on Dialogue</h4>
        <p>
          Understanding these differences can foster respectful interfaith dialogue.
          The Quran encourages Muslims to engage with People of the Book (Jews and Christians)
          in the best manner: "And do not argue with the People of the Book except in a way
          that is best" (Quran 29:46).
        </p>
      </div>
    </div>
  )
}
