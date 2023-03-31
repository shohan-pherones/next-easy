import Image from "next/image";
import img1 from "../public/images/1.jpg";
import img2 from "../public/images/2.jpg";
import img3 from "../public/images/3.jpg";
import img4 from "../public/images/4.jpg";
import img5 from "../public/images/5.jpg";

const Sports = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl">Sports</h1>

      {/* MULTIPLE SPORTS IMAGES */}
      <div className="images">
        <Image
          src={img1}
          alt="sport 1"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img2}
          alt="sport 2"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img3}
          alt="sport 3"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img4}
          alt="sport 4"
          height="500"
          width="800"
          placeholder="blur"
        />
        <Image
          src={img5}
          alt="sport 5"
          height="500"
          width="800"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Sports;
