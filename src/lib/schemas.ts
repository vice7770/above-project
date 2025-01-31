import { z } from "zod";

export const formSchema = z.object({
  id: z.string().min(1,{
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
  seasonNumber: z.string().min(1, {
    message: "Season string must be a positive integer.",
  }),
  episodeNumber: z.string().min(1, {
    message: "Episode number must be a positive integer.",
  }),
  releaseDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format.",
  }),
  imdbId: z.string().min(1, {
    message: "IMDB ID is required.",
  }),
});

