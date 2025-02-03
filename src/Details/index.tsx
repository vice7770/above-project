import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import EditIcon from "@/assets/edit.svg";
import DeleteIcon from "@/assets/delete.svg";
import FormEdit from "@/components/FormEdit";
import { ListEpisodesQuery, ListEpisodesQueryVariables } from "@/types/graphql";
import { FETCH_ALL_EPISODES, UPDATE_EPISODE, DELETE_EPISODE } from "@/graphQL/episodes";
import { useMutation, useQuery } from "@apollo/client";
import { useGetImage } from "@/hooks/useGetImage";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(FETCH_ALL_EPISODES, {
    variables: { search: id },
  });
  
  const imdbId = data?.listEpisodes?.[0]?.imdbId;
  const { image, loading: loadingImage, error: errorImage} = useGetImage({id: imdbId});
  const [isEditing, setIsEditing] = useState(false);
  const [updateEpisode] = useMutation(UPDATE_EPISODE);
  const [deleteEpisode] = useMutation(DELETE_EPISODE);
  const form = useForm<z.infer<typeof formSchema>>({
    values: {
      id: data?.listEpisodes?.[0]?.id || "",
      series: data?.listEpisodes?.[0]?.series || "",
      title: data?.listEpisodes?.[0]?.title || "",
      description: data?.listEpisodes?.[0]?.description || "",
      seasonNumber: (data?.listEpisodes?.[0]?.seasonNumber)?.toString() || "",
      episodeNumber: data?.listEpisodes?.[0]?.episodeNumber?.toString() || "",
      releaseDate: data?.listEpisodes?.[0]?.releaseDate || "",
      imdbId: imdbId || "",
    },
    resolver: zodResolver(formSchema),
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async () => {
    try {
      await deleteEpisode({
        variables: {
          episodeId: id,
        },
      });
      toast("Episode deleted", {
        description: "Description",
        className: "bg-green-500",
        action: {
          label: "Clear",
          onClick: () => console.log("Clear"),
        },
      })
      navigate("/");
    } catch (error) {
      console.error("Error deleting episode:", error);
      toast("Error deleting episode", {
        description: "Description",
        className: "bg-red-500",
        action: {
          label: "Clear",
          onClick: () => console.log("Clear"),
        },
      })
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
        {/* <Button onClick={()} variant="secondary">Subscribe</Button> */}
      </div>
      <h1 className="text-2xl font-bold mb-4">Episode Details</h1>

      <div className="w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center col-span-2 mb-10">
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
