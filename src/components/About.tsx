"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hi there! My name is Blake Green and I am currently a Manager of Cloud
          Engineering at AllCloud. I am an AWS Community Builder and I’ve served
          in the US Air Force for over 17 years.
        </Paragraph>
        <Paragraph className=" mt-4">
          I joined the Air Force shortly after graduating high school and took
          the first job that was leaving for basic training. Lucky for me, the
          job turned out to be in the cyber career field. This ultimately
          sparked my interest for computers and motivated me to continue to
          pursue a future in IT. After I finished my 6 years of active duty, I
          started at a help desk while continuing my service in the Reserves and
          Air National Guard.
        </Paragraph>

        <Paragraph className=" mt-4">
          It wasn’t until I found myself at a consulting company for small and
          midsize businesses when I found the cloud. Like many companies, there
          was a growing need for cheap storage and the cloud was just starting
          to become mainstream. Pretty soon I was configuring backups to an AWS
          S3 bucket and then figuring out how to provide disaster recovery in
          the cloud. To this day I still feel nostalgic thinking about the first
          time I deployed an EC2 instance. After that I was hooked and started
          to get AWS certifications which led to more cloud projects. Since then
          I have worked on several AWS projects including everything from
          migrations to greenfield application modernization and haven’t stopped
          learning!
        </Paragraph>
        <Paragraph className=" mt-4">
          I decided to start this blog to share my experiences and knowledge
          with others. Through my blog, I hope to share AWS content around
          developer tools, automation and serverless.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for taking the time to read a little bit about me. I look
          forward to sharing more with you on this blog!
        </Paragraph>
      </div>
    </div>
  );
}
