
import { DriverPoints } from "../*"
import { TeamPoint } from "../*"

// This function sort the array DESCENDANT
export async function displayStanding(array:any, position: boolean):Promise<Array<DriverPoints>|Array<TeamPoint>>{
    let arraySorted = array
    let index = arraySorted.length-1
    for(let i = 0; i<index; i++){
        if(arraySorted[i].points < arraySorted[i+1].points){
            let temp= arraySorted[i]
            arraySorted[i]=arraySorted[i+1]
            arraySorted[i+1] = temp
            i=-1
        }
    }
    if(position === true){
        for(let i = 0; arraySorted < arraySorted.length; i++){
            console.log(arraySorted[i])
            arraySorted[i].ranking = i+1
        }
    }
    return arraySorted
}

