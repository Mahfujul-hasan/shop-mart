"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldSeparator } from "@/components/ui/field";
import SocialLogin from "@/components/SocialLogin";
import RegisterForm from "@/components/RegisterForm";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Create your account
          </CardTitle>
          <CardDescription className={"text-center"}>
            Join our community of premium shoppers today.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Suspense fallback={<p>Loading...</p>}>
            <RegisterForm />
          </Suspense>

          <FieldSeparator className={"mt-3"}>Or continue with</FieldSeparator>
          <SocialLogin />
          <p className="text-sm text-center text-muted-foreground mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-secondary underline">
              Log In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
