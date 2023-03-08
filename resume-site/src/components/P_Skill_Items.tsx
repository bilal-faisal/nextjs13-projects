import Skill_Item from "@/components/Skill_Item";

const P_Skill_Items = () => {
  return (
    <div className="flex py-5 flex-wrap">
      <Skill_Item name={"Self-Motivated"} />
      <Skill_Item name={"Time Management"} />
      <Skill_Item name={"Team Player"} />
    </div>
  );
};

export default P_Skill_Items;
