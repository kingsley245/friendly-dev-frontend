import LatesPosts from '../components/LatestPost';

import type { Route } from './+types/index';
import AboutPreview from '../components/AboutPreview';

import type {
  Project,
  StrapiProject,
  StrapiResponse,
  Post,
  StrapiPost,
} from '~/types';
import FeaturedProject from '../components/FeaturedProject';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The friendly dev project with React' },
    {
      name: 'description',
      content: 'Welcome to React Router! for a custom website development',
    },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
    ),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('failed to fetch projects posts');
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectJson.data.map((item) => ({
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

  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    date: item.date,
  }));

  return { projects, posts };
}
const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  if (projects.length === 0) return null;

  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
      <LatesPosts posts={posts} />
    </>
  );
};

export default HomePage;
