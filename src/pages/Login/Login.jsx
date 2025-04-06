import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

export default function Login() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 container h-screen">
        <LoginForm/>
        <LoginImage/>
    </section>
  )
}
