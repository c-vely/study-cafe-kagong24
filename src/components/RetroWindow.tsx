"use client";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function RetroWindow({ title, children, className = "" }: RetroWindowProps) {
  return (
    <div className={`retro-window ${className}`}>
      <div className="retro-title-bar">
        <span className="title">{title}</span>
        <div className="window-buttons">
          <div className="window-btn">_</div>
          <div className="window-btn">□</div>
          <div className="window-btn">×</div>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}
