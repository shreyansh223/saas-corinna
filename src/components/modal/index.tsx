import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowBigLeftIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  type?: 'Integration';
  logo?: string;
};

const Modal = ({
  trigger,
  children,
  title,
  description,
  type,
  logo,
}: Props) => {
  switch (type) {
    case 'Integration':
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src={`https://ucarecdn.com/8b64e504-4d6e-4146-bff2-80d373a3839f/logo.png`}
                  fill
                  alt="Corinna"
                />
              </div>
              <div className="text-gray-400">
                <ArrowLeft size={20} />
                <ArrowRight size={20} />
              </div>
              <div className="w-12 h-12 relative">
                <Image
                  src={`https://ucarecdn.com/4a6c33e2-2688-4cca-be47-c187178e988b/stripe.gif`}
                  fill
                  alt="Stripe"
                />
              </div>
            </div>
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className=" text-center">
                {description}
              </DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
    default:
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
  }
};

export default Modal;
