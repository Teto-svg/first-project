import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const categories = ['جميع المقالات', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات']
const PAGE_SIZE = 3

const blogs = [
  { id: '1', title: 'إتقان تصوير الساعة الذهبية', excerpt: 'دليل شامل للتعامل مع الإضاءة الدافئة في التصوير.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600', category: 'إضاءة', author: 'سالم أحمد' },
  { id: '2', title: 'أسرار تصوير البورتريه', excerpt: 'كيف تلتقط صور شخصية معبرة وتبرز تفاصيل الوجه.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', category: 'بورتريه', author: 'محمد علي' },
  { id: '3', title: 'دليل تصوير المناظر الطبيعية', excerpt: 'أفضل الإعدادات لالتقاط جمال الطبيعة والحدّة العالية.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600', category: 'مناظر طبيعية', author: 'إبراهيم حسن' },
  { id: '4', title: 'قواعد التكوين الفوتوغرافي', excerpt: 'تعلم قواعد التكوين الأساسية التي يستخدمها المحترفون لإنشاء صور مؤثرة بصرياً.', image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=600', category: 'تقنيات', author: 'ليث محمود' },
  { id: '5', title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي', excerpt: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600', category: 'تقنيات', author: 'داود خالد' },
  { id: '6', title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية', excerpt: 'اكتشف كيف تحول هاتفك الذكي لأداة تصوير قوية مع هذه النصائح والتقنيات.', image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=600', category: 'معدات', author: 'جمال عبدالله' },
  { id: '7', title: 'اختيار معدات الإضاءة المناسبة', excerpt: 'دليل لاختيار الفلاشات ومصادر الإضاءة المناسبة لاحتياجاتك.', image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=600', category: 'إضاءة', author: 'سالم أحمد' },
  { id: '8', title: 'تصوير البورتريه في الإضاءة الطبيعية', excerpt: 'كيف تستغل ضوء الشمس لصور بورتريه دافئة وطبيعية.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', category: 'بورتريه', author: 'محمد علي' },
  { id: '9', title: 'أفضل عدسات تصوير المناظر الطبيعية', excerpt: 'مراجعة لأفضل العدسات المتاحة لهواة تصوير الطبيعة.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600', category: 'معدات', author: 'إبراهيم حسن' }
]

export default function Blog() {
  const [activeCat, setActiveCat] = useState('جميع المقالات')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = blogs.filter(b => {
    const matchCat = activeCat === 'جميع المقالات' || b.category === activeCat
    const matchSearch = b.title.includes(search) || b.excerpt.includes(search)
    return matchCat && matchSearch
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [activeCat, search])

  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', margin: '40px 0 20px' }}>
        <span className="badge">مدونتنا</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>استكشف مقالاتنا</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>اكتشف الدروس والرؤى وأفضل الممارسات</p>
      </div>

      {/* Filter and Search */}
      <div className="filter-bar">
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`cat-btn ${activeCat === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="ابحث في المقالات..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid-3">
        {paginated.map((blog) => (
          <div key={blog.id} className="card">
            <div>
              <img src={blog.image} alt={blog.title} className="card-image" />
              <span className="badge" style={{ marginBottom: '8px' }}>{blog.category}</span>
              <h3 className="card-title">{blog.title}</h3>
              <p className="card-desc">{blog.excerpt}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{blog.author}</span>
              <Link to={`/blog/${blog.id}`} style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.875rem' }}>
                اقرأ المزيد ←
              </Link>
            </div>
          </div>
        ))}

        {paginated.length === 0 && (
          <p style={{ color: 'var(--text-muted)', gridColumn: '1 / -1', textAlign: 'center' }}>
            لا توجد مقالات مطابقة.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`page-btn ${page === p ? 'active' : ''}`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}