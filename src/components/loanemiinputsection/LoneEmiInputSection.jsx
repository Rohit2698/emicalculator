import { useFormik } from "formik";
import React, { useContext } from "react";
import { loanInputInitialValue, loanInputValidations } from "./util";
import { Button, Grid, TextField } from "@material-ui/core";
import { StoreContext } from "../../context/contextStore";

const LoneEmiInputSection = () => {
  const context = useContext(StoreContext);

  const onSubmit = () => {
    context.setAmount(formik.values.amount);
    context.setTenure(formik.values.tenure);
    context.setInterestRate(formik.values.interestRate);
  };

  const formik = useFormik({
    initialValues: loanInputInitialValue,
    validationSchema: loanInputValidations,
    validateOnMount: true,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <h2>Loan EMI Calculator</h2>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <TextField
            name={"amount"}
            value={formik.values.amount}
            onChange={formik.handleChange}
            helperText={formik.errors.amount}
            label={"Loan Amount"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={"tenure"}
            value={formik.values.tenure}
            onChange={formik.handleChange}
            helperText={formik.errors.tenure}
            label={"Loan Tenure"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={"interestRate"}
            value={formik.values.interestRate}
            onChange={formik.handleChange}
            helperText={formik.errors.interestRate}
            label={"Interest Rate"}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => formik.handleSubmit()}
            variant={"contained"}
            color={"primary"}
          >
            Calculate
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoneEmiInputSection;
