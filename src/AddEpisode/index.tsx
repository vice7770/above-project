import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import FormEdit from "@/components/FormEdit";

const AddEpisode = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      series: "",
      title: "",
      description: "",
      seasonNumber: 1,
      episodeNumber: 1,
      releaseDate: new Date().toISOString().split("T")[0],
      imdbId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("AddEpisode", values);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Episode</h1>
      <FormEdit form={form} onSubmit={onSubmit} buttonText="Add Episode"/>
    </div>
  );
};

export default AddEpisode;