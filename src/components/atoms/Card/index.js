export default function Card ({ children, className }) {
  return (
      <div className={`w-fit flex flex-col rounded-md shadow-lg bg-white ${ className }`}>
        { children }
      </div>
    )
}