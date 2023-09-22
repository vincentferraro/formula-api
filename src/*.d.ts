export interface DriverPoints extends Driver {
    points: number
}

export interface TeamDrivers extends Team {
    Drivers : Array<Driver>
}