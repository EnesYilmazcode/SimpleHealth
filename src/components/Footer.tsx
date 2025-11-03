export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left order-2 sm:order-1">
            © 2025 SimpleHealth. Educational use only. Not medical advice.
          </p>
          
          <nav className="flex gap-6 text-sm order-1 sm:order-2">
            <a 
              href="#about" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded"
            >
              About
            </a>
            <a 
              href="#privacy" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded"
            >
              Privacy
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

