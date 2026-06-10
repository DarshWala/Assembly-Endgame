
export default function LanguagesChips(props){
    const styles = {
        backgroundColor : props.bgColor,
        color : props.color
    }
    return(
        <>
            {/* <div className="chip"> */}
                <div className="chip" style={styles} >{props.name}</div>
            {/* </div> */}
        </>
    )
}