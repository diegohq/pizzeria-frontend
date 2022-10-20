import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext } from "react";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Button } from "../components/ui/Button/index";
import { Input } from "../components/ui/Input/index";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    await signIn({
      email: "email@email.com",
      password: "123"
    });
  }


  return (
    <>
      <Head>
        <title>Pizzeria - Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Pizzeria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input type="text" placeholder="Type your e-mail" />
            <Input type="password" placeholder="Type your password" />
            <Button type="submit" loading={false}>Login</Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Sign up</a>
          </Link>

        </div>

      </div>
    </>
  )
}
