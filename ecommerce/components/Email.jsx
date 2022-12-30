import React from 'react'
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

export default function Email() {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const submitForm = async (data: FormData) => {
    console.log("Submission starting", data);
    const result = await postData(data);
    console.log("Submitting complete", result.success);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <input
            ref={register({ required: true })}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        {errors.name && errors.name.type === "required" && (
          <div className="error">You must enter your name</div>
        )}
      </form>
    </div>
  );
}