import { useRouter } from "next/router";
import React from "react";

const AboutAllSegments = () => {
  const router = useRouter();
  console.log(router);
  return <div>All Segments Route</div>;
};

export default AboutAllSegments;
