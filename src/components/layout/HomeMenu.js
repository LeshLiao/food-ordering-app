import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeader"

export default function HomeMenu() {
    return (
        <>
        <section className="">
            <div className="h-48 w-48 absolute right-0 -z-10">
                <Image src={'/salad01.png'} layout={'fill'} objectFit={'contain'} alt={'salad'}/>
            </div>
            <div className="h-48 w-48 absolute left-0 -z-10">
                <Image src={'/salad02.png'} layout={'fill'} objectFit={'contain'} alt={'salad'}/>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders
                subHeader={'check out'}
                mainHeader={'Menu'} />

            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>

        </section>
        </>
    )
}