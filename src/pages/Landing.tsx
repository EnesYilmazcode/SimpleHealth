import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-[calc(100vh-13rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
            SimpleHealth
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Evidence-based prostate cancer guidance from NCCN guidelines.<br />
            Clear answers with proof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <OptionCard
            to="/patient"
            title="For Patients"
            description="Understand your diagnosis and treatment options with clear, evidence-based information from trusted clinical guidelines."
            icon={<PatientIcon />}
          />
          <OptionCard
            to="/doctor"
            title="For Doctors"
            description="Quick access to NCCN pathway guidelines and decision support for prostate cancer management."
            icon={<DoctorIcon />}
          />
        </div>
      </div>
    </div>
  )
}

interface OptionCardProps {
  to: string
  title: string
  description: string
  icon: React.ReactNode
}

function OptionCard({ to, title, description, icon }: OptionCardProps) {
  return (
    <Link
      to={to}
      className="group bg-white dark:bg-slate-800 rounded-lg p-10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
    >
      <div className="w-12 h-12 mb-6 text-slate-700 dark:text-slate-300 transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        Continue
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

function PatientIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function DoctorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
