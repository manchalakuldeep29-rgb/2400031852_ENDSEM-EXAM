import { useState } from "react";

export default function useForm(initial) {
  const [values, setValues] = useState(initial);

  const change = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const submit = () => {
    console.log("Submitted:", values);
  };

  return { values, change, submit };
}