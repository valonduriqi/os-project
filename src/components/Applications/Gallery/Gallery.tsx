import { GalleryResponse } from "@api/gallery/gallery";
import { getAllPhotos } from "@api/gallery/gallery.client";
import { useQuery } from "@tanstack/react-query";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: getAllPhotos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const photos = data?.data;

  console.log(photos);

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left mb-6">Gallery</h1>

      <div className="grid grid-cols-3 gap-6">
        {photos?.map((photo: GalleryResponse) => (
          <div key={photo.id} className="mb-4 p-4 border rounded-lg shadow-sm">
            <img
              src={photo.thumbnailUrl}
              className="w-full h-48 object-cover "
              loading="lazy"
            />

            <p className="text-gray-800 text-sm font-medium line-clamp-2">
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
