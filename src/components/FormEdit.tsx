import React from "react";
import { UseFormReturn } from "react-hook-form";
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
import { formSchema } from "@/lib/schemas";

interface FormEditProps {
    form: UseFormReturn<{
      id: string;
      series: string;
      title: string;
      description: string;
      seasonNumber: string;
      episodeNumber: string;
      releaseDate: string;
      imdbId: string;
    }, unknown, undefined>
    onSubmit: (values: z.infer<typeof formSchema>) => void;
    buttonText?: string;
}

const FormEdit = ({ form, onSubmit, buttonText= "Update episode" } : FormEditProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
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
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormEdit;