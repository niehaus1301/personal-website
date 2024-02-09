import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchSplinecode() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_SPLINE_URL, {
        responseType: "blob",
        onDownloadProgress: ({ loaded }) =>
          setProgress(
            (loaded / import.meta.env.VITE_SPLINE_CONTENT_LENGTH) * 100
          ),
      })
      .then(({ data }) => {
        setProgress(100);
        const url = window.URL.createObjectURL(data);
        setDataUrl(url);
      });
  }, []);

  return { dataUrl, progress };
}
