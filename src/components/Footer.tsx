import { Camera, GitBranch, Video, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div style={{ paddingLeft: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '8px', borderRadius: '10px' }}>
                <Camera size={20} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 900 }}>عدسة</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '16px' }}>
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="social-links" style={{ justifyContent: 'flex-start' }}>
              <a href="#" className="social-icon"><Video size={16} /></a>
              <a href="#" className="social-icon"><GitBranch size={16} /></a>
              <a href="#" className="social-icon"><Globe size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>استكشف</h4>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>التصنيفات</h4>
            <ul className="footer-links">
              <li><Link to="/blog">إضاءة</Link></li>
              <li><Link to="/blog">بورتريه</Link></li>
              <li><Link to="/blog">مناظر طبيعية</Link></li>
              <li><Link to="/blog">تقنيات</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ابقى على اطلاع</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: '#fff',
                  width: '100%'
                }}
              />
              <button className="btn-primary" style={{ justifyContent: 'center' }}>اشترك</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 عدسة. جميع الحقوق محفوظة.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}>سياسة الخصوصية</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}