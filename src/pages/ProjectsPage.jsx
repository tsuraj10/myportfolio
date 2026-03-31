import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
