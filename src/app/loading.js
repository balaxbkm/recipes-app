import { LoaderPinwheelIcon } from "lucide-react";

export default function Loading() {
    return (
        <>
            <div className="w-full h-1 bg-red-200 absolute top-0"></div>
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="bg-red-100 drop-shadow-sm rounded-full p-0.5">
                    <LoaderPinwheelIcon className="animate-spin h-8 w-8 text-red-400" />
                </div>
            </div>
        </>
    );
}
