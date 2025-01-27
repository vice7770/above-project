import { useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import EditIcon from "@/assets/edit.svg";
import DeleteIcon from "@/assets/delete.svg";
import FormEdit from "@/components/FormEdit";

const Details = () => {
  const { id } = useParams<{ id: string, type: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const mockData = {
    id: "1",
    series: "Breaking Bad",
    title: "Pilot",
    description: "A high school chemistry teacher turned meth producer",
    seasonNumber: 1,
    episodeNumber: 1,
    releaseDate: "2008-01-20",
    imdbId: "tt0959621",
  };
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: mockData.id,
        series: mockData.series,
        title: mockData.title,
        description: mockData.description,
        seasonNumber: mockData.seasonNumber,
        episodeNumber: mockData.episodeNumber,
        releaseDate: mockData.releaseDate,
        imdbId: mockData.imdbId,
      },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }

    const handleEdit = () => {
      setIsEditing(!isEditing);
    }
    const handleDelete = () => {
      console.log("Delete episode");
    }
  
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex justify-end space-x-2 w-full">
          <button 
              className="flex flex-col items-center p-4 bg-transparent"
              onClick={() => handleEdit()}
          >
            <EditIcon />
          </button>
          <button 
              className="flex flex-col items-center p-4 bg-transparent"
              onClick={() => handleDelete()}
          >
            <DeleteIcon />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4"></h1>

        <div className="w-full max-w-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center col-span-2 mb-10">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzE4MzA0ZjMtYzllYS00NDMxLWE2M2UtNjU3YjYwZjA2Zjc3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg"
                alt="Episode Thumbnail"
                className="h-[350px] rounded-lg"
              />
            </div>
            { !isEditing && 
            <>
            <div>
              <h2 className="text-xl font-semibold">Series</h2>
              <p>{mockData.series}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Title</h2>
              <p>{mockData.title}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p>{mockData.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Season Number</h2>
              <p>{mockData.seasonNumber}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Episode Number</h2>
              <p>{mockData.episodeNumber}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Release Date</h2>
              <p>{mockData.releaseDate}</p>
            </div>
            </>}
          </div>
        </div>
        {isEditing && <FormEdit form={form} onSubmit={onSubmit} buttonText="Update Episode"/>}
      </div>
    );
  };

export default Details;