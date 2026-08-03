import ServicePage from "@/components/ServicePage";

export default function CricketIdPage() {
  return <ServicePage
    eyebrow="EMPIRE Cricket ID"
    title="Your cricket ID,"
    highlight="made simple."
    intro="Get practical support for cricket-focused account access, with a process designed to be quick, clear, and easy to follow."
    benefits={["Fast guidance for creating and accessing your cricket ID.", "Coverage for major cricket formats and match schedules.", "Helpful assistance for common login and account questions."]}
    steps={["Contact the EMPIRE support team.", "Share the required account details securely.", "Receive guidance to access your cricket experience."]}
    note="Cricket-related participation involves risk. You must be 18+ and responsible for confirming that access is legal in your location."
  />;
}
