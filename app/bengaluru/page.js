import RedirectBridge from "../components/RedirectBridge";

export const metadata = {
  title: "Indo Global IPR Summit 2027 Bengaluru | World Intellectual Property Forum",
  description:
    "Explore the Indo Global IPR Summit 2027 taking place January 19–21, 2027 at BIEC Bengaluru, India.",
};

export default function BengaluruPage() {
  return (
    <RedirectBridge
      cityId="bengaluru"
      cityName="Bengaluru"
      summitTitle="Ind Global IPR Summit 2027"
      edition="2027"
      targetUrl="https://www.igisummit.com/"
      accentColor="#06b6d4"
      badgeGradient="from-blue-600 via-cyan-500 to-sky-400"
    />
  );
}
