"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";
const SESSION_DURATION = 60 * 60 * 24 * 7;

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  // Create session cookie
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // milliseconds
  });

  // Set cookie in the browser
  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}


export async function SignUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const User = await db.collection("users").doc(uid).get();
    if (User.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in.",
      };
    }
    await db.collection("users").doc(uid).set({
      name,
      email,
    });

    return {
        success: true,
        message: "Account created successfully. Please sign in.",
    };
  } catch (error: any) {
    console.error("Error signing up user:", error);

    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use.",
      };
    }

    return {
      success: false,
      message: "Failed to create an account.",
    };
  }
}

export async function SignIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const User = await auth.getUserByEmail(email);
    if (!User) {
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };
    }
    await setSessionCookie(idToken);
  } catch (error: any) {
    console.error("Error signing in user:", error);
    return {
      success: false,
      message: "Failed to log into an account.",
    };
  }
}

// Sign out user by clearing the session cookie
export async function signOut() {
    const cookieStore = await cookies();
  
    cookieStore.delete("session");
  }

  export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;

    if (!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const user = await db.collection("users").doc(decodedClaims.uid).get();

        if (!user.exists) {
            return null;
        }

        return {
            ...user.data(),
            id: user.id,
        } as User;
    } catch (error) {
      console.error("Error verifying session cookie:", error);
      return null;
    }
  }

  export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
  }

 