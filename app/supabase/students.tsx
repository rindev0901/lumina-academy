"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import { ProfilesQuery } from "./queries";
import { notFound } from "next/navigation";

const Students = () => {
  const {
    data: { profilesCollection },
  } = useSuspenseQuery(ProfilesQuery);

  if (!profilesCollection) notFound();

  const { edges } = profilesCollection;

  return (
    <ul>
      {edges?.map(({ node: { id, full_name } }) => (
        <li key={id}>{full_name}</li>
      ))}
    </ul>
  );
};

export default Students;
