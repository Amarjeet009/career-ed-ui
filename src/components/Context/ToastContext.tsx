'use client';
import { createContext, useContext, useState } from 'react'


type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

const ToastContext = createContext<{
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
} | null>(null)

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => removeToast(id), 3000)
  }

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-4 z-10">
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`relative w-96 min-h-16 px-6 py-4 rounded-lg shadow-lg text-white animate-slide-in flex items-center justify-between gap-4 ${
              type === 'success'
                ? 'bg-green-600'
                : type === 'error'
                ? 'bg-red-600'
                : 'bg-blue-600'
            }`}
          >
            <span className="text-base">{message}</span>
            <button
              onClick={() => removeToast(id)}
              className="text-white hover:text-gray-200 text-xl font-bold"
              aria-label="Close toast"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider;

export const useToast = () => {
    const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within ToastProvider')
  return context
}