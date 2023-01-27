import Circle from "../../atoms/Circle";

export default function PersonImage () {
  return (
      <div className="relative flex justify-center items-center">
        <Circle className="absolute z-[-1] w-72 h-72 lg:w-[35rem] lg:h-[35rem] bg-main" />
        <img 
          className="h-[60vh] lg:w-full lg:h-screen"
          alt="person image"
          src="https://o.remove.bg/downloads/a0b483dc-4532-4836-9e3d-41e0c85f1d2e/download_-_2023-01-27T140542.385-removebg-preview.png"
        />
      </div>
    )
}