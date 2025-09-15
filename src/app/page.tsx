

import ScrollUp from "@/components/Common/ScrollUp";
import Introduction from "@/components/Introduction";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "CareerEd - Learn, Grow, Succeed",
  description: "A comprehensive platform for career development and educational resources."
};

export default function Home() {
  
  return (
  <>
  <Introduction />
  <Testimonials />
  <ScrollUp />
  </>
  );
}
