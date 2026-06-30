import {Link} from "react-router-dom";

interface ErrorPageProps {
    errorMessage?: string;
}

export default function ErrorPage({errorMessage}: ErrorPageProps) {
    return (
        <div className={"min-h-screen flex items-center justify-center gap-4 text-2xl"}>
            <div className={"flex flex-col items-center justify-center border border-gray-200 rounded-md p-16"}>
                <h1 className={"text-red-600 font-bold"}>{errorMessage ?? "Error 404, Page not Found."}</h1>
                <Link to={"../"} className={"btn btn-primary"}>Go back</Link>
            </div>
        </div>
    )
}