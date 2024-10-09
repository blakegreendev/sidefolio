import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Blake Green",
  description:
    "Blake Green is a cloud architect with a passion for building scalable and secure solutions in AWS.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">What I've been working on</Heading>
      <Products />
    </Container>
  );
}
