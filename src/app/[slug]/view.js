"use client";

import { useEffect } from "react";

// Send request to api route
export const ReportView = ({ slug }) => {
  useEffect(() => {
    fetch("/api/incr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
