
export default function LanguagesChips(props){
    const styles = {
        backgroundColor : props.bgColor,
        color : props.color
    }
    return(
        <>
            {/* <div className="chip"> */}
                <span className= {props.class} style={styles} >{props.name}</span>
            {/* </div> */}
        </>
    )
}