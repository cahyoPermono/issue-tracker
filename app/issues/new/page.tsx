"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

type IssueForm = {
  title: string;
  description: string;
};

const CreateIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Create An Issue.."
          {...register("title")}
        />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMde {...field} />}
      />

      <Button type="submit">Submit Issue</Button>
    </form>
  );
};

export default CreateIssuePage;
