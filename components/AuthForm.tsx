"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "@/firebase/client";
import { SignIn, SignUp } from "@/lib/actions/auth.action";

const authFormSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up"
        ? z
            .string()
            .min(3, { message: "Name must be at least 3 characters long" })
        : z.string().optional(),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {

    const router = useRouter();

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const result = await SignUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        })

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Account created successfully, please sign in");
        router.push("/sign-in");
      } else {
        const { email, password } = values;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error("Sign in failed.");
          return;
        }

        await SignIn({
          email,
          idToken,
        });
        toast.success("Logged in successfully, welcome back!");
        router.push("/");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Failed to sign in. Please check your credentials.");
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-content">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h1 className="tex-primary-100">Titay assistant</h1>
          <h2>Practice job interview with AI</h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your name"
                type="text"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign in" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            className="font-bold text-user-primary ml-1"
            href={!isSignIn ? "/sign-in" : "/sign-up"}
          >
            {!isSignIn ? "Sign in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
