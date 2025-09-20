export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Sandre E-commerce. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-gray-300">
            Términos de Servicio
          </a>
          <a href="#" className="hover:text-gray-300">
            Contáctanos
          </a>
        </div>
      </div>
    </footer>
  );
}
