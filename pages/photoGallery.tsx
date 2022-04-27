import BlurImage from "../components/BlurImage";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";



export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="w-3/4 mx-auto pb-28 md:mt-28 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-6xl m-10 text-center">Photo Gallery</h1>
       <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {images.map((image) => (
        <BlurImage key={image.id} image={image} />
        ))}
      </div> 
    </div>
  );
}

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SERVICE_KEY
  )
  const { data } = await supabaseAdmin.from('images').select('*');
  return {
    props: {
      images: data
    }
  };
}
type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}