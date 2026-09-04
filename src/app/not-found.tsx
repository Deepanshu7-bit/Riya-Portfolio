import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-ink text-white flex items-center justify-center font-display font-black text-2xl border-2 border-ink shadow-tactile">
        404
      </div>
      <div className="space-y-2">
        <h1 className="font-display font-black text-4xl sm:text-6xl text-ink uppercase tracking-tight">
          Page Not Found
        </h1>
        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md">
          The creative page or project you are looking for has been relocated or is currently in the draft room.
        </p>
      </div>
      <Link href="/" className="btn-tactile-primary inline-flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home Portfolio</span>
      </Link>
    </div>
  );
}
