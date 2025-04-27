import Jumbotron from "../../components/organism/Jumbotron/Jumbotron";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 h-200">
            <Jumbotron
                title="Master web development with our DevPath" 
                subtitle="structured learning path, expert-led courses, hands-on projects to help you become better provisional web developer" 
                CtaButtonText="Start Learning now"
                CtaSecButtonText="view courses"
            />
            <p className="text-center mt-8">next section </p>
        </div>
    );
};

export default Home;