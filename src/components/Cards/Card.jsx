import styles from "../../styles/Card.module.css"
export default function Card(props){
    return(
        <main className={styles["card-outer-container"]}>
        <div className={styles["card"]+" "+styles["hcenter"]} >
            {props.children}
        </div>
        </main>
    )
}