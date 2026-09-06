import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="text-7xl md:text-8xl font-extrabold text-primary font-display tracking-tight">
          404
        </p>
        <p className="mt-4 mb-2 text-2xl font-bold text-foreground font-display tracking-tight">
          Page Not Found
        </p>
        <p className="mb-8 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:from-primary-hover hover:to-primary transition-all hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
}
