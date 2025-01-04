'use client'
import Image from "next/image";
import { useRef, useState } from "react";
export default function Home() {
  // image preview
  const inputImgRef = useRef(null)
  const [previewSrc, setPreviewSrc] = useState('/image/preview.png')

  // filter input
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [invert, setInvert] = useState(0)
  const [grayscale, setGrayscale] = useState(0)
  const [hue_rotate, setHue_rotate] = useState(0)
  const [saturate, setSaturate] = useState(100)
  const [sepia, setSepia] = useState(0)
  const [blur, setBlur] = useState(0)
  const [opacity, setOpacity] = useState(100)


  const previewInput = () => {
    if (inputImgRef.current) {
      inputImgRef.current.click()
    }
  }

  const image_filter = `brightness(${brightness}%)
   contrast(${contrast}%)
    invert(${invert}%)
     grayscale(${grayscale}%)
      hue-rotate(${hue_rotate}deg)
       saturate(${saturate}%)
        sepia(${sepia}%)
        blur(${blur}px)
        opacity(${opacity}%)
    `;

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreviewSrc(URL.createObjectURL(file))
    }
  }

  const save_final_image = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const previewImg = document.getElementById('previewImg')
    canvas.width = previewImg.naturalWidth
    canvas.height = previewImg.naturalHeight
    ctx.filter = image_filter
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height)
    const link = document.createElement('a')
    link.download = 'final_edit_par.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="h-screen bg-base-100 flex items-center justify-center">
      <div className="card bg-neutral">
        <div className="card-body">
          <input type="file" className="input input-primary hidden" onChange={(e) => handleFileChange(e)} ref={inputImgRef} id="inputImage" accept="image/*" />
          <div className="lg:grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="p-4 mb-10">
                <Image src={previewSrc} height={350} width={450} style={{ transition: 'all 150ms ease-in-out', filter: image_filter }} id="previewImg" className="card" alt="preview" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1">

                  <button onClick={previewInput} className="btn btn-accent w-full">Choose Image</button>
                </div>
                <div className="col-span-1">
                  <button onClick={save_final_image} className="btn btn-primary w-full">save Image</button>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-center p-3 rounded tracking-wider uppercase bg-primary text-white/70 font-bold text-2xl">Image Edit</h3>
                </div>
                <div className="card-body">
                  <div className="p-3 border card border-primary">
                    <div className="card-header mb-3">
                      <h3 className="font-bold uppercase ">Image Filter</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">

                      <div className="col-span-1 mb-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>Brightness</div>
                          <div>{brightness}%</div>
                        </div>
                        <input type="range" onChange={(e) => setBrightness(e.target.value)} value={brightness} className="range range-primary" max={200} />
                      </div>

                      <div className="col-span-1 mb-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>Contrast</div>
                          <div>{contrast}%</div>
                        </div>
                        <input type="range" onChange={(e) => setContrast(e.target.value)} value={contrast} max={200} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>Invert</div>
                          <div>{invert}%</div>
                        </div>
                        <input type="range" onChange={(e) => setInvert(e.target.value)} value={invert} max={100} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>Grayscale</div>
                          <div>{grayscale}%</div>
                        </div>
                        <input type="range" onChange={(e) => setGrayscale(e.target.value)} value={grayscale} max={100} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>Hue-rotate</div>
                          <div>{hue_rotate}%</div>
                        </div>
                        <input type="range" onChange={(e) => setHue_rotate(e.target.value)} value={hue_rotate} max={360} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>saturate</div>
                          <div>{saturate}%</div>
                        </div>
                        <input type="range" onChange={(e) => setSaturate(e.target.value)} value={saturate} max={200} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>sepia</div>
                          <div>{sepia}%</div>
                        </div>
                        <input type="range" onChange={(e) => setSepia(e.target.value)} value={sepia} max={100} className="range range-primary" />
                      </div>

                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>blur</div>
                          <div>{blur}px</div>
                        </div>
                        <input type="range" onChange={(e) => setBlur(e.target.value)} value={blur} max={15} className="range range-primary" />
                      </div>
                      <div className="col-span-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className='uppercase'>opacity</div>
                          <div>{opacity}%</div>
                        </div>
                        <input type="range" onChange={(e) => setOpacity(e.target.value)} value={opacity} max={100} className="range range-primary" />
                      </div>

                    </div>
                  </div>


                  <div className="card border border-primary p-3">
                    <div className="card-header mb-3">
                      <h3 className="font-bold uppercase ">Image Transform</h3>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                      <div className="col-span-2">
                        <button className="btn w-full">Rotate</button>
                      </div>
                      <div className="col-span-2">
                        <button className="btn w-full">Rotate</button>
                      </div>
                      <div className="col-span-2">
                        <button className="btn w-full">Rotate</button>
                      </div>
                      <div className="col-span-2">
                        <button className="btn w-full">Rotate</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
