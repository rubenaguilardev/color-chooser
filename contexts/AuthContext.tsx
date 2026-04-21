import * as SecureStore from "expo-secure-store";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type User = { email: string };

type Session = { user: User };

type AuthContextValue = {
  session: Session | null;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

const SESSION_STORAGE_KEY = "auth_session";

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const storedSession = await SecureStore.getItemAsync(SESSION_STORAGE_KEY);
        if (storedSession) {
          setSession(JSON.parse(storedSession) as Session);
        }
      } catch (error) {
        console.warn("Failed to load session from storage", error);
      }
    };

    void loadSession();
  }, []);

  const login = useCallback(async (email: string) => {
    const nextSession = { user: { email } };
    setSession(nextSession);
    await SecureStore.setItemAsync(SESSION_STORAGE_KEY, JSON.stringify(nextSession));
  }, []);

  const logout = useCallback(async () => {
    setSession(null);
    await SecureStore.deleteItemAsync(SESSION_STORAGE_KEY);
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
