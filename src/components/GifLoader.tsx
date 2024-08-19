import Loader from "../assets/loadGif.gif";

export default function GifLoader() {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={Loader} alt="Loading..." className="w-12 h-12 mb-4" />
      <p className="text-gray-600 text-sm">One moment please......</p>
    </div>
  );
}