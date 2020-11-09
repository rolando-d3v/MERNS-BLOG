import styles from "../styles/Home.module.css";
import Nav from '../components/layout/Nav';

export default function Home() {
  return (
    <div className={styles.container}>
        <Nav />
      <main className={styles.main}>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1 ">
          Next.js + Tailwind CSS
        </h1>
        <button className='btn-blue' >hola</button>

        <div className='card-rol bg-indigo-800' >
            <h4>peru</h4>
        </div>
      </div>
      </main>
    </div>
  );
}
