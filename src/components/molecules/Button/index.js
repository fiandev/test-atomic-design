export default function Button ({ children, className }) {
  return (
      <button className={`p-2 rounded-md uppercase font-semibold bg-main text-slate-50 ${ className }`}>
        {children}
      </button>
    )
}