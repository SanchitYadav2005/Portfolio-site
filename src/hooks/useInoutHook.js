import { useState } from "react";

export default (initialVal) => {
  const [value1, setValue1] = useState(initialVal);
  const [value2, setValue2] = useState(initialVal);
  const [value3, setValue3] = useState(initialVal);
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  const handleChange3 = (e) => {
    setValue3(e.target.value);
  };
  const reset = () => {
    setValue1("");
    setValue2("");
    setValue3("");
  };
  return [
    value1,
    value2,
    value3,
    handleChange1,
    handleChange2,
    handleChange3,
    reset,
  ];
};
