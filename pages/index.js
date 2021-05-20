import React, { useState } from "react";

import AddQuestion from "../components/AddQuestion";
import QuestionDetail from "../components/QuestionDetail";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Line from "../components/Line";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import AppContext from "../context/AppContext";

const Home = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      questions: [
        {
          questionsName: "",
          choiceQuestion: [
            {
              choiceTitle: "",
              checked: false,
            },
          ],
        },
      ],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "questions",
    }
  );

  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    if (data) {
      if (data?.questions.length < 1) {
        alert("Please fill Question at least 1 question.");
      } else {
        setOpen(true);

        console.log("data: ", data);
      }
    }
  };

  const addQuestion = () => {
    append({
      questionsName: "",
      choiceQuestion: [
        {
          choiceTitle: "",
          checked: false,
        },
      ],
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const valuesContext = {
    form: {
      register,
      errors,
      append,
      setValue,
      getValues,
      watch,
      control,
    },
  };

  const duplicateQuestion = (index) => {
    const dataDup = getValues("questions");
    append(dataDup[index]);
  };

  const values = getValues();

  return (
    <AppContext.Provider value={valuesContext}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ backgroundColor: "white" }} className="mb-20">
          <Header />
        </div>
        <div className="m-20 question-detail-box">
          {/* <ul> */}{" "}
          <div className="pb-10">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <label className="text-header">Questionnaire Detail</label>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name*"
                  variant="outlined"
                  name="questionTitle"
                  error={Boolean(errors.questionTitle)}
                  helperText={errors.questionTitle?.message}
                  fullWidth
                  {...register("questionTitle", {
                    required: "Question Title is required.",
                  })}
                />
              </Grid>
            </Grid>
          </div>
          <Line />
          {fields.map((item, index) => (
            <div key={item.id}>
              <QuestionDetail
                item={item}
                index={index}
                removeQuestion={remove}
                key={index}
                duplicateQuestion={duplicateQuestion}
              />
            </div>
          ))}
          <AddQuestion addQuestion={addQuestion} />
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <MuiAlert onClose={handleClose} severity="success">
            Success !<br />
            Check form data in log...
          </MuiAlert>
        </Snackbar>
      </form>
    </AppContext.Provider>
  );
};

export default React.memo(Home);
