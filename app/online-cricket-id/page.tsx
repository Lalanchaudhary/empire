import ServicePage from "@/components/ServicePage";

export default function OnlineCricketIdPage() {
  return <ServicePage
    eyebrow="Online Cricket ID"
    title="Cricket access,"
    highlight="wherever you are."
    intro="EMPIRE helps you navigate online cricket access with a smooth mobile-friendly experience and responsive support."
    benefits={["Designed to work smoothly across mobile, tablet, and desktop.", "Simple account assistance for new and returning users.", "Stay connected with a broad range of cricket events."]}
    steps={["Reach out through the EMPIRE contact channel.", "Complete the short account setup process.", "Log in and follow the cricket action with support available when needed."]}
    note="Online cricket services may be restricted in some areas. Users must be 18+ and should check local rules before participating."
  />;
}
