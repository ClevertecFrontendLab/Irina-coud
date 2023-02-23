import { LoaderWrapper, Spinner } from "./loader.styled";

export const Loader = () => (
  <LoaderWrapper data-test-id='loader'>
    <Spinner />
  </LoaderWrapper>
);
