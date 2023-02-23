import { useMakeSocial } from './use-make-social';

import {
  FooterLine,
  FooterWrapper,
  FooterInfo,
  FooterSocialBox,
  FooterSocialIcon
} from './footer.styled';

export const Footer = () => {

  const socialList = useMakeSocial();

  return (
    <FooterLine>
      <FooterWrapper>
        <FooterInfo>© 2020-2023 Cleverland. Все права защищены.</FooterInfo>
        <FooterSocialBox>
          {socialList.map((socialItem) => (
            <a key={socialItem.id}>
              <FooterSocialIcon xmlns={socialItem.xmlns}><path d={socialItem.d} fill={socialItem.fill} fillRule={socialItem.fillRule} />
              </FooterSocialIcon>
            </a>
          ))}
        </FooterSocialBox>
      </FooterWrapper>
    </FooterLine>
  )
};
