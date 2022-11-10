
import{artwork}from './artwor_interface';


let cim=(document.getElementById('cim')as HTMLInputElement)
let year=(document.getElementById('year')as HTMLInputElement)
let ar=(document.getElementById('ar')as HTMLInputElement)

function cimcheck(cim:string):boolean{
    if (cim.length>= 1 && cim !=""){
    return true;
    } return false;
}
function yearcheck(year:Date):boolean{
    if(year.getFullYear > )return true;
    return false;
}
function archeck(ar:number):boolean{
    if(ar>=0){return true}
    return false;
}