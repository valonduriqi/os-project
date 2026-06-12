import { apiRequest } from "../Api";
import { GalleryResponse } from "./gallery";

export const getAllPhotos = () =>
  apiRequest<{}, GalleryResponse[]>({
    url: "photos?_limit=12",
  });
