export default function NavBackground ({ isActive, toggleActive }) {
  return <div onClick={ toggleActive } className={`${ isActive ? "block" : "hidden" } absolute bg-slate-900 opacity-[0.6] bottom-[-100vh] inset-x-0  w-screen h-screen`}></div>
}