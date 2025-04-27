const NoAccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
            <p className="text-lg text-gray-700">You do not have permission to access this resource.</p>
        </div>
    );
};

export default NoAccess;