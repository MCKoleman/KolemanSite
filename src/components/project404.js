export default function Project404() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="d-block">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white flex text-center">
                    Oops, looks like that page doesn't exist!
                </h1>
                <p className="flex text-center">
                    Check that the URL is spelled correctly or go back to the
                    <a href="/" className="focus:outline-none inline-flex text-white hover:text-green-600">home</a>
                    page.
                </p>
            </div>
        </div>
    );
}