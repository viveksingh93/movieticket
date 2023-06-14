export interface Movie{
    BasicPrice: number;
    MovieName: string;
    Row:{
        row:number;
        start:number;
        End:number;
        AlreadyBooked:number[]
    }[]
}