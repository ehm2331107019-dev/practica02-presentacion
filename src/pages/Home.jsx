import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",   // centra vertical
        padding: "40px"
      }}
    >
      {/* CONTENEDOR CENTRADO REAL */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",        // 🔥 aquí está la magia
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px"
        }}
      >
        <Title title="Desarrollo Web UPA | I. T. I. & I. S. C." />

        <Card
          title="Primer Componente"
          description="Este es mi primer componente reutilizable en React con prácticas modernas y reutilizables"
        />

        <Card
          variant="caratula"
          universidad="Universidad Politecnica De Atlacomulco"
          facultad="Facultad de Tecnología"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programacion Web"
          tema="Introducción a React y Componentes"
          docente="Ing. Jovani Del Boque Florentino"
          estudiante="Evelin Hernandez Mateo"
          matricula="2331107019"
          grupo="ISC-802"
          gestion="2026"
          fecha="21 de febrero de 2026"
        />
      </div>
    </div>
  );
}

export default Home;