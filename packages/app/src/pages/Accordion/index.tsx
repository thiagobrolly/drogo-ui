import {
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@drogo-ui/components';

export function AccordionPage() {
  return (
    <Flex direction="column" gap="5rem">
      <Flex direction="column" gap="2rem">
        <Heading color="black" bold size="xlarge">
          Accordion single
        </Heading>
        <Accordion type="single">
          <AccordionItem disabled value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex direction="column" gap="2rem">
        <Heading color="black" bold size="xlarge">
          Accordion multiple
        </Heading>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex direction="column" gap="2rem">
        <Heading color="black" bold size="xlarge">
          Accordion Disabled All
        </Heading>
        <Accordion type="multiple" disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Flex direction="column" gap="2rem">
        <Heading color="black" bold size="xlarge">
          Accordion Disabled Item
        </Heading>
        <Accordion type="multiple">
          <AccordionItem value="item-1" disabled>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}
