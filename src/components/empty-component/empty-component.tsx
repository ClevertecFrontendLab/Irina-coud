import { EmptyMessage, EmptyWrapper } from "./empty-component.styled";

export interface IEmptyComponent {
  text: string,
  testId: string
}

export const EmptyComponent = ({ text, testId }: IEmptyComponent) => (
  <EmptyWrapper>
    <EmptyMessage data-test-id={testId}>{text}</EmptyMessage>
  </EmptyWrapper>
);
