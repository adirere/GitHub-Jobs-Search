import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
});

export default function Job({ job }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={8} xs={12}>
            <CardHeader
              disableTypography="true"
              title={
                <>
                  <Typography variant="h5" display="inline">
                    {job.title} -
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    display="inline"
                  >
                    {" "}
                    {job.company}
                  </Typography>
                </>
              }
              subheader={
                <Typography variant="subtitle1">
                  {new Date(job.created_at).toLocaleDateString()}
                </Typography>
              }
            />
          </Grid>
          <Grid item sm={1} xs={0}>
            <CardMedia
              className={classes.media}
              image={job.company_logo}
              title="company logo"
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
