import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { StoreContext } from "../../context/contextStore";

const LoanEmiResultSection = () => {
  const context = useContext(StoreContext);

  const resetValue = () => {
    context.setAmount("");
    context.setTenure("");
    context.setInterestRate("");
  };
  return (
    <div>
      <h2>Loan EMI Calculator</h2>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <TextField
            name={"amount"}
            value={context.amount}
            label={"Loan Amount"}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={"tenure"}
            value={context.tenure}
            label={"Loan Tenure"}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={"interestRate"}
            value={context.interestRate}
            label={"Interest Rate"}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={resetValue} variant={"contained"} color={"primary"}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoanEmiResultSection;
