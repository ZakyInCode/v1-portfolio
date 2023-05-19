import NavSkill from "@/src/components/NavSkill";
import { icons_all } from "@/src/components/icons";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-7  w-[80%] mx-auto px-10 pb-5 mt-10  border">
      <div className="font-bold text-4xl font mono mb-5 border">My Skills</div>
      <NavSkill />
      <div className="grid grid-cols-4 text-8xl gap-7 border">
        {icons_all.map((items) => {
          return items;
        })}
      </div>
    </div>
  );
};
export default About;
