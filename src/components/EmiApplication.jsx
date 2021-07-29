import { Grid } from "@material-ui/core";
import React from "react";
import LoneEmiInputSection from "./loanemiinputsection/LoneEmiInputSection";
import LoanEmiResultSection from "./loanemiresultsection/LoanEmiResultSection";
import LoanInfoSection from "./loaninfosection/LoanInfoSection";

const EmiApplication = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={6}>
        <LoneEmiInputSection />
      </Grid>
      <Grid item xs={6}>
        <LoanEmiResultSection />
        <LoanInfoSection />
      </Grid>
    </Grid>
  );
};

export default EmiApplication;
