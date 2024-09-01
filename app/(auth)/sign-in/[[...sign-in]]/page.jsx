import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex flex-row h-screen justify-center items-center">
    <SignIn />
  </div>
);
}