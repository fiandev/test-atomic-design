export default function BurgerButton ({ className, isActive, toggleActive }) {
  
  return (
      <div onClick={ toggleActive } className={`${ className } items-center justify-center flex flex-col gap-2`}>
        <span className={ `block w-8 h-0.5 transition-all bg-slate-900 ${ isActive ? "origin-top-left rotate-45" : ""}` }></span>
        <span className={ `block w-8 h-0.5 transition-all bg-slate-900 ${ isActive ? "origin-center scale-0" : ""}` }></span>
        <span className={ `block w-8 h-0.5 transition-all bg-slate-900 ${ isActive ? "origin-bottom-left rotate-[-45deg]" : ""}` }></span>
      </div>
    )
}