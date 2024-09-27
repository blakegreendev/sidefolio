import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Blake</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Cloud Engineering Manager and Cloud Architect with extensive
        experience in AWS. As a US Air Force veteran and an AWS Community
        Builder, I specialize in fullstack web applications and infrastructure
        automation on AWS, bringing both leadership and technical expertise to
        cloud solutions.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What Ive been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
