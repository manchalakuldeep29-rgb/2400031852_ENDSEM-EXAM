import useForm from "./useForm";

export default function Login() {
  const { values, change, submit } = useForm({ email: "", pass: "" });

  return (
    <div>
      <input name="email" onChange={change} value={values.email} />
      <input name="pass" onChange={change} value={values.pass} />
      <button onClick={submit}>Login</button>
    </div>
  );
}