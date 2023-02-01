import Button from "./atoms/button";
import Input from "./atoms/input";
import { auth } from "../lib/mutations";
import Router, { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState } from "react";

type Props = {
  mode: "signin" | "signup";
};

export default function AuthForm(props: Props) {
  const { mode } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  }

  return (
    <div className="bg-gradient-to-b from-zinc-800 to-black w-screen h-screen">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded w-2/6 h-3/5 flex justify-evenly flex-col items-center text-white"
        >
          <h2>Signin to your account</h2>
          <div>
            <h2>Email</h2>
            <input
              placeholder="john@doe.com"
              type="email"
              name="email"
              className={
                "p-2 w-96 h-12 rounded bg-zinc-900 border border-zinc-600"
              }
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              placeholder="123456 is not a good idea"
              type="password"
              name="password"
              className={
                "p-2 w-96 h-12 rounded bg-zinc-900 border border-zinc-600"
              }
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" isLoading={isLoading}>
            {mode}
          </Button>
        </form>
      </div>
    </div>
  );
}
