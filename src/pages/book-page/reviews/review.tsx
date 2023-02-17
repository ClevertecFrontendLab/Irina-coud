import { Rating } from '../../books-list/book/book-card/rating/rating';

import { ReviewContainer, ReviewerInfo, ReviewerInfoBox } from './review.styled';


import reviewerPhoto from '../../../assets/icon/reviewer-photo.png';


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

  // const dataTime = new Date(createdAt)

  const host = 'https://strapi.cleverland.by';

  return (
    <ReviewContainer>
      <ReviewerInfo>
        <li><img src={user.avatarUrl ? `${host}${user.avatarUrl}` : reviewerPhoto} alt="avatar" /></li>
        <ReviewerInfoBox>
          <li>{`${user.firstName} ${user.lastName}`}</li>
          <li>{createdAt}</li>
        </ReviewerInfoBox>
      </ReviewerInfo>
      <Rating />
      <p>{text}</p>
    </ReviewContainer>
  )
};
