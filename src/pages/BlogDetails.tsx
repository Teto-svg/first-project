import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import data from '../data/blogs.json'

// تعريف هيكل المقال كاملاً لمطابقة JSON الباك إند ومنع أي Type Error
export interface BlogPost {
  id: number | string
  slug?: string
  title: string
  excerpt?: string
  content?: string
  category?: string
  image?: string
  date?: string
  readTime?: string
  featured?: boolean
  tags?: string[]
  author?: {
    name: string
    avatar?: string
    role?: string
  }
}

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // تحويل مصفوفة المقالات للنوع المعرف
  const postsList = (data.posts || []) as BlogPost[]

  // البحث عن المقال بواسطة الـ id أو الـ slug
  const blog = postsList.find(
    (item) => String(item.id) === String(id) || item.slug === id
  )

  // اقتراح مقالات ذات صلة
  const relatedBlogs = postsList
    .filter((item) => String(item.id) !== String(blog?.id))
    .filter((item) => !blog?.category || item.category === blog.category)
    .slice(0, 3)

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 text-center" dir="rtl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">المقال غير موجود</h2>
        <p className="text-slate-600 dark:text-slate-400">عذراً، لم نتمكن من العثور على المقال المطلوب.</p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
          العودة للمدونة
        </button>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto space-y-10 pb-16 pt-6" dir="rtl">
      {/* Navigation Back */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
        العودة إلى كافة المقالات
      </Link>

      {/* Main Header */}
      <div className="space-y-4">
        {blog.category && (
          <span className="inline-block px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
            {blog.category}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {blog.title}
        </h1>

        {/* Metadata & Author */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 pt-2">
          {blog.author && (
            <div className="flex items-center gap-3">
              {blog.author.avatar && (
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
              )}
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{blog.author.name}</p>
                {blog.author.role && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">{blog.author.role}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            {blog.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
            )}
            {blog.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.image && (
        <div className="overflow-hidden rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[480px] object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
        {blog.content || blog.excerpt}
      </div>

      {/* Article Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
          <Tag className="h-4 w-4 text-slate-400" />
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">مقالات قد تهمك</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((related) => (
              <BlogCard key={related.id} blog={related as any} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}