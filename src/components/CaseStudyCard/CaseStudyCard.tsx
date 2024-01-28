import Image from "next/image";

const CaseStudyCard = () => {
  return (
    <div className="flex gap-4 w-full h-full max-w-[948px]">
      <div className="w-[35%] max-w-[320px] relative flex justify-center items-center">
        <Image
          src="https://assets-global.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa4eb_1612099657282%25201-p-500.png"
          alt=""
          width={320}
          height={390}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-[70%] p-10 bg-white">
        <p>
          &quot;My journey with Pesto was the key to unlocking my dream of
          remote work, allowing me to cherish precious moments with my family
          while achieving financial satisfaction. Pesto connected me with top
          international companies, making the remote work revolution a
          reality.&quot;
        </p>
        <div>
          <h2>Sagar Bakhtar</h2>
          <p>Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
