import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldSeparator } from "@/components/ui/field";
import SocialLogin from "@/components/SocialLogin";
import LoginForm from "@/components/LoginForm";


export default function LoginPage({searchParams}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
          <CardDescription className={"text-center"}>
            Please enter your details to sign is to Shop Mart.
          </CardDescription>
        </CardHeader>

        <CardContent>
            <LoginForm callbackUrl={searchParams.callbackUrl || "/"}/>
          <FieldSeparator className={"mt-3"}>Or continue with</FieldSeparator>
          <SocialLogin callbackUrl={searchParams.callbackUrl || "/"} />
          <p className="text-sm text-center text-muted-foreground mt-4">
            Do not have an account?{" "}
            <a href="/register" className="text-secondary underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
