import type { Route } from './+types/index';
import Pagination from '../components/Pagination';
import { useState } from 'react';
import type { Project, StrapiResponse, StrapiProject } from '~/types';
import ProjectCard from '../components/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The friendly dev | Projects' },
    {
      name: 'description',
      content: 'Welcome to React Router! for a custom website development',
    },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`
  );
  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));
  return { projects };
}
interface PageContentProps {
  loaderData: { projects: Project[] };
}

const PageContent = ({ loaderData }: PageContentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const [currentPage, setCurrentPage] = useState(1);
  const { projects } = loaderData;

  // Get unique Category
  const categories = [
    'ALL',
    ...new Set(projects.map((project) => project.category)),
  ];

  // filter project based on Category

  const filterProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  console.log(filterProjects);
  console.log(categories);

  // calculate the total pages
  const ProjectPerPage = 10;
  const totalPages = Math.ceil(filterProjects.length / ProjectPerPage);

  // get current pages projects
  const indexOfLast = currentPage * ProjectPerPage;
  const indexOfFirst = indexOfLast - ProjectPerPage;
  const currentProjects = filterProjects.slice(indexOfFirst, indexOfLast);

  // pagination button render

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8"> ✈️Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PageContent;
