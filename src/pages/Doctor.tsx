import { Link } from 'react-router-dom'

export default function Doctor() {
  return (
    <div className="min-h-[calc(100vh-13rem)] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-12 border border-slate-200 dark:border-slate-700">
          <h1 className="text-4xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
            Doctor View
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
            Coming soon.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            We're developing a clinical dashboard with quick access to NCCN prostate cancer pathways and evidence-based decision support.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
