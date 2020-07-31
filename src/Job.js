import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
  Chip,
  makeStyles
} from "@material-ui/core";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles({
  media: {
    paddingBottom: "10%",
    transform: "scale(0.5)",
    height: "50px"
  }
});

export default function Job({ job }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

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
            <CardContent style={{ paddingBottom: "0px" }}>
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
          <Grid item xs={12}>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setExpanded(prevState => !prevState)}
              >
                <InfoTwoToneIcon style={{ marginRight: "3px" }} />{" "}
                {!expanded ? "View Details" : "Hide Details"}
              </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  <ReactMarkdown source={job.description} />
                </Typography>
              </CardContent>
            </Collapse>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
