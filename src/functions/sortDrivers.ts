// import { DriverPoints } from "../*"
// let json = [
//     {
//         id: 1,
//         firstName: "Max",
//         lastName: "Verstappen",
//         number: 1,
//         teamId: 3,
//         points: 3
//     },
//     {
//         id: 2,
//         firstName: "Sergio",
//         lastName: "Perez",
//         number: 11,
//         teamId: 3,
//         points: 53
//     },
//     {
//         id: 3,
//         firstName: "Charles",
//         lastName: "Leclerc",
//         number: 16,
//         teamId: 1,
//         points: 6
//     },
//     {
//         id: 4,
//         firstName: "Carlos",
//         lastName: "Sainz",
//         number: 55,
//         teamId: 1,
//         points: 20
//     },
//     {
//         id: 5,
//         firstName: "Lewis",
//         lastName: "Hamilton",
//         number: 44,
//         teamId: 2,
//         points: 38
//     },
//     {
//         id: 6,
//         firstName: "Georges",
//         lastName: "Russel",
//         number: 63,
//         teamId: 2,
//         points: 100
//     }

import { DriverPoints } from "../*"

// ]
export async function SortDrivers(drivers:any):Promise<Array<DriverPoints>>{
    let driversSorted = drivers
    let index = driversSorted.length-1
    for(let i = 0; i<index; i++){
        if(driversSorted[i].points < driversSorted[i+1].points){
            let temp= driversSorted[i]
            driversSorted[i]=driversSorted[i+1]
            driversSorted[i+1] = temp
            i=-1
        }
    }
    return driversSorted
}

