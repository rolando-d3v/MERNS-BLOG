
import Cardx from "../components/Cardx";

export default function Home() {


  return (
    <div className='container-x px-4 md:px-8 pt-16' >
      <div className="">
        <h1 className="text-5xl text-center text-verde-x ">
          Next.js + Tailwind CSS
        </h1>
        <div className="flex flex-wrap">
          <Cardx />
          <Cardx />
          <Cardx />
          <Cardx />
        </div>
      </div>
    </div>
  );
}
