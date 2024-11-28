'use client'

import React from "react";
import useAnalytics from "@/hooks/useAnalytics";

const Analytics = () => {
    useAnalytics("YOUR_TRACKING_ID");
  return <div></div>;
};

export default Analytics;
