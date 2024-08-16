import projects from '../../data';
import Project from '../Project/Project';
const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-10 md:px-[70px] md:py-[80px] flex flex-col gap-10 md:gap-[80px] text-white border-b border-gray-200"
    >
      <div className="featured-project gap-[8px] max-w-full md:max-w-[900px] xl:max-w-[1200px] ">
        <h1
          className="uppercase text-4xl md:text-[76px] xl:text-[96px] font-bold leading-none "
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          Featured Projects
        </h1>
        <p
          className="text-base md:text-lg xl:text-xl text-[#C7C7C7] max-w-full md:max-w-[600px] xl:max-w-[800px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className='flex flex-col gap-20'>
            {Object.keys(projects).map((key) => {
                const project = projects[key];
                return (
                    <Project 

                        key={key}
                        name={project.name}
                        link={project.link}
                        description={project.description.join(' ')}
                        image={project.image}
                        year={project.year}
                        role={project.role}
                        githubLink={project.githubLink}
                    />
                );
            })}
        </div>
    </section>
  );
}

export default Projects;
