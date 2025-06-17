import type {JSX} from "react";

export default function Modal({
    children
}: {
    children: JSX.Element
}) {
    return <div className="flex fixed w-full h-full z-50 bg-gray-500/50">
        <div className="rounded-md shadow-md p-8">
            {children}
        </div>
    </div>
}
