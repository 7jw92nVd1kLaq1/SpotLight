"use client";

import Drawer from "@/components/selection-detail/Drawer";
import { useParams } from "next/navigation";
import React from "react";

const SelectionPage = () => {
  const params = useParams();

  if (!params) {
    return <div>올바르지 않은 selectionId</div>;
  }

  const selectionId = params.selectionId;

  return (
    <div className="flex">
      <Drawer />
    </div>
  );
};

export default SelectionPage;
