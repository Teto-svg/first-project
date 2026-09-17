import { Globe, Check } from 'lucide-react'

interface Socials {
  linkedin?: string
  github?: string
  twitter?: string
}

interface Author {
  name: string
  role: string
  avatar: string
  socials?: Socials
}

const authors: Author[] = [
  {
    name: 'محمد علي',
    role: 'مصور بورتريه',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
    socials: { linkedin: '#', github: '#', twitter: '#' }
  },
  {
    name: 'إبراهيم حسن',
    role: 'مصور طبيعة',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    socials: { linkedin: '#', github: '#', twitter: '#' }
  },
  {
    name: 'داود خالد',
    role: 'مدرب تصوير',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    socials: { linkedin: '#', github: '#', twitter: '#' }
  },
  {
    name: 'ليث محمود',
    role: 'فنان بصري',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300',
    socials: { linkedin: '#', github: '#', twitter: '#' }
  }
]

export default function About() {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', margin: '40px auto 60px', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '12px' }}>مهمتنا هي الإعلام والإلهام</h1>
        <p style={{ color: 'var(--text-muted)' }}>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>تعرف على كتابنا</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم.</p>
      </div>

      <div className="team-grid">
        {authors.map((author, idx) => (
          <div key={idx} className="author-card">
            <div className="avatar-wrapper">
              <img src={author.avatar} alt={author.name} className="avatar-img" />
              <div className="verified-badge">
                <Check size={12} strokeWidth={3} />
              </div>
            </div>
            <h3 className="author-name">{author.name}</h3>
            <p className="author-role">{author.role}</p>

            {author.socials && (
              <div className="social-links">
                {author.socials.linkedin && (
                  <a href={author.socials.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                    <Globe size={16} />
                  </a>
                )}
                {author.socials.github && (
                  <a href={author.socials.github} className="social-icon" target="_blank" rel="noreferrer">
                    <Globe size={16} />
                  </a>
                )}
                {author.socials.twitter && (
                  <a href={author.socials.twitter} className="social-icon" target="_blank" rel="noreferrer">
                    <Globe size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}