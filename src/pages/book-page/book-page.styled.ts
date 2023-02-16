import styled from 'styled-components';

export const BookPageWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%; 
  padding: 0 15px;
    @media screen and (max-width: 770px) {
      max-width: 670px;
    }
    @media screen and (max-width: 325px) {
      max-width: 318px;
    }
`;

export const BookInfo = styled.div`
  display: grid;
  grid-template-areas: 
   "image title"
   "image author"
   "image btn"
   "image subtitle"
   "image description"
   "image description";
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 32% 8% 16% 8% 10%;
  margin: 42px 0 65px 0;
  max-height: 658px;
    @media screen and (max-width: 1180px) {
      grid-template-areas:
        "image title"
        "image author"
        "image btn"
        "image subtitle"
        "description description";
      grid-template-columns: 0.5fr 1.5fr;
    grid-template-rows: 12% 8% 33% 12% 9%;
      margin: 0 auto;
      row-gap: 20px;
      margin: 50px 0 43px 0;
      column-gap: 20px;
    }
    @media screen and (max-width: 770px) {
           grid-template-areas:
        "image title"
        "image author"
        "image btn"
        "subtitle subtitle"
        "description description";
      row-gap: 10px;
      grid-template-columns: 43% 57%;
        grid-template-rows: 11% 14% 19% 10% 50%;
      margin: 46px auto 35px auto;
    }
    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 15px;
      max-height: 900px;
    }
    @media screen and (max-width: 600px) {
      max-height: 1194px;
    }
    @media screen and (max-width: 325px) {
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
      margin: 21px auto 35px auto;
    }
`;

export const BookImageBox = styled.div`
  grid-area: image;
  /* display: flex; */
  /* justify-content: center; */
    @media screen and (max-width: 325px) {
      max-width: 288px;
      width: 100%;
    }
`;

export const BookImage = styled.img`
  max-width: 445px;
  max-height: 594px;
  width: 100%;
  border-radius: 10px;
    @media screen and (max-width: 1180px) {
      max-width: 250px;
    }
    @media screen and (max-width: 770px) {
      max-width: 136px;
    }
    @media screen and (max-width: 650px) {
      max-width: 188px;
    }
    @media screen and (max-width: 325px) {
      margin: 0 auto;
      height: 260px;
    }
`;

export const BookTitle = styled.p`
  grid-area: title;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
    @media screen and (max-width: 770px) {
      font-size: 24px;
      line-height: 30px;
    }
    @media screen and (max-width: 650px) {
      text-align: left;
    }
    @media screen and (max-width: 325px) {
      font-size: 18px;
      line-height: 28px;
      margin: 10px 0 10px 0;
    }
`;

export const BookAuthor = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #A7A7A7;
  grid-area: author;
    @media screen and (max-width: 770px) {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }
    @media screen and (max-width: 650px) {
      text-align: left;
    }
    @media screen and (max-width: 325px) {
      font-weight: 400;
      font-size: 12px;
      margin: 0px 0 40px 0;
    }
`;

export const BookBtn = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
  border-radius: 30px;
  max-width: 350px;
  width: 100%;
  height: 52px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  grid-area: btn;
     @media screen and (max-width: 770px) {
      max-width: 306px;
    }
    @media screen and (max-width: 330px) {
      max-width: 288px;
      height: 40px;
      font-size: 12px;
      line-height: 18px;
    } 
`;

export const BookBtnBooking = styled(BookBtn)`
  @media screen and (max-width: 330px) {
    margin: 0px 0 40px 0;   
  } 
`;

export const BookBtnReview = styled(BookBtn)`
  @media screen and (max-width: 770px) {
    max-width: 640px;
  }
`

export const BookSubtitle = styled.p`
  margin: 0 0 32px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  grid-area: subtitle;
    ::after{
      content: ' ';
      display: block;
      max-width: 350px;
      width: 100%;
      height: 1px;
      background: #EBEBEB;
      position: relative;
      top:16px;
      left:0;
    }
    span{
      line-height: 24px;
      color: #A7A7A7;
    }
    @media screen and (max-width: 770px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
        ::after{
          max-width: 305px;
        }
    }
    @media screen and (max-width: 330px) {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 16px 0;
      width: 100%;
        ::after{
          max-width: 288px;
          top:8px;
        }
    }
`;

export const BookDescriptionText = styled.p`
  font-size: 16px;
  line-height: 24px;
  grid-area: description;
  align-items: end;
    @media screen and (max-width: 330px) {
      font-size: 12px;
      line-height: 18px;
    }
`;

export const BookRatingBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 221px;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 57px 0;
    span{
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    @media screen and (max-width: 770px) {
      margin: 0 0 50px 0;
    }
    @media screen and (max-width: 330px) {
      margin: 0 0 20px 0;
    }
`;

export const BookDetailInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 62px 0;
  flex-wrap: wrap;
    @media screen and (max-width: 770px) {
      margin: 0 0 50px 0;
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      row-gap: 16px;
      margin: 0 0 62px 0;
    }
`;

export const BookDetailInfo = styled.div`
  display: flex;
  column-gap: 72px;
    @media screen and (max-width: 770px) {
      column-gap: 33px;
      max-width: 305px;
    }
`;

export const BookDetailInfoLeft = styled(BookDetailInfo)`
`;

export const BookDetailInfoRight = styled(BookDetailInfo)`
`;

export const BookDetailListTitleItem = styled.li`
  @media screen and (max-width: 770px) {
    margin: 0 0 17px 0;
  }
`;

export const BookDetailList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
    li{
      max-width: 445px;
      font-size: 16px;
      line-height: 24px;
        @media screen and (max-width: 770px) {
          font-size: 14px;
          line-height: 18px;
        }
        @media screen and (max-width: 325px) {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
        }
     }
`;

export const BookDetailListTitle = styled(BookDetailList)`
  li{
    color: #A7A7A7;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
      @media screen and (max-width: 770px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 325px) {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
      }
    }
`;

export const ReviewsContainer = styled.div`
position: relative;
  span{
   font-size: 14px;
   line-height: 24px;
   color: #A7A7A7;
  }
`;

export const ReviewBox = styled.div`
  margin: 0 0 13px 0;
    @media screen and (max-width: 770px) {
      >div:last-child{
      margin: 60px 0 0 0;
      }
    }
    @media screen and (max-width: 325px) {
      margin: 0;
    }
    &.close{
      overflow: hidden;
      height: 0;
    }
`;

export const AccordionButton = styled.button`
  cursor:pointer;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 10px;
  left: 126px;
  background-color: white;
    ::after,
    ::before{
      content: '';
      display: block;
      width: 10px;
      height: 2px;
      position: absolute;
       background: #363636;
    }
    ::after{
      top: 3px;
      left: -8px;
      transform: rotate(-45deg);
    }
    ::before{
      top: 3px;
      left: -15px;
      transform: rotate(45deg);
    }
  &.open{
    :after{
      transform: rotate(45deg);
    }
    ::before{
      transform: rotate(-45deg);
    }
  }
`