import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import { Button } from "../../components/ui/Button/index";
import { Input } from "../../components/ui/Input/index";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Pizzeria - Sign up</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Pizzeria" />

        <div className={styles.login}>
          <h1>Sign up</h1>
          <form>
            <Input type="text" placeholder="Type your name" />
            <Input type="text" placeholder="Type your e-mail" />
            <Input type="password" placeholder="Type your password" />
            <Button type="submit" loading={false}>Sign up</Button>
          </form>

          <Link href="/">
            <a className={styles.text}>Already signed up, login</a>
          </Link>

        </div>

      </div>
    </>
  )
}
