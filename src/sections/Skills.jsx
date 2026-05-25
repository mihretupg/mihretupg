import {
  Atom,
  Boxes,
  Braces,
  CalendarDays,
  Chrome,
  ClipboardList,
  Code2,
  Database,
  FileBarChart,
  FilePenLine,
  FileSpreadsheet,
  FolderOpen,
  Globe2,
  Headphones,
  Mail,
  Megaphone,
  MonitorCog,
  PackageCheck,
  Palette,
  Search,
  SearchCheck,
  Send,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Slack,
  Tags,
  Trello,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import Section from "../components/Section";
import { skillGroups } from "../data/portfolio";

const skillIcons = {
  code: Code2,
  monitor: MonitorCog,
  shop: ShoppingBag,
  tools: Wrench,
};

const itemIcons = {
  "Email Management": Mail,
  Scheduling: CalendarDays,
  "Calendar Management": CalendarDays,
  "Data Entry": Database,
  "File Organization": FolderOpen,
  Research: Search,
  Reporting: FileBarChart,
  "Project Coordination": ClipboardList,
  "Communication Support": Users,
  Shopify: ShoppingCart,
  WordPress: Globe2,
  "Product Listing": Tags,
  "Inventory Management": Boxes,
  "Website Management": MonitorCog,
  "Order Support": PackageCheck,
  "Content Updates": FilePenLine,
  "SEO Updates": SearchCheck,
  JavaScript: Braces,
  React: Atom,
  "Tailwind CSS": Palette,
  HTML: Code2,
  CSS: Palette,
  "Responsive Websites": MonitorCog,
  "Website Maintenance": Wrench,
  "Email Campaign Management": Send,
  "Social Media Support": Share2,
  "Customer Support": Headphones,
  "Lead Tracking": ClipboardList,
  "Canva Designs": Palette,
  "Online Community Support": Users,
  "Google Workspace": Chrome,
  "Microsoft Office Tools": FileSpreadsheet,
  Slack,
  Trello,
  Asana: ClipboardList,
  Mailchimp: Mail,
  "Meta Ads Manager": Megaphone,
  Zoom: Video,
};

function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools & Platforms" titleClassName="font-light">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = skillIcons[group.icon];
          return (
            <article className="section-card hover-card group" key={group.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#5C766D]/10 text-[#5C766D] transition duration-200 group-hover:bg-[#5C766D] group-hover:text-[#EDE9E6]">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl font-bold leading-tight text-navy-900">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const ItemIcon = itemIcons[skill] ?? Wrench;

                  return (
                    <span
                      className="skill-pill inline-flex items-center gap-2 transition duration-200 hover:-translate-y-0.5 hover:border-[#5C766D] hover:bg-[#5C766D]/10"
                      key={skill}
                    >
                      <ItemIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#5C766D]" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
