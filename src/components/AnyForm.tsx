import { useState } from "react";
import { FormProps } from "../interfaces";
import { Button } from "@material-tailwind/react";
import { signup } from "../api/user";

const AnyForm: React.FC<FormProps> = ({ fields }) => {
  const [formData, setFormData] = useState<{ [key: string]: string | File }>(
    {}
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormChange = (key: string, value: string | File) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault();
    console.log(formData.Name, formData.Image);
    const response = await signup(formData);
    console.log(response)
    if(response.success){
      setIsLoading(false) 
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-input-container">
          <label>{field.label}</label>
          {field.type === "file" ? (
            <input
              className={`form-input ${field.className}`}
              type={field.type}
              onChange={(e) => {
                const files = e.target.files;
                if (!files || files.length === 0) {
                  console.error("Select a file");
                  return;
                }
                handleFormChange(field.label, files[0]);
              }}
            />
          ) : (
            <input
              className={`form-input ${field.className}`}
              type={field.type}
              onChange={(e) => handleFormChange(field.label, e.target.value)}
            />
          )}
        </div>
      ))}
      <Button
        variant="filled"
        type="submit"
        loading={isLoading}
        className="text-sm"
        color="green"
        fullWidth={true}
        placeholder="Submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default AnyForm;
