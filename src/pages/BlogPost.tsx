import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import data from '../data/blogs.json'

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const posts = (data.posts || []) as any[]
  const post = posts.find((p) => String(p.id) === id)

  if (!post) {
    return (
      <div className="text-center py-20 space-y-4" dir="rtl">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">المقال غير موجود</h2>
        <p className="text-slate-500">قد يكون المقال تم حذفه أو أن الرابط غير صحيح.</p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          العودة للمدونة
        </button>
      </div>
    )
  }

  // مقالات مقترحة
  const relatedPosts = posts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  // استخراج اسم الكاتب بحسب هيكلية البيانات
  const authorName = typeof post.author === 'object' ? post.author?.name : post.author || 'محرر عدسة'

  return (
    <article className="max-w-4xl mx-auto space-y-8 py-6" dir="rtl">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للخلف</span>
        </button>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {post.category && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
              {post.category}
            </span>
          )}
          {post.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50">
              مقال مميز
            </span>
          )}
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 pt-2 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-indigo-500" />
            <span className="font-medium text-slate-700 dark:text-slate-300">{authorName}</span>
          </div>
          {post.date && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span>{post.date}</span>
            </div>
          )}
          {post.readTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Cover Image */}
      {post.image && (
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 aspect-video bg-slate-100 dark:bg-slate-800">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
        {post.excerpt && (
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border-r-4 border-indigo-600">
            {post.excerpt}
          </p>
        )}

        <div className="whitespace-pre-line text-base leading-8">
          {post.content || post.excerpt}
        </div>
      </div>

      {/* Tags Section */}
      {Array.isArray(post.tags) && post.tags.length > 0 && (
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-slate-400" />
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">مقالات ذات صلة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related: any) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 hover:shadow-md transition-all"
              >
                {related.image && (
                  <img src={related.image} alt={related.title} className="w-20 h-20 rounded-xl object-cover" />
                )}
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-slate-500">{related.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}