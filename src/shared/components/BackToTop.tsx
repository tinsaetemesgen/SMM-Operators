import { MoveUp } from 'lucide-react';

const BackToTop = () => {
  return (
    <a
      href="#hero"
      className="flex w-40 items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-amber-300 hover:text-amber-300"
    >
      <MoveUp className="h-4 w-4 text-amber-300" />
      <span>Back to Top</span>
    </a>
  )
}

export default BackToTop
