import React, { createContext, useContext, useEffect, useState } from "react";

type AppliedJobsContextType = {
  appliedJobs: number[];
  apply: (jobId: number) => void;
  isApplied: (jobId: number) => boolean;
};

const AppliedJobsContext = createContext<AppliedJobsContextType | undefined>(
  undefined
);

const STORAGE_KEY = "hireconnect:appliedJobs";

export const AppliedJobsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appliedJobs, setAppliedJobs] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as number[] : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appliedJobs));
    } catch {
      // ignore
    }
  }, [appliedJobs]);

  const apply = (jobId: number) => {
    setAppliedJobs((prev) => (prev.includes(jobId) ? prev : [...prev, jobId]));
  };

  const isApplied = (jobId: number) => appliedJobs.includes(jobId);

  return (
    <AppliedJobsContext.Provider value={{ appliedJobs, apply, isApplied }}>
      {children}
    </AppliedJobsContext.Provider>
  );
};

export const useAppliedJobs = () => {
  const ctx = useContext(AppliedJobsContext);
  if (!ctx) throw new Error("useAppliedJobs must be used within AppliedJobsProvider");
  return ctx;
};

export default AppliedJobsContext;
