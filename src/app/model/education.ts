export class Education {
    id?: number;
    educationName: string;
    educationDescription: string;

    constructor(educationName: string, educationDescription: string) { 
        this.educationName = educationName;
        this.educationDescription = educationDescription;
    }
}

