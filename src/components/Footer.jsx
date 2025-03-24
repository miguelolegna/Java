import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        <Link to="/support" style={styles.link}>
          Reportar um erro &#9888;
        </Link>
      </p>
      <p style={styles.copywrite}>© 2025 Jogos Java. Todos os direitos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    position: "fixed",        // Fixar o footer no fundo
    bottom: 0,               // Garantir que ele fique no fundo da tela
    left: 0,
    right: 0,
    textAlign: "center",
    padding: "10px",
    color: "white",          // Texto branco
    backgroundColor: "transparent", // Sem fundo
    zIndex: 9999,            // Garante que o footer fique acima de outros elementos
  },
  link: {
    color: "yellow",         // Letra amarela
    textDecoration: "none",  // Sem sublinhado
    fontWeight: "bold",      // Letra em negrito
  },
  copywrite: {
    color: "white",          // Cor branca para o texto de copyright
    fontSize: "14px",        // Tamanho menor para o copyright
    marginTop: "10px",       // Espaço entre o botão e o copyright
  }
};
