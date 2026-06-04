import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Database,
  FileBarChart,
  FilePenLine,
  FileSpreadsheet,
  FolderOpen,
  Headphones,
  Mail,
  MessageSquareText,
  Plane,
  ReceiptText,
  SendHorizontal,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import Section from "../components/Section";
import { serviceGroups } from "../data/portfolio";

const skillIcons = {
  admin: ClipboardList,
  communication: MessageSquareText,
  sales: Target,
  customer: Headphones,
  operations: ShieldCheck,
  scheduling: CalendarDays,
  data: Database,
  billing: ReceiptText,
};

const itemIcons = {
  "Calendar management": CalendarDays,
  "Inbox and email organization": Mail,
  "Appointment scheduling": CalendarDays,
  "Data entry and file organization": FolderOpen,
  "Document preparation": FilePenLine,
  "General admin support": ClipboardList,
  "Client follow-ups": SendHorizontal,
  "Appointment confirmations": CheckCircle2,
  "Reminder messages": MessageSquareText,
  "Email and message responses": Mail,
  "Inquiry management": Users,
  "Professional client communication": MessageSquareText,
  "Lead follow-up": Target,
  "CRM updates": Database,
  "Prospect tracking": ClipboardList,
  "Quote and proposal follow-up": FileSpreadsheet,
  "Sales appointment coordination": CalendarDays,
  "Client pipeline organization": ClipboardList,
  "Customer inquiries": Headphones,
  "New client onboarding support": Users,
  "Check-in messages": MessageSquareText,
  "Support issue tracking": ClipboardList,
  "Escalation support": ShieldCheck,
  "Customer satisfaction follow-up": CheckCircle2,
  "Task tracking": ClipboardList,
  "SOP and process documentation": FilePenLine,
  "Vendor coordination": Users,
  "Workflow monitoring": ShieldCheck,
  "Quality control checks": CheckCircle2,
  "Project progress updates": FileBarChart,
  "Meeting scheduling": CalendarDays,
  "Booking confirmations": CheckCircle2,
  "Schedule updates": CalendarDays,
  "Travel coordination": Plane,
  "Team coordination": Users,
  "Last-minute change management": Wrench,
  "Data entry": Database,
  "Form organization": FileSpreadsheet,
  "Document tracking": FilePenLine,
  "File management": FolderOpen,
  "Report preparation": FileBarChart,
  "Record updates": Database,
  "Invoice reminders": ReceiptText,
  "Payment follow-up": CreditCard,
  "Billing communication": Mail,
  "Quote tracking": FileSpreadsheet,
  "Client balance reminders": CreditCard,
  "Payment status updates": CheckCircle2,
};

function Skills() {
  return (
    <Section
      id="services"
      label="Virtual Assistant Services"
      title="Professional support for organized, responsive business operations."
      titleClassName="font-light"
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {serviceGroups.map((group) => {
          const Icon = skillIcons[group.icon];
          return (
            <article className="section-card hover-card group" key={group.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#5C766D]/10 text-[#5C766D] transition duration-200 group-hover:bg-[#5C766D] group-hover:text-[#EDE9E6]">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl font-bold leading-tight text-navy-900">{group.title}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-resume-body">{group.description}</p>
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
