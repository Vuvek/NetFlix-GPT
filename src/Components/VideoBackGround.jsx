import { useTypeSelector } from "../utils/hooks/useReduxHook";
import useMovieTrailer from "../utils/hooks/fetchingDataHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const { trailerVideo: trailer } = useTypeSelector((store) => store.movies);

  useMovieTrailer(movieId);

  return (
    <div>
      {trailer?.key && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?start=0&end=5&vq=hd1080&autoplay=1&mute=1&playlist=${trailer?.key}&loop=1&rel=0&fs=0&&autohide=2&modestbranding=0&controls=0&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackGround;
