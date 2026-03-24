import type { JSX } from "react";

interface SkillsType {
  id: number;
  name: string;
  icon: JSX.Element;
  percentage: number;
  color: string;
}

function SkillCard({ skillData }: { skillData: SkillsType }) {
  return (
    <div className="group bg-neutral-900/50 border group border-white/5 p-6 rounded-2xl hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <span className={`text-2xl ${skillData.color}`}>
            {skillData.icon}
          </span>
          <h3 className="text-xl font-bold text-white">{skillData.name}</h3>
        </div>
        <span className={`font-mono font-bold ${skillData.color}`}>
          {skillData.percentage}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* Actual Progress */}
        <div
          className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]`}
          style={{ width: `${skillData.percentage}%` }}
        />
      </div>

      {/* Subtle glow effect on hover */}
      <div className="mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-xs text-gray-500 italic">
        Experience with complex {skillData.name} architectures.
      </div>
    </div>
  );
}

export default SkillCard;
