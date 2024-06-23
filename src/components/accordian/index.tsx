import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as ShadcnAccordian,
} from '../ui/accordion';
type Props = {
  trigger: string;
  content: string;
};

const Accordion = ({ trigger, content }: Props) => {
  return (
    <ShadcnAccordian type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </ShadcnAccordian>
  );
};

export default Accordion;
