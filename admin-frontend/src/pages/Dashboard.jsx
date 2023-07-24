import React, { useState } from "react";
import { DashboardNavigation } from "../components/DashboardNavigation";
import { AddPost } from "../components/AddPost";
import { EditPosts } from "../components/EditPosts";
import { DeletePosts } from "../components/DeletePosts";

export const Dashboard = () => {
  const [page, setPage] = useState("add");

  if (page === "add") {
    return (
      <div className='w-full flex flex-col gap-10'>
        <DashboardNavigation setPage={setPage} />
        <AddPost />
      </div>
    );
  }

  if (page === "edit") {
    return (
      <div className='w-full flex flex-col gap-10'>
        <DashboardNavigation setPage={setPage} />
        <EditPosts />
      </div>
    );
  }

  if (page === "delete") {
    return (
      <div className='w-full flex flex-col gap-10'>
        <DashboardNavigation setPage={setPage} />
        <DeletePosts />
      </div>
    );
  }
};
