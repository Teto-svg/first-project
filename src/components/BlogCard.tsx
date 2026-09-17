import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import type { BlogPost } from '../types/blog'

interface BlogCardProps {
  blog: BlogPost
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* الصورة والتصنيف */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium">
            {blog.category}
          </span>
        </div>

        {/* محتوى الكارت */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {blog.readTime}
            </span>
          </div>

          <Link to={`/blog/${blog.slug || blog.id}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
              {blog.title}
            </h3>
          </Link>

          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>
      </div>

      {/* الكاتب والزر */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-700/40 flex items-center justify-between mt-auto">
        {blog.author && (
          <div className="flex items-center gap-2.5">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {blog.author.name}
            </span>
          </div>
        )}

        <Link
          to={`/blog/${blog.slug || blog.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
        >
          اقرأ المزيد
          <ArrowLeft className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  )
}