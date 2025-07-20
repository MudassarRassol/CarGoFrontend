export interface TabProps {
    tabdata? : Itab[],
    title : string,
    onpress? : (e:Itab) => void   
}


export interface Itab{
    id : number,
    label : string,
    value : string
}