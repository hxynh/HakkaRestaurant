import MenuItems from "./MenuItems";

export type MenuProps = {
    category: string,
    defaultChecked: boolean
}

export default function Menu({category, defaultChecked} : MenuProps) {  return (
    <>
        <input type="radio" name="my_tabs_1" role="tab" className="tab px-2" aria-label={category} defaultChecked={defaultChecked}/>
        <MenuItems category={category} defaultChecked/>
    </>
  )
}
