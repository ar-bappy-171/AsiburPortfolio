"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

type ToastContextValue = { show: (msg: string) => void };
const ToastContext = createContext<ToastContextValue>({ show: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

/**
 * Toast notification provider + renderer. Mount once near the root.
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((m: string) => {
    setMsg(m);
    setVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2200);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className={"toast" + (visible ? " show" : "")} id="toast" role="status" aria-live="polite">
        {msg}
      </div>
    </ToastContext.Provider>
  );
}
