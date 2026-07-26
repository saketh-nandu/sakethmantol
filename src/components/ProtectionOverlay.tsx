import React, { useEffect, useState, useCallback } from 'react';

type BlurReason = 'screenshot' | 'recording' | null;

export const ProtectionOverlay: React.FC = () => {
  const [blurReason, setBlurReason] = useState<BlurReason>(null);

  const triggerBlur = useCallback((reason: BlurReason) => {
    setBlurReason(reason);
  }, []);

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  const dismissScreenshot = useCallback(() => {
    setBlurReason(null);
  }, []);

  useEffect(() => {
    // ── Disable right-click context menu ──────────────────────────────
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // ── Disable drag on images/videos ─────────────────────────────────
    const blockDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    // ── Block text selection via CSS (done in index.css too) ──────────
    const blockSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      // Allow selection inside input/textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      e.preventDefault();
    };

    // ── Block copy / cut ──────────────────────────────────────────────
    const blockCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      e.preventDefault();
      e.clipboardData?.clearData();
    };

    // ── Keyboard shortcut handler ──────────────────────────────────────
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const inInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      const ctrl = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // Allow typing in inputs/textareas freely
      if (inInput) return;

      // Screenshot: Ctrl/Meta + Shift + S  or  PrintScreen
      if ((ctrl && e.shiftKey && key === 's') || e.key === 'PrintScreen') {
        e.preventDefault();
        triggerBlur('screenshot');
        // Auto-dismiss after 10 seconds
        setTimeout(() => setBlurReason((r) => (r === 'screenshot' ? null : r)), 10000);
        return;
      }

      // Screen recording: Ctrl/Meta + Shift + R  (OBS / Snipping tool shortcut)
      if (ctrl && e.shiftKey && key === 'r') {
        e.preventDefault();
        triggerBlur('recording');
        // Recording blur only clears on reload — no auto-dismiss
        return;
      }

      // Block all other Ctrl/Meta combos (Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+A, F12, etc.)
      const blockedKeys = ['c', 'u', 's', 'a', 'p', 'f12', 'i', 'j'];
      if (ctrl && blockedKeys.includes(key)) {
        e.preventDefault();
        return;
      }
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockDrag);
    document.addEventListener('selectstart', blockSelectStart);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('selectstart', blockSelectStart);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerBlur]);

  if (!blurReason) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(17,17,17,0.55)' }}
    >
      {blurReason === 'screenshot' && (
        <div className="flex flex-col items-center gap-6 text-center px-8">
          <span className="text-6xl select-none">📸</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            Sorry bro, u can't take a screenshot
          </h2>
          <p className="font-mono text-sm text-[#AAAAAA] uppercase tracking-widest">
            Content is protected · Auto-clearing in 10s
          </p>
          <button
            onClick={dismissScreenshot}
            className="mt-2 px-6 py-2.5 bg-[#FFFFFF] text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#ECECEC] transition-colors cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {blurReason === 'recording' && (
        <div className="flex flex-col items-center gap-6 text-center px-8">
          <span className="text-6xl select-none">🎥</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            No access bro, recording is blocked
          </h2>
          <p className="font-mono text-sm text-[#AAAAAA] uppercase tracking-widest">
            Screen recording detected · Reload to continue
          </p>
          <button
            onClick={handleReload}
            className="mt-2 px-6 py-2.5 bg-[#FFFFFF] text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#ECECEC] transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      )}
    </div>
  );
};
