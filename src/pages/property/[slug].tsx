import { useRouter } from "next/router";
import React from "react";

const PropertySlugPage = () => {
  const { query } = useRouter();
  console.log(query.slug);
  return <div>Property Slug Page</div>;
};

export default PropertySlugPage;
