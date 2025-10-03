import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description: "We turn bold ideas into powerful solutions",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you to execute and produces results",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you to write marketing strategies that produces results",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience",
      icon: assets.ads_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewPort={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-7 sm:px-12 lg:p-24 xl:p-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bg image"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc=" From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
