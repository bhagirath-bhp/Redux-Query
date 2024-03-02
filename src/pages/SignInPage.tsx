import AnyForm from "../components/AnyForm";

const SignInPage = () => {
  const fields = [
    {
      label: "Email",
      type: "email",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
    {
      label: "Password",
      type: "password",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
  ];
  return (
    <div className="flex justify-center items-center w-[100vw]">
      <AnyForm fields={fields} formType="signin"/>
    </div>
  );
};

export default SignInPage;
