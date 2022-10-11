function Footer(props: any) {
  return (
    <div className="flex h-24 w-screen justify-between bg-bgcolor items-center mt-12 p-6 pl-12 pr-12 border-t-2 border-lgreen">
      <div>
        <a
          onClick={
            // Mailto
            () => (window.location.href = "mailto:ojta@post.cz")
          }
          className="text-white font-bold cursor-pointer"
        >Contact Me</a>
      </div>
      <div className="flex">
        <h3>Vojtěch Döme</h3>
        <p className="pl-4">2022</p>
      </div>
    </div>
  );
}

export default Footer;
