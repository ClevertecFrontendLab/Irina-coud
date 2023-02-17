import styled from 'styled-components';

export const DocumentationWrapper = styled.div`
  max-width: 826px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
    @media screen and (max-width: 870px) {
      padding: 0 64px;
    }
    @media screen and (max-width: 330px) {
         padding: 0 16px;
    }
`;

export const DocumentationTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
    @media screen and (max-width: 330px) {
      font-size: 18px;
      line-height: 28px;
    }
`;

export const DocumentationList = styled.ol`
  display: flex;
  flex-direction: column;

  >li {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin: 0 0 16px 0;
}

>li li {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

}

ol>li {
  margin: 0 0 0 30px;
}

ol>ol>li {
  margin: 0 0 0 30px;
}

>li ol {
  margin: 16px 0 16px 0;
}

>li ol>li {
  margin: 0 0 16px 30px;
}
`;
