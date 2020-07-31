import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  makeStyles
} from "@material-ui/core/";

const useStyles = makeStyles({
  inputStyle: {
    backgroundColor: "white"
  }
});

export default function SearchFrom({ params, onParamChange }) {
  const classes = useStyles();
  const [checkedButton, setCheckedButton] = useState(false);

  useEffect(() => {
    onParamChange({ checkedButton });
  }, [checkedButton]);

  const handleChange = () => {
    setCheckedButton(prevState => !prevState);
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={4} sm={3}>
        <TextField
          id="outlined-basic"
          name="description"
          onChange={onParamChange}
          value={params.description}
          label="Description"
          variant="outlined"
          className={classes.inputStyle}
        />
      </Grid>
      <Grid item xs={4} sm={3}>
        <TextField
          id="outlined-basic"
          name="location"
          onChange={onParamChange}
          value={params.location}
          label="Location"
          variant="outlined"
          className={classes.inputStyle}
        />
      </Grid>
      <Grid item xs={4} sm={3}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedButton}
              onChange={handleChange}
              name="full_time"
              value={params.full_time}
              color="primary"
            />
          }
          label="Only Full Time"
        />
      </Grid>
    </Grid>
  );
}
