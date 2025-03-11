export default function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Desarrollado por{" "}
              <span className="font-semibold">Wilfer Daniel Ciro Maya</span>
            </p>
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </footer>
  );
}
