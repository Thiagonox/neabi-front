import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Galeria() {
  return (
    <div>
        <Header></Header>
        <main className='w-11/12 m-auto grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-4'>
        <div class="hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/29623715556_6e071fd90a_o.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_hh1_hh2_potw2242a.jpg" alt=""/>
                </div>
                <div class=" hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/9460197354_907d525c54_o.jpeg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_ngc1961_wfc3_1flat_cont_final.jpg" alt=""/>
                </div>
                <div class=" hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/jpss-2_payload_stacking.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia25015.jpg" alt=""/>
                </div>
                <div class=" hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/52407278959_8de80e972e_o.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/gsfc_20171208_archive_e000226_orig.jpg" alt=""/>
                </div>
                <div class=" hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/52429227274_b42274e099_o.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-01ga76rm0c11w977jrhgj5j26x.png" alt=""/>
                </div>
                <div class=" hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/52319135048_b2acddc60e_o.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss067e359846_orig.jpg" alt=""/>
                </div>
                <div class="col-span-2 relative hover:shadow-2xl duration-300 delay-100 shadow-xl  overflow-hidden m-3">
                    <img class="w-full h-full object-cover" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/jpegpia23403.jpg" alt=""/>
                </div>

        </main>
    </div>
  )
}

export default Galeria