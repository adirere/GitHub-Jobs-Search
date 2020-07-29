import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip,
  makeStyles
} from "@material-ui/core";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles({
  media: {
    maxWidth: "260px",
    height: "50px"
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
          <Grid item sm={7} xs={12}>
            <CardHeader
              disableTypography="true"
              title={
                <>
                  <Typography variant="h6" display="inline">
                    {job.title} -
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    display="inline"
                  >
                    {" "}
                    {job.company}
                  </Typography>
                </>
              }
              subheader={
                <Typography variant="subtitle1" color="textSecondary">
                  {new Date(job.created_at).toLocaleDateString()}
                </Typography>
              }
            />
            <CardContent>
              <Chip size="small" label={job.type} />{" "}
              <Chip size="small" label={job.location} />
              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ wordBreak: "break-all" }}
              >
                <ReactMarkdown source={job.how_to_apply} />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item sm={4} xs={0} style={{ marginRight: "10px" }}>
            <CardMedia
              className={classes.media}
              image={job.company_logo}
              title={job.company}
            />
          </Grid>
          <CardActions>
            <Button variant="contained" color="primary">
              <InfoTwoToneIcon style={{ marginRight: "3px" }} /> View Details
            </Button>
          </CardActions>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              <ReactMarkdown source={job.description} />
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
