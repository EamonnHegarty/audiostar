import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/utils/links";

const DropdownLinks = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button size="icon" className="bg-inherit">
          <AlignLeft className="bg-black " />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href} className="hover:bg-orange">
              <Link href={link.href} className="flex items-center gap-x-2  ">
                <span className="capitalize">{link.text}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownLinks;
