import styles from "./Card.module.css";

function Card(props) {

    if (props.variant === "caratula") {
        return (
            <div className={`${styles.card} ${styles.caratula}`}>
                
                <h2 className={styles.university}>
                    {props.universidad}
                </h2>

                <p className={styles.faculty}>
                    {props.facultad}
                </p>

                <p className={styles.career}>
                    CARRERA: {props.carrera}
                </p>

                <div className={styles.divider}></div>

                <p><strong>Materia:</strong> {props.materia}</p>
                <p><strong>Tema:</strong> {props.tema}</p>
                <p><strong>Docente:</strong> {props.docente}</p>

                <div className={styles.divider}></div>

                <p><strong>Estudiante:</strong> {props.estudiante}</p>
                <p><strong>Matrícula:</strong> {props.matricula}</p>
                <p><strong>Grupo:</strong> {props.grupo}</p>

                <div className={styles.divider}></div>

                <p><strong>Gestión:</strong> {props.gestion}</p>
                <p><strong>Fecha:</strong> {props.fecha}</p>
            </div>
        );
    }

    
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>
                {props.title}
            </h2>

            <p className={styles.description}>
                {props.description}
            </p>

            <button className={styles.button}>
                Ver más
            </button>
        </div>
    );
}

export default Card;
