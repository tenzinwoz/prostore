"use server";
import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "@/lib/validator";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const { email, password } = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", { email, password });

    return { success: true, message: "Sign in successful" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Sign in failed" };
  }
}

// Sign out the user
export async function signOutUser() {
  await signOut();
}
