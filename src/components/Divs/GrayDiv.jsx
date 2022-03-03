import styles from "../../styles/Div.module.css"
export default function GrayDiv(props){
    return(
    <section style={{display:"flex", justifyContent:"space-between"}} className={styles["gray-div"]}>
        {props.children}
    </section>)
}