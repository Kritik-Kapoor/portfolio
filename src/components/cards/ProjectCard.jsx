import { useState } from "react";
import { SendIcon } from "../../Icons";
import ProjectModal from "../modal/ProjectModal";

const ProjectCard = ({ data }) => {
  const { img, title, description, languages, url, readMore } = data;

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="project-card">
      <img
        src={img[0].image}
        alt={`${title} screenshot`}
        className="h-[250px] rounded"
      />
      <h4 className="font-medium text-2xl mt-2">{title}</h4>
      <p className="leading-6 my-3">
        {readMore ? description.slice(0, 200) + "..." : description}
      </p>
      <p className="flex items-center flex-wrap gap-1 pb-10 xl:pb-12">
        {languages?.map((tech, i) => (
          <span key={i} className="bg-[#000020] px-1.5 py-1 rounded">
            {tech}
          </span>
        ))}
      </p>
      <div className="absolute bottom-1.5 lg:bottom-2 left-1/2 -translate-x-2/4 w-11/12 flex items-center justify-between">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-2 py-1.5 rounded-md flex items-center"
        >
          Visit <SendIcon />
        </a>
        {readMore && (
          <button
            className="bg-[#3f0d87] px-2 py-1.5 rounded-md"
            onClick={() => setOpenModal(true)}
          >
            Read More
          </button>
        )}
      </div>
      <ProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={data}
      />
    </div>
  );
};

export default ProjectCard;
