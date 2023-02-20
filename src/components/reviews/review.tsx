import { Rating } from '../rating/rating';

import { LINK_HOST } from '../../constants';

import { useDateTransform } from '../../utils/date-transform';

import reviewerPhoto from '../../assets/icon/reviewer-photo.png';

import {
  ReviewContainer,
  ReviewerInfo,
  ReviewerInfoBox
} from './review.styled';

export interface IReviewer {
  createdAt: string;
  id: number;
  rating: number;
  text: string;
  user: {
    avatarUrl: null | string;
    commentUserId: number;
    firstName: string;
    lastName: string;
  }
}

export const Review = ({ item }: { item: IReviewer }) => {

  const { text, user, createdAt } = item;

  const formatDate = useDateTransform(createdAt);

  return (
    <ReviewContainer>
      <ReviewerInfo>
        <li><img src={user.avatarUrl ? `${LINK_HOST}${user.avatarUrl}` : reviewerPhoto} alt="avatar" /></li>
        <ReviewerInfoBox>
          <li>{`${user.firstName} ${user.lastName}`}</li>
          <li>{formatDate}</li>
        </ReviewerInfoBox>
      </ReviewerInfo>
      <Rating />
      <p>{text}</p>
    </ReviewContainer>
  )
};
