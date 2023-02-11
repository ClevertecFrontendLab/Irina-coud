import { Rating } from '../../books-list/book/book-card/rating/rating';

import { ReviewContainer, ReviewerInfo, ReviewerInfoBox } from './review.styled';

import { IReviewer } from './use-make-review'

import reviewerPhoto from '../../../assets/icon/reviewer-photo.png';


export const Review = (props: IReviewer) => {

  const { name, text, dataTime } = props;

  return (
    <ReviewContainer>
      <ReviewerInfo>
        <li><img src={reviewerPhoto} alt="avatar" /></li>
        <ReviewerInfoBox>
          <li>{name}</li>
          <li>{dataTime}</li>
        </ReviewerInfoBox>
      </ReviewerInfo>
      <Rating />
      <p>{text}</p>
    </ReviewContainer>
  )
};
