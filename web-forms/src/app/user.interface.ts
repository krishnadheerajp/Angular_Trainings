export interface User {
    name: string;
    email: string;
    gender:string; 
    courses: string;
    ocr: string;
    address: {
street: string;
postcode: string;
    }
    }