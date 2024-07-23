"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { useModal } from "../providers/modal-provider";

type Props = {
  title: string;
  subHeading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, title, subHeading, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();
  const handleClose = () => setClose();
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center flex flex-col h-96 items-center gap-4 overflow-scroll">
            {subHeading}
            {children}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" className="w-full" onClick={handleClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    // <Drawer open={isOpen} onClose={handleClose}>
    //   <DrawerContent>
    //     <div>
    //       <DrawerHeader>
    //         <DrawerTitle className="text-center">{title}</DrawerTitle>
    //         <DrawerDescription className="text-center flex flex-col h-96 items-center gap-4 overflow-scroll">
    //           {subHeading}
    //           {children}
    //         </DrawerDescription>
    //       </DrawerHeader>
    //       {/* <div className="text-center flex flex-col items-center  overflow-scroll">
    //         {children}
    //       </div> */}
    //       <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
    //         <DrawerClose asChild>
    //           <Button variant="ghost" className="w-full" onClick={handleClose}>
    //             Close
    //           </Button>
    //         </DrawerClose>
    //       </DrawerFooter>
    //     </div>
    //   </DrawerContent>
    // </Drawer>
    // <Sheet>
    //   <SheetContent side={"bottom"}>
    //     <SheetHeader>
    //       <SheetTrigger asChild>
    //         <Plus />
    //       </SheetTrigger>
    //       <SheetTitle className="text-center">{title}</SheetTitle>
    //       <SheetDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
    //         {subHeading}
    //         {children}
    //       </SheetDescription>
    //     </SheetHeader>
    //     <SheetFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
    //       <SheetClose asChild>
    //         <Button variant="ghost" className="w-full" onClick={handleClose}>
    //           Close
    //         </Button>
    //       </SheetClose>
    //     </SheetFooter>
    //   </SheetContent>
    // </Sheet>
  );
};

export default CustomModal;
