import { ReactNode } from "react";

interface ReflectionItemProps {
    note: string;
  children?: ReactNode;
}

export const ReflectionItem:React.FC<ReflectionItemProps> = ({note}) =>{
    return (<div className="side-note">Note: {note}</div>);
}