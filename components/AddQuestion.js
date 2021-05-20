import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const AddQuestion = (props) => {
  const { addQuestion } = props;
  return (
    <Grid container className="mt-20">
      <Grid item xs={12}>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginRight: 5 }}
          fullWidth
          onClick={addQuestion}
        >
          + ADD QUESTION
        </Button>
      </Grid>
    </Grid>
  );
};

export default React.memo(AddQuestion);
