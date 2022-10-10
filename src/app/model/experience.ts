export class Experience { 
    id?: number; 
    experienceName: string;
    experienceDescription: string;

    constructor(experienceName: string, experienceDescription: string) { 
        this.experienceName = experienceName; 
        this.experienceDescription = experienceDescription;
    }
}
