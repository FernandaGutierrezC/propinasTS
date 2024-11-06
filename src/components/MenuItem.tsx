import type { MenuItem } from "../type"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem) => void //función vía props
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <>
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between"
    onClick={()=> addItem(item)}
    >
    
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
    </>
  )
}
