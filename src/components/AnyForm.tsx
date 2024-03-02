import React, { useState } from "react";
import { FormProps } from "../interfaces";
import { Button } from "@material-tailwind/react";
import { useSignupMutation } from "../api/user";
import Cookies from "js-cookie";
import { ErrorResponse, SuccessResponse } from "../interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AnyForm: React.FC<FormProps> = ({ fields }) => {
  const [form, setForm] = useState<{ [key: string]: string | File }>({});
  const [signup] = useSignupMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormChange = (key: string, value: string | File) => {
    setForm((prevform) => ({
      ...prevform,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();
    for(let key in form){
      if(form.hasOwnProperty(key)){
        formData.append(key, form[key]);
      }
    }
    setTimeout(async () => {
      const response = (await signup(formData)) as
        | SuccessResponse
        | ErrorResponse;
      if ("data" in response) {
        setIsLoading(false);
        const { token } = response.data;
        Cookies.set("token", token);
        toast.success("Signed up successfully!", {
          position: "top-right",
          autoClose: 1000,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/')
        }, 1000);
      } else {
        const { message } = response.error.data;
        setIsLoading(false);
        toast.error(message, {
          position: "top-right",
          autoClose: 1200,
          theme: "light",
        });
      }
    }, 1000);
  };

  return (
    <>
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
                    toast.error("Select a file!", {
                      position: "top-right",
                      autoClose: 1200,
                      theme: "light",
                    });
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
      <ToastContainer position="top-right" autoClose={1000} theme="light" />
    </>
  );
};

export default AnyForm;
