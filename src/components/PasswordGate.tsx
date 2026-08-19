import React, { useState, useEffect, FormEvent } from 'react';

const SITE_PASSWORD = 'cruzart2025';
const STORAGE_KEY = 'cruz-interiores-auth';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) return null;

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6">
      <div className="w-full max-w-sm text-center">
        <p className="font-wordmark text-xs text-[var(--color-secondary)] mb-8">
          Cruz &amp; Art Interiores
        </p>

        <h1 className="font-headline-lg-mobile md:font-headline-lg mb-3">Acesso Restrito</h1>

        <p className="text-sm text-[var(--color-outline-variant)] mb-8">
          Este site é propriedade de <strong className="text-[var(--color-secondary)]">C DEV</strong> e seu conteúdo é protegido. O acesso não autorizado é proibido.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Digite a senha"
            autoFocus
            className="w-full px-4 py-3 rounded-md bg-[var(--color-deep-navy)] border border-[var(--color-outline)] text-[var(--color-on-primary)] placeholder:text-[var(--color-outline-variant)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
          />

          {error && (
            <p className="text-sm text-[var(--color-error)]">Senha incorreta. Tente novamente.</p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md bg-[var(--color-secondary)] text-[var(--color-on-secondary)] font-medium hover:opacity-90 transition-opacity"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
