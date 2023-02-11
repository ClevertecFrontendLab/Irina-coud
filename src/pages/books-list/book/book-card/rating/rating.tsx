import { RatingIcon, RatingItem, RatingWrapper } from './rating.styled';

import { useMakeRating } from './use-make-rating';

export const Rating = () => {

  const rating = useMakeRating();

  return (
    <RatingWrapper>
      {rating.map((item) => (
        <RatingItem key={item.id}>
          <RatingIcon xmlns={item.xmlns} fill={item.fill}><path d={item.d} stroke={item.stroke} />
          </RatingIcon>
        </RatingItem>))}
    </RatingWrapper>
  )
};
