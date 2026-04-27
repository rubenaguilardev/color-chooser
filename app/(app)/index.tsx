import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Screen } from "../components/Screen";
import { Subtitle, Title } from "../components/Typography";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("ben@gmail.com");
  const [password, setPassword] = useState("123123");
  const { session, login, logout } = useAuth();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing credentials", "Please enter both email and password.");
      return;
    }

    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed", error);
      Alert.alert("Login failed", "Unable to sign in right now. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("Logged out", "Your session has been cleared.");
    } catch (error) {
      console.error("Logout failed", error);
      Alert.alert("Logout failed", "Unable to sign out right now. Please try again.");
    }
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