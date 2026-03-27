import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Sessions — Benoit',
  description: 'Book a free 30-minute AI session. Tailored for beginners and AI professionals.',
}

export default function AiSessionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
