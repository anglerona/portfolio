import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "idekCTF",
  description: "SVG assets, merch and illustrations for the idekCTF cybersecurity competition.",
};

export default function IdekctfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
