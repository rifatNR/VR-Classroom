import { useStore } from "@nanostores/react";
import React from "react";
import { $user, setUser } from "../../../stores/user";
import Layout from "../layouts/Layout";
import Class from "../layouts/Class";

const SingleClass = () => {
  const user = useStore($user);

  return (
    <div>
      <Layout></Layout>
    </div>
  );
};

export default SingleClass;
