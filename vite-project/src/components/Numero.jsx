export default function Numero(props){
    return(
        <>
            <p>valor do State num em número: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>
                soma 10
            </button>
        </>
    )
}