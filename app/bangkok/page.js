import RedirectBridge from "../components/RedirectBridge";

export const metadata = {
  title: "AIPx Bangkok 2026 | World Intellectual Property Forum",
  description:
    "Explore the AIPx Global Summit 2026 taking place December 4–5, 2026 at Bangkok Convention Center, Thailand.",
};

export default function BangkokPage() {
  return (
    <RedirectBridge
      cityId="bangkok"
      cityName="Bangkok"
      summitTitle="AIPx Global Summit 2026"
      edition="2026"
      targetUrl="https://aipxglobal.com/"
      accentColor="#f59e0b"
      badgeGradient="from-pink-600 via-rose-500 to-amber-500"
    />
  );
}
