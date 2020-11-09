import styles from "../styles/Home.module.css";
import Cardx from "../components/Cardx";


export default function Home() {
  return (
    <div className={styles.container}>
       
      <main className={styles.main}>
      <div className="py-2">
        <h1 className="text-5xl text-center text-accent-1 ">
          Next.js + Tailwind CSS
        </h1>
     <div>
       <Cardx/>
     </div>
        
      </div>
      </main>
    </div>
  );
}
