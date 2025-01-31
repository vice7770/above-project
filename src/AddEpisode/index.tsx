import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import FormEdit from "@/components/FormEdit";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { UPDATE_EPISODE } from "@/graphQL/episodes";

const AddEpisode = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateEpisode] = useMutation(UPDATE_EPISODE);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      series: "",
      title: "",
      description: "",
      seasonNumber: "1",
      episodeNumber: "1",
      releaseDate: new Date().toISOString().split("T")[0],
      imdbId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      try {
        await updateEpisode({
          variables: {
            episode: {
              id: values.id,
              series: values.series,
              title: values.title,
              description: values.description,
              seasonNumber: values.seasonNumber,
              episodeNumber: values.episodeNumber,
              releaseDate: values.releaseDate,
              imdbId: values.imdbId,
            },
          },
        });
        toast("Submission successful", {
          description: "Description",
          className: "bg-green-500",
          action: {
            label: "Clear",
            onClick: () => console.log("Clear"),
          },
        })
        setIsEditing(false);
      } catch (error) {
          console.error("Update failed: ", error);
          toast("Submission failed", {
            className: "bg-red-500",
            description: "Description",
            action: {
              label: "Clear",
              onClick: () => console.log("Clear"),
            },
          })
      }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Episode</h1>
      <FormEdit form={form} onSubmit={onSubmit} buttonText="Add Episode"/>
    </div>
  );
};

export default AddEpisode;