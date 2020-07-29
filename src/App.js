import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import { Grid } from "@material-ui/core";
import "./styles.css";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Grid
      container
      justify="center"
      spacing={3}
      style={{ width: "75%", margin: "auto" }}
    >
      {loading && <h1>loading...</h1>}
      {error && <h1>Error. Please refresh the page</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />;
      })}
    </Grid>
  );
}
