import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import {
  LinearProgress,
  Grid,
  Typography,
  makeStyles
} from "@material-ui/core";
import "./styles.css";
import JobsPagination from "./JobsPagination";
import SearchFrom from "./SearchForm";

const useStyles = makeStyles(theme => ({
  appTitle: {
    margin: "auto",
    textAlign: "center",
    padding: "10px"
  },
  linearStyle: {
    position: "absolute",
    top: "0%",
    width: "100%"
  },
  mainContainer: {
    width: "75%",
    margin: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%"
    }
  }
}));

export default function App() {
  const classes = useStyles();

  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const { checkedButton } = e;
    let param, value;

    if (checkedButton === undefined) {
      param = e.target.name;
      value = e.target.value;
    } else {
      param = "full_time";
      value = checkedButton;
    }

    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <>
      {loading && <LinearProgress className={classes.linearStyle} />}
      <Typography variant="h2" className={classes.appTitle}>
        Github Jobs
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.mainContainer}
      >
        <Grid item xs={12}>
          <SearchFrom params={params} onParamChange={handleParamChange} />
        </Grid>
        <Grid item xs={12}>
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </Grid>
        {loading && <Typography variant="h5">Loading...</Typography>}
        {error && <h1>Error. Please refresh the page</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />;
        })}
        <Grid item xs={12}>
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </Grid>
      </Grid>
    </>
  );
}
