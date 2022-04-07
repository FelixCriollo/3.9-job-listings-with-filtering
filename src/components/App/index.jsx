import { AppUI } from "./AppUI";
import { JobsContextProvider } from "../../context/JobsContext";

export default function App () {
  return (
    <JobsContextProvider>
      <AppUI />
    </JobsContextProvider>
  )
}