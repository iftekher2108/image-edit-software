import Image from "next/image"
function Appbar() {

    const themes = [
        "default",
        "dark",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    
      ]

    return(
        <>
        <div className="fixed top-4 start-4 z-50">

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                  width="12px"
                  height="12px"
                  className="inline-block h-2 w-2 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048">
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="flex flex-col gap-1 dropdown-content bg-base-300 rounded-box z-[1] h-72 w-52 overflow-y-scroll p-2 shadow-2xl">
                {
                  themes.map((theme) => (
                    <li key={theme}>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={theme}
                        // onChange={(e) => setTheme(e.target.value)}
                        value={theme} />
                    </li>
                  ))
                }

              </ul>
            </div>

          </div>

          <div className="flex bg-primary justify-end p-4 sticky top-0 z-40">
            {/* <Image src={} height={40} width={40} alt="logo" /> */}


            <div>
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral">About</label>
              </div>
            </div>
          </div>

          <div className="drawer drawer-end z-50">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}

                  <div className="flex flex-col justify-center items-center p-2 gap-2">
                    <Image src='/image/avatar.jpg' style={{ height: "140px", width: '140px' }} height={140} width={140} className="rounded-lg" alt="Creator Avatar" />

                    <div>
                      <span className="text-sm">Develop by -</span>
                      <h3 className="text-xl uppercase mt-2"><span className="iftekher font-extrabold bg-primary btn">Iftekher</span> <span className="bg-success font-extrabold btn">Mahmud</span></h3>
                    </div>
                    <span className="font-bold">Software Engineer</span>

                    <div className="text-sm">
                      <p>
                        <span className="text-primary font-bold">Portfolio: </span><a className="underline hover:text-primary" href="https://iftekher-mahmud.netlify.app" target="_blank"><span>iftekher-mahmud.netlify.app</span></a>
                      </p>
                      <p>
                        <span className="text-primary font-bold">Facebook: </span><a className="underline hover:text-primary" href="https://www.facebook.com/mdiftekher.mahmud" target="_blank"><span>MD Iftekher Mahmud</span></a>
                      </p>
                      <p>
                        <span className="text-primary font-bold">LinkedIn: </span><a className="underline hover:text-primary" href="https://www.linkedin.com/in/iftekhermahmud1/" target="_blank"><span>Iftekher Mahmud</span></a>
                      </p>
                      <p>
                        <span className="text-primary font-bold">Email: </span><a className="underline hover:text-primary" href="mailTo::iftekhermahmud1@gmail.com" target="_blank"><span>Iftekher Mahmud</span></a>
                      </p>



                    </div>
                    <div className="divider divider-primary">Iftekher Mahmud</div>
                    <div>
                      <p>Note: If you Find any Bug and Problem then picture of it and Send to Email.</p>
                    </div>

                  </div>


                </ul>
              </div>
            </div>

        </>
    )
}
export default Appbar
