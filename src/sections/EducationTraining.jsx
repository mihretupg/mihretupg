import { GraduationCap, Sparkles } from "lucide-react";
import MiniSection from "../components/MiniSection";
import { education, training } from "../data/portfolio";

function EducationTraining() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <MiniSection id="education" icon={GraduationCap} label="Education" {...education} />
        <MiniSection id="training" icon={Sparkles} label="Training" {...training} />
      </div>
    </section>
  );
}

export default EducationTraining;
