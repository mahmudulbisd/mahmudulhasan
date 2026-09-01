import { WalleRobot } from "@/components/walle-robot";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center px-6">
        <WalleRobot className="w-32 h-32 mx-auto mb-8 animate-float-slow" />
        <h1 className="mb-4 text-6xl font-black text-[#e8873a] font-display">
          404
        </h1>
        <p className="mb-2 text-xl text-[#f5ecd9] font-display">
          Signal Lost — Page Not Found
        </p>
        <p className="mb-8 text-[#9aa3b8]">
          This route drifted into deep space. Let&apos;s get you back to base.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white font-bold hover:from-[#f2a35f] hover:to-[#c96f2a] transition-all hover:scale-105"
        >
          Return to Home Base
        </a>
      </div>
    </div>
  );
}
