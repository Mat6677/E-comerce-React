import { infinity } from "ldrs";

export const Loader = () => {
  infinity.register();
  return (
   <div className="w-screen flex justify-center mt-20">
     <l-infinity
      size="250"
      stroke="4"
      stroke-length="0.15"
      bg-opacity="0.1"
      speed="1.3"
      color="white"
    ></l-infinity>
   </div>
  );
};
