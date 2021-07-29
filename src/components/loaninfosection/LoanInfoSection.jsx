import { Grid, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/contextStore";

const LoanInfoSection = () => {
  const { amount, tenure, interestRate } = useContext(StoreContext);
  const [loanEmi, setLoanEmi] = useState();
  const [totalPayable, setTotalPayable] = useState();
  const [totalPayment, setTotalPayment] = useState();

  useEffect(() => {
    console.log(amount);
    console.log(tenure);
    console.log(interestRate);
    const emi =
      (amount * (interestRate / 100)) /
      ((interestRate * Math.pow(1 + (interestRate / 100) * 12, tenure)) /
        Math.pow(1 + (interestRate / 100) * 12, tenure) -
        1);

    const totalPayment = emi * (tenure * 12);
    setTotalPayment(totalPayment);
    setTotalPayable(totalPayment - amount);
    setLoanEmi(emi);
  }, [amount, tenure, interestRate]);

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <h3>Loan Emi</h3>
            <h3>{loanEmi.toFixed(2)}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <h3>Total Interest Payable</h3>
            <h3>Rs. {totalPayable.toFixed(2)}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <h3>Total Payment(Principal + interest)</h3>
            <h3>Rs. {totalPayment.toFixed(2)}</h3>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3}>
        <h3>Loan Emi</h3>
        <h3>{loanEmi.toFixed(2)}</h3>
      </Paper>
    </div>
  );
};

export default LoanInfoSection;
