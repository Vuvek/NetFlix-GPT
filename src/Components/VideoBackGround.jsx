import { useTypeSelector } from "../utils/hooks/useReduxHook";
import useMovieTrailer from "../utils/hooks/fetchingDataHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const { trailerVideo: trailer } = useTypeSelector((store) => store.movies);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?version=3&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&control=0&showinfo=0&vq=hd1080`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
