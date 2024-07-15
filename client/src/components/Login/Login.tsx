import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen">
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email@example.com" required />
        </div>
        <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link to={"/forgot-password"} className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
              </div>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button variant="ghost" className="w-full bg-blue-500 text-white hover:bg-black hover:text-white">Sign in</Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"} className="underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
          
    </Card>
    </div>
  )
}
