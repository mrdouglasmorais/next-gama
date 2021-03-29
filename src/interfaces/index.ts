export interface ICategorie{
    id: string;
    title: string;
}

export interface AllCategories{
    categories: ICategorie[]
}

export interface ICourses {
    id: number;
    title: number;
    price: number;
    category_id: string;
    slug: string;
}

export interface AllCourses {
    courses: ICourses[]
}