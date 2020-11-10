import Cardx from "../components/Cardx";

export default function Home() {


  return (
    <div className='w-full mx-auto px-8 pt-16' >
      <div className="">
        <h1 className="text-5xl text-center text-accent-1 ">
          Next.js + Tailwind CSS
        </h1>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
          <Cardx />
          <Cardx />
          <Cardx />
        </div>
      </div>
    </div>
  );
}
