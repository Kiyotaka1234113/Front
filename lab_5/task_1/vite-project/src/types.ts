export interface User {
    name: string;
    email: string;
    age: number;
}

export type SkillLevel = "Begginer" | "Intermediate" | "Expert";
export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}