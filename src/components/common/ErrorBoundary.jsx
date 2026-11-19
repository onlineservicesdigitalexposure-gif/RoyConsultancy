import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 text-accent-dark flex items-center justify-center font-bold text-xl">
              RC
            </div>
            <h2 className="font-heading text-xl font-bold text-primary">
              ROY CONSULTANCY
            </h2>
            <p className="text-sm text-text-muted">
              Something unexpected occurred while loading this view. Please refresh the page to reload the application.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-light transition-colors cursor-pointer"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
