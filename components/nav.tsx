"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

let tabs = [
  { id: "/", label: "Home" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

function Logo() {
  return (
    <Link aria-label="Veryben" href="/">
      <motion.svg
        className="text-black dark:text-white h-12"
        viewBox="0 0 29 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M3 1v52"
          stroke="currentColor"
          strokeWidth={6}
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          d="m5.085 52.596 23-52.001"
          stroke="currentColor"
          strokeWidth={2}
        />
      </motion.svg>
    </Link>
  );
}

export default function NvaTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div
          onClick={() => setActiveTab("/")}
          className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start "
        >
          <Logo />
        </div>
        <div className="flex space-x-1 z-10">
          {tabs.map((tab) => (
            <Link
              href={tab.id}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
