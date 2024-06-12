"use client";
import "./globals.css";
import { useRouter } from "@/node_modules/next/navigation";
import { url } from "inspector";
const IndexPage = () => {
  const router = useRouter();

  const ExploreBtn = () => {
    router.push("/Country");
  };
  const infoList = [
    {
      title: "University",
      description:
        "Get the information about University/Collages around the world.",
      image: "/image/uni_infoCard.png",
    },
    {
      title: "Country",
      description: "Include 20+ countries, just what you need to apply for.",
      image: "/image/country_infoCard.png",
    },
    {
      title: "Visa",
      description:
        "Get the step by step details and knowledge about applying visa.",
      image: "/image/visa_infoCard.png",
    },
    {
      title: "Passport",
      description: "Get passport information, what and how you can apply.",
      image: "/image/pass_infoCard.png",
    },
  ];
  return (
    <div className="homePage">
      <div className="firsttDiv">
        <div className="headTitle">
          <h1 className="titleDiv">Navigate Foreign Universities With Ease </h1>
        </div>

        <div className="pDiv">
          <p className="pTag">
            Study abroad with Foreign Info Myanmar. Discover universities,{" "}
            <br></br>
            simplify your application, and get clear visa and passport guidance.
            <br></br>
            Start your global education adventure with us.
          </p>
        </div>

        <div>
          <button className="button-77" role="button" onClick={ExploreBtn}>
            Explore
          </button>
        </div>
      </div>
      <div className="containerSecondDiv">
        <div className="secondDiv">
          {infoList.map((info) => {
            return (
              <div
                className="secDiv-1"
                key={info.title}
                style={{ backgroundImage: `url(${info.image})` }}
              >
                <h2 className="secHeading">{info.title}</h2>
                <p className="pTag">
                  <i>{info.description}</i>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
