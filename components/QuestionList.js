import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox, Grid, TextField } from "@material-ui/core";

import { useAppContext } from "../context/AppContext";

const QuestionList = (props) => {
  const { data, index, indexChoice, remove } = props;

  const AppContext = useAppContext();
  const {
    form: { register, errors, setValue, getValues },
  } = AppContext;

  const checkedByForm = getValues(
    `questions.${index}.choiceQuestion.${indexChoice}.checked`
  );

  const [checked, setChecked] = React.useState(
    (checkedByForm && checkedByForm) || false
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setValue(
      `questions.${index}.choiceQuestion.${indexChoice}.checked`,
      event.target.checked
    );
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1} style={{ alignSelf: "center" }}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Description*"
            variant="outlined"
            name="choiceTitle"
            error={Boolean(
              errors?.questions?.[index]?.choiceQuestion?.[indexChoice]
                ?.choiceTitle
            )}
            helperText={
              errors.questions?.[index]?.choiceQuestion?.[indexChoice]
                ?.choiceTitle?.message
            }
            fullWidth
            {...register(
              `questions.${index}.choiceQuestion.${indexChoice}.choiceTitle`,
              {
                required: "Description is required",
              }
            )}
            defaultValue={data.choiceTitle}
          />

          {checked && <small>This answer is correct</small>}
        </Grid>
        <Grid item xs={1} style={{ alignSelf: "center" }}>
          <div onClick={() => remove(data.id)}>
            <DeleteIcon style={{ cursor: "pointer" }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionList;
