import useForm from "./useForm";

export default function Register() {
  const { values, change, submit } = useForm({ name: "", email: "" });

  return (
    <div>
      <input name="name" onChange={change} value={values.name} />
      <input name="email" onChange={change} value={values.email} />
      <button onClick={submit}>Register</button>
    </div>
  );
}