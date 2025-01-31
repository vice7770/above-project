import { getEpisodesImage } from "@/api/api";
import { useEffect, useState } from "react";

interface useGetImageProps {
  id: string | undefined;
}

interface EpisodeImage {
  id: string;
  image: string;
}

export function useGetImage({id}: useGetImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [images, setImages] = useState<EpisodeImage[]>([]);
  const image = images.find((image) => image.id === id)?.image;
  useEffect(() => {
    const fetchImages = async (id :string) => {
      try {
        setLoading(true);
        const response = await getEpisodesImage({id});
        setImages((prev) => [...prev, {id, image: response.Poster}]);
        setLoading(false);
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      }
    }
    if(!id) return;
    const ids = images.map((image) => image.id);
    if (ids.includes(id)) return;
    fetchImages(id);

  }, [ id ]);

  return { loading, error, image };
}