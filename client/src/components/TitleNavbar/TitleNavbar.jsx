import { navbarText } from "../../constants/textConstants"

export default function TitleNavbar() {
  return (
    <div className='h-full w-28 flex items-center justify-start'>
        <h3 className='text-white max-sm:text-2xl max-md:text-2xl font-semibold select-none '>
          { navbarText }
        </h3>
    </div>
  )
}
