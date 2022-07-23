import Head from "../../node_modules/next/head";
import Image from "../../node_modules/next/image";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import { Button } from "../components/ui/Button/index";
import { Input } from "../components/ui/Input/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzeria - Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Pizzeria" />

        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="Type your e-mail" />
            <Input type="password" placeholder="Type your password" />
            <Button type="submit" loading={false}>Login</Button>
          </form>

          <a className={styles.text}>Sign up</a>

        </div>

      </div>
    </>
  )
}
