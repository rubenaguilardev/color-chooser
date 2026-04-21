import { Button } from "./components/Button";
import { FormInput } from "./components/FormInput";
import { Screen } from "./components/Screen";
import { Subtitle, Title } from "./components/Typography";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session, login, logout } = useAuth();

  const handleLogin = () => {
    login(email);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    logout();
    Alert.alert("Logged out", "Your session has been cleared.");
  };

  return (
    <Screen className="justify-center items-center px-6">
      {/* Container */}
      <View className="w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <Title className="mb-2 text-center">{session ? "Your Account" : "Welcome Back"}</Title>
        <Subtitle className="text-center mb-8">
          {session ? "You are currently signed in" : "Sign in to your account"}
        </Subtitle>

        {session ? (
          <>
            <Subtitle className="text-center mb-6">Signed in as {session.user.email}</Subtitle>
            <Button onPress={handleLogout} label="Log Out" className="bg-red-600" />
          </>
        ) : (
          <>
            {/* Email Input */}
            <FormInput
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="sentences"
              editable
            />

            {/* Password Input */}
            <FormInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable
            />

            {/* Login Button */}
            <Button onPress={handleLogin} label="Sign In" />
          </>
        )}

        <Link href="/about" className="mt-6 self-center">
          <Text className="text-blue-600 font-semibold">Go to About</Text>
        </Link>
      </View>
    </Screen>
  );
}