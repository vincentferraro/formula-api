export interface DriverPoints extends Driver {
    points: number
}

export interface TeamDrivers extends Team {
    Drivers : Array<Driver>
}

interface TeamPoint{
    id: number,
    name: string,
    location: string,
    competitionId: string,
    points: number
}