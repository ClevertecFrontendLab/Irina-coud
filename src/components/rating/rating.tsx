import { useLocation, useParams } from 'react-router-dom';

import { useMakeRating } from './use-make-rating';

import {
  RatingIcon,
  RatingIsEmpty,
  RatingItem,
  RatingWrapper
} from './rating.styled';

interface IRating {
  rating?: number | null | undefined;
}

export const Rating = ({ rating }: IRating) => {

  const ratingStars = useMakeRating();

  const { category, bookId } = useParams();

  const location = useLocation();

  const isBookPageLocation = location.pathname.includes(`books/${category}/${bookId}`);

  return (
    <RatingWrapper>
      {isBookPageLocation ? ratingStars.map((item, index) => (
        <RatingItem key={item.id}>
          <RatingIcon xmlns={item.xmlns} fill={index < rating! ? '#FFBC1F' : item.fill}><path d={item.d} stroke={item.stroke} />
          </RatingIcon>
        </RatingItem>)) : rating ? ratingStars.map((item, index) => (
          <RatingItem key={item.id}>
            <RatingIcon xmlns={item.xmlns} fill={index < rating ? '#FFBC1F' : item.fill}><path d={item.d} stroke={item.stroke} />
            </RatingIcon>
          </RatingItem>)) : <RatingIsEmpty>еще нет оценок</RatingIsEmpty>}
    </RatingWrapper>
  )
};
