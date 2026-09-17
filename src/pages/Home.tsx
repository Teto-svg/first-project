import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Sparkles,
  PenLine,
  FolderOpen,
  Users,
  FileText,
  SlidersHorizontal,
  Mountain,
  User,
  Sun,
  Settings2,
  Calendar,
  Clock,
  Mail
} from 'lucide-react'

const latestBlogs = [
  { id: '1', title: 'إتقان تصوير الساعة الذهبية: دليل شامل', excerpt: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600', category: 'إضاءة', author: 'سالم أحمد', date: '15 يناير 2026', readTime: '8 دقائق للقراءة' },
  { id: '2', title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية', excerpt: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', category: 'بورتريه', author: 'محمد علي', date: '12 يناير 2026', readTime: '6 دقائق للقراءة' },
  { id: '3', title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف', excerpt: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600', category: 'مناظر طبيعية', author: 'إبراهيم حسن', date: '10 يناير 2026', readTime: '10 دقائق للقراءة' }
]

const featured = latestBlogs[0]

const categories = [
  { name: 'تقنيات', count: 5, icon: SlidersHorizontal, active: true },
  { name: 'مناظر طبيعية', count: 2, icon: Mountain },
  { name: 'بورتريه', count: 3, icon: User },
  { name: 'إضاءة', count: 3, icon: Sun },
  { name: 'معدات', count: 3, icon: Settings2 }
]

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">
          <Sparkles size={14} />
          <span>مرحباً بك في عدسة</span>
        </div>

        <h1>اكتشف فن <span>التصوير الفوتوغرافي</span></h1>

        <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/blog" className="btn-primary">
            استكشف المقالات
            <ArrowLeft size={16} />
          </Link>
          <Link to="/about" className="btn-secondary">اعرف المزيد</Link>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <PenLine className="stat-icon" size={20} />
            <h4>6</h4>
            <p>كاتب</p>
          </div>
          <div className="stat-card">
            <FolderOpen className="stat-icon" size={20} />
            <h4>4</h4>
            <p>تصنيفات</p>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" size={20} />
            <h4 style={{ color: 'var(--primary)' }}>10 ألف+</h4>
            <p>قارئ شهري</p>
          </div>
          <div className="stat-card">
            <FileText className="stat-icon" size={20} />
            <h4>+50</h4>
            <p>مقالة</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-block">
        <div className="section-head">
          <span className="badge">مقالات مختارة</span>
          <h2>محتوى منتقى لبدء رحلة تعلمك</h2>
          <Link to="/blog" className="section-link">عرض الكل ←</Link>
        </div>

        <div className="featured-card">
          <div className="featured-img">
            <img src={featured.image} alt={featured.title} />
            <span className="featured-tag">مميز</span>
          </div>
          <div className="featured-info">
            <span className="badge">{featured.category}</span>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <div className="featured-meta">
              <span>{featured.author}</span>
              <span>{featured.date}</span>
            </div>
            <Link to={`/blog/${featured.id}`} className="btn-primary" style={{ marginTop: '12px' }}>
              اقرأ المقال
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-block">
        <div className="section-head center">
          <span className="badge">التصنيفات</span>
          <h2>استكشف حسب الموضوع</h2>
          <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.name} className={`cat-card ${cat.active ? 'active' : ''}`}>
                <Icon size={22} />
                <h4>{cat.name}</h4>
                <p>{cat.count} مقالة</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section-block">
        <div className="section-head">
          <span className="badge">الأحدث</span>
          <h2>أحدث المقالات</h2>
          <Link to="/blog" className="section-link">عرض جميع المقالات ←</Link>
        </div>

        <div className="grid-3">
          {latestBlogs.map((blog) => (
            <div key={blog.id} className="card">
              <div>
                <div className="card-image-wrapper">
                  <img src={blog.image} alt={blog.title} className="card-image" />
                  <span className="card-tag">{blog.category}</span>
                </div>
                <div className="card-meta">
                  <span><Clock size={13} /> {blog.readTime}</span>
                  <span><Calendar size={13} /> {blog.date}</span>
                </div>
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-desc">{blog.excerpt}</p>
              </div>
              <div className="card-footer">
                <span>{blog.author}</span>
                <Link to={`/blog/${blog.id}`}>اقرأ المزيد ←</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-card">
        <div className="newsletter-icon">
          <Mail size={24} />
        </div>
        <h2>اشترك في نشرتنا الإخبارية</h2>
        <p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

        <div className="newsletter-form">
          <button className="btn-primary">اشترك الآن</button>
          <input type="email" placeholder="أدخل بريدك الإلكتروني" />
        </div>

        <div className="newsletter-footer">
          <div className="avatar-stack">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
          </div>
          <span className="newsletter-note">انضم لـ 10,000+ مصور · بدون إزعاج · إلغاء الاشتراك في أي وقت</span>
        </div>
      </section>
    </div>
  )
}