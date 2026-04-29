import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Screen } from "../components/Screen";
import { Subtitle, Title } from "../components/Typography";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Missing information", "Please enter your name, email, and password.");
      return;
    }

    try {
      await signup(email, password, name);
      setName("");
      setEmail("");
      setPassword("");
      Alert.alert("Account created", "Your account has been created.");
    } catch (error) {
      console.error("Signup failed", error);
      Alert.alert("Signup failed", "Unable to create your account right now. Please try again.");
    }
  };

  return (
    <Screen className="justify-center items-center px-6">
      <View className="w-full bg-white rounded-2xl shadow-lg p-8">
        <Title className="mb-2 text-center">Create Account</Title>
        <Subtitle className="text-center mb-8">Sign up for a new account</Subtitle>

        <FormInput
          label="Name"
          placeholder="Your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          editable
        />

        <FormInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable
        />

        <FormInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable
        />

        <Button onPress={handleSignup} label="Sign Up" />

        <Link href="/" className="mt-6 self-center">
          <Text className="text-blue-600 font-semibold">Back to sign in</Text>
        </Link>
      </View>
    </Screen>
  );
}
