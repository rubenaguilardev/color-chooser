import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type User = { email: string };

type Session = { user: User };

type AuthContextValue = {
  session: Session | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);

  const login = useCallback((email: string) => {
    setSession({ user: { email } });
  }, []);

  const logout = useCallback(() => {
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({ session, login, logout }),
    [login, logout, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export type { Session };
