import { Terminal } from "lucide-react";

export function TerminalLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary/10 p-2 rounded-lg">
        <Terminal className="w-5 h-5 text-primary" />
      </div>
      <span className="font-mono font-bold text-lg tracking-tight text-primary">
        Nikhil
      </span>
    </div>
  );
}
