import './Footer.css'

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: 'url(/img/footer.png)' }}>
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/img/icon-linkedin.svg" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/icon-github.svg" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/icon-ig.svg" alt="instagram" />
        </a>
      </div>
      <img src="/Group 1.png" alt="org" />
      <strong>&#169; Desarrollado por DDDesign</strong>
    </footer>
  )
}

export default Footer
