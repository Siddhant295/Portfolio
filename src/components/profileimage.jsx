import { AspectRatio } from "@/components/ui/aspect-ratio"
import profilePic from '../assets/profile_pic.png'

export function Profileimage() {
  return (
    <AspectRatio
      ratio={32/ 6}
      className="bg-muted w-full max-w-[12rem] rounded-lg"
    >
      <img
        src={profilePic}
        alt="Photo"
        className="w-full h-full rounded-lg object-cover dark:brightness-20"
      />
    </AspectRatio>
  )
}
