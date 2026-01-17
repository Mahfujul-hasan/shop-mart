"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { FieldSeparator } from "./ui/field";

/* ------------------ Validation Schema ------------------ */
const formSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm({callbackUrl}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setValue } = form;

  const fillDemoCredentials = () => {
    setValue("email", "demouser@gmail.com");
    setValue("password", "123456");
  };

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(values) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl,
    });
    console.log("Login Data:", values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="secondary" className="w-full">
            Login
          </Button>
        </form>
      </Form>

      <FieldSeparator className={"my-5"}>Or continue with</FieldSeparator>
      {/* Demo Button */}
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={fillDemoCredentials}
      >
        Use Demo Account
      </Button>
    </div>
  );
}
