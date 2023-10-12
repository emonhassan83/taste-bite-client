import React, { useEffect, useState } from "react";
import SingleSectionTwo from "../SingleSectionTwo/SingleSectionTwo";
import "./SectionTwo.css";

const whatNewSectionData = [
  {
    _id: "64516af695dff67c48ff7a50",
    img: "https://imgpile.com/images/DcJ3F2.jpg",
    title: "50 Perfect Gifts for Coffee Lovers",
    day: "YESTERDAY",
    author: "By Wolf Stephenson",
    description: "Consider these the ideal pick-me-up.",
  },
  {
    _id: "64516af6165b0bdf503b5b6a",
    img: "https://imgpile.com/images/DcJeDE.jpg",
    title: "We Tried the New Version of the Best-Selling Always Pan",
    day: "YESTERDAY",
    author: "By Food Network Kitchen",
    description:
      "Our Place's Always Pan 2.0 addresses the pitfalls of the original and comes in many of the same popular colors.",
  },
  {
    _id: "64516af63bd4ce77a7a125ae",
    img: "https://imgpile.com/images/DcJjXr.jpg",
    title: "How to Grill the Perfect Burger",
    day: "TODAY",
    author: "By Guerrero Blackwell",
    description:
      "Here are the tips you need for cooking the best possible burgers in your own backyard.",
  },
  {
    _id: "64516af613222ea1bbf025a4",
    img: "https://imgpile.com/images/DcPNPP.jpg",
    title: "Are Seed Oils Bad for You?",
    day: "YESTERDAY",
    author: "By Serena Ball, M.S., R.D.",
    description:
      "We asked experts to weigh in on some of the claims you may have been hearing on the internet.",
  },
  {
    _id: "64516af684c210c8663bb516",
    img: "https://imgpile.com/images/DcPUO1.jpg",
    title: "5 Best Instant Ramens, According to Food Network Staffers",
    day: "TODAY",
    author: "By FN Dish Editor",
    description:
      "Here’s what Food Network staffers reach for when they’re pressed for time, or craving a late night snack.",
  },
];

const SectionTwo = () => {
  return (
    <div className="my-16 sm:my-28">
      <h2 className="new-title text-2xl sm:text-3xl font-bold sm:my-6 text-center sm:text-start">
        What's New
      </h2>
      {whatNewSectionData &&
        whatNewSectionData.map((sectionTwo) => (
          <SingleSectionTwo
            key={sectionTwo._id}
            sectionTwo={sectionTwo}
          ></SingleSectionTwo>
        ))}
    </div>
  );
};

export default SectionTwo;
