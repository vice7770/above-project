import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  id: z.string().uuid({
    message: "Invalid ID format.",
  }),
  series: z.string().min(1, {
    message: "Series name is required.",
  }),
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  seasonNumber: z.number().int().min(1, {
    message: "Season number must be a positive integer.",
  }),
  episodeNumber: z.number().int().min(1, {
    message: "Episode number must be a positive integer.",
  }),
  releaseDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format.",
  }),
  imdbId: z.string().min(1, {
    message: "IMDB ID is required.",
  }),
});

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
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Episode</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input placeholder={"ID"} {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="series"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Series</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      placeholder={"Series"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      placeholder={"Title"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      placeholder={"Description"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seasonNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Season Number</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      type="number"
                      placeholder={"Season Number"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="episodeNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode Number</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      type="number"
                      placeholder={"Episode Number"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Date</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      type="date"
                      placeholder={"Release Date"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imdbId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IMDB ID</FormLabel>
                  <FormControl className="rounded-lg">
                    <Input
                      placeholder={"IMDB ID"}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="rounded-lg bg-blue-500 text-white px-4 py-2"
              type="submit"
            >
              Add Episode
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddEpisode;