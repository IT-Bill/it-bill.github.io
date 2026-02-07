import type { Project, Experience, Skill, Publication } from '../lib/types';
import { PUBLICATIONS_DATA } from '../data/publication';
import { PROJECTS_DATA } from '../data/projects';
import { EXPERIENCE_DATA } from '../data/experience';
import { PROGRAMMING_LANGUAGES_DATA, FRAMEWORKS_DATA } from '../data/skills';

// Helper function to add IDs to data items
function addId<T>(data: Omit<T, 'id'>[], prefix: string): T[] {
  return data.map((item, index) => ({
    ...item,
    id: `${prefix}-${index + 1}`
  } as T));
}

export const PUBLICATIONS: Publication[] = addId<Publication>(PUBLICATIONS_DATA, 'pub');
export const PROJECTS: Project[] = addId<Project>(PROJECTS_DATA, 'project');
export const EXPERIENCE: Experience[] = addId<Experience>(EXPERIENCE_DATA, 'exp');
export const PROGRAMMING_LANGUAGES: Skill[] = PROGRAMMING_LANGUAGES_DATA;
export const FRAMEWORKS: Skill[] = FRAMEWORKS_DATA;
