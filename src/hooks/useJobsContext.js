import { useContext } from "react";
import { JobsContext } from "../context/JobsContext";

const useJobsContext = () => useContext(JobsContext);

export { useJobsContext }