import AnyForm from "../components/AnyForm";

const SignUpPage = () => {
  const fields = [
    {
      label: "Name",
      type: "text",
      className: "",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
    {
      label: "Image",
      type: "file",
      className: "",
      value: "",
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
      <AnyForm fields={fields}/>
    </div>
  );
};

export default SignUpPage;
