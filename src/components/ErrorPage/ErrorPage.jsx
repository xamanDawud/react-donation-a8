import Headers from "../Header/Headers";

const ErrorPage = () => {
  return (
    <div>
      <Headers></Headers>
      <h1 className="text-4xl text-red-400 font-bold  text-center mt-[20%]">
        Data is not found here
      </h1>
    </div>
  );
};

export default ErrorPage;
