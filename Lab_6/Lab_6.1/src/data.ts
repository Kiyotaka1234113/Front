
export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}


export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Doe",
    description: "Learn the basics of React, including components, props, and state."
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    instructor: "Jane Smith",
    description: "Deep dive into TypeScript features like generics, union types, and decorators."
  },
];


export function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id);
}