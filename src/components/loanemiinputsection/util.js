import * as yup from "yup";

export const loanInputInitialValue = {
  amount: "",
  tenure: "",
  interestRate: "",
};

export const loanInputValidations = yup.object().shape({
  amount: yup
    .number("Please enter a number")
    .required("This is a required field"),
  tenure: yup
    .number("Please enter a number")
    .required("This is a required field"),
  interestRate: yup
    .mixed()
    .test("validatePercentage", "Please enter a valid percentage", (value) => {
      return (
        value &&
        /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i.test(value)
      );
    }),
});
