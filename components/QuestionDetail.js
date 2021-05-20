import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import QuestionList from "./QuestionList";
import Line from "./Line";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
import { useFieldArray } from "react-hook-form";

import { useAppContext } from "../context/AppContext";

const QuestionDetail = (props) => {
  const { item, index, removeQuestion, duplicateQuestion } = props;
  const AppContext = useAppContext();
  const {
    form: { register, errors, setValue, getValues, watch, control },
  } = AppContext;

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.choiceQuestion`,
  });

  const addChoice = () => {
    append({
      choiceTitle: "",
      checked: false,
    });
  };

  return (
    <div>
      <div className="pt-10">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <label className="text-header">Question {index + 1}</label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Qusetion*"
              variant="outlined"
              name="questionTitle"
              error={Boolean(errors.questions?.[index]?.questionsName)}
              helperText={errors?.questions?.[index]?.questionsName?.message}
              fullWidth
              {...register(`questions.${index}.questionsName`, {
                required: "Question name is required",
              })}
              defaultValue={item.questionsName}
            />
          </Grid>
        </Grid>
        <div className="mb-10">
          {fields &&
            fields.map((item, indexChoice) => (
              <div key={item.id}>
                <QuestionList
                  data={item}
                  key={indexChoice}
                  indexChoice={indexChoice}
                  index={index}
                  errors={errors}
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  watch={watch}
                  remove={remove}
                />
              </div>
            ))}
        </div>
        <div className="mb-20 mt-20">
          <label className="text-add-choice" onClick={() => addChoice()}>
            + ADD CHOICE
          </label>
        </div>
        <Line />
        <div style={{ display: "center" }} className="mb-10 mt-10">
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={() => duplicateQuestion(index)}
            >
              <FileCopyIcon />
              <span>DUPLICATE</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                cursor: "pointer",
              }}
              onClick={() => removeQuestion(index)}
            >
              <DeleteIcon />
              <span>DELETE</span>
            </div>
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
};

export default React.memo(QuestionDetail);
