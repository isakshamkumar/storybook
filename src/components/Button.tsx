import { ReactNode } from "react"


type Props = {
    width?:string,
    color?:'red'|'blue'|'green',
    children:ReactNode
}

export default function Button({width='500px',color,children}: Props) {
  return (
    <button style={{backgroundColor:color,width:width,padding:'10px'}}>{children}</button>
  )
}
