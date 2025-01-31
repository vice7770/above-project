import { useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import EditIcon from "@/assets/edit.svg";
import DeleteIcon from "@/assets/delete.svg";
import FormEdit from "@/components/FormEdit";
import { ListEpisodesQuery, ListEpisodesQueryVariables } from "@/types/graphql";
import { FETCH_ALL_EPISODES } from "@/graphQL/episodes";
import { useQuery } from "@apollo/client";
import { useGetImage } from "@/hooks/useGetImage";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(FETCH_ALL_EPISODES, {
    variables: { search: id },
  });
  const imdbId = data?.listEpisodes?.[0]?.imdbId;
  const { image, loading: loadingImage, error: errorImage} = useGetImage({id: imdbId});
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    values: {
      id: data?.listEpisodes?.[0]?.id || "",
      series: data?.listEpisodes?.[0]?.series || "",
      title: data?.listEpisodes?.[0]?.title || "",
      description: data?.listEpisodes?.[0]?.description || "",
      seasonNumber: data?.listEpisodes?.[0]?.seasonNumber || 0,
      episodeNumber: data?.listEpisodes?.[0]?.episodeNumber || 0,
      releaseDate: data?.listEpisodes?.[0]?.releaseDate || "",
      imdbId: imdbId || "",
    },
    resolver: zodResolver(formSchema),
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    console.log("Delete episode");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading episode details</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-end space-x-2 w-full">
        <button
          className="flex flex-col items-center p-4 bg-transparent"
          onClick={handleEdit}
          aria-label="Edit Episode"
        >
          <EditIcon />
        </button>
        <button
          className="flex flex-col items-center p-4 bg-transparent"
          onClick={handleDelete}
          aria-label="Delete Episode"
        >
          <DeleteIcon />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Episode Details</h1>

      <div className="w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center col-span-2 mb-10">
            {/* <img
              src="https://m.media-amazon.com/images/M/MV5BNzE4MzA0ZjMtYzllYS00NDMxLWE2M2UtNjU3YjYwZjA2Zjc3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg"
              alt="Episode Thumbnail"
              className="h-[350px] rounded-lg"
            /> */}
            {loadingImage && <p>Loading...</p>}
            {errorImage && <p>Error loading image</p>}
            <img
              src={image}
              alt="Episode Thumbnail"
              className="h-[350px] rounded-lg"
            />
          </div>
          {!isEditing && (
            <>
              <DetailItem label="Series" value={data?.listEpisodes?.[0]?.series} />
              <DetailItem label="Title" value={data?.listEpisodes?.[0]?.title} />
              <DetailItem label="Description" value={data?.listEpisodes?.[0]?.description} />
              <DetailItem label="Season Number" value={data?.listEpisodes?.[0]?.seasonNumber} />
              <DetailItem label="Episode Number" value={data?.listEpisodes?.[0]?.episodeNumber} />
              <DetailItem label="Release Date" value={data?.listEpisodes?.[0]?.releaseDate} />
            </>
          )}
        </div>
      </div>
      {isEditing && <FormEdit form={form} onSubmit={onSubmit} buttonText="Update Episode" />}
    </div>
  );
};

const DetailItem = ({ label, value }: { label: string; value?: string | number }) => (
  <div>
    <h2 className="text-xl font-semibold">{label}</h2>
    <p>{value}</p>
  </div>
);

export default Details;
