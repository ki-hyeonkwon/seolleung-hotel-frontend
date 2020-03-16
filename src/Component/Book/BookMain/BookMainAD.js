import React, { Component, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const BookMainAD = () => {
  return (
    <BookMainADBox>
      <AdHeader>
        <HeaderContent>Offer</HeaderContent>
        <FindOut>Find out more</FindOut>
      </AdHeader>
      <MainAdBox>
        <MainAdUl>
          <MainLi>
            <ImgBox></ImgBox>
            <DetailTextBox>
              <PromotionData>2020.02.20 ~ 2020.03.15</PromotionData>
              <PromotionTitle>피트니스센터 가입 프로모션</PromotionTitle>
              <PromotionDesc>
                리노베이션을 통해 한층 업그레이드된 시설과 함께 새로워진 SELECT
                MEMBERSHIP만의 특전을 만나보십시오.
              </PromotionDesc>
              <ViewMore>View More</ViewMore>
            </DetailTextBox>
          </MainLi>
        </MainAdUl>
      </MainAdBox>
    </BookMainADBox>
  );
};
export default BookMainAD;

const BookMainADBox = styled.div`
  height: 465px;
  width: 80%;
  margin-top: 88px;
  margin-bottom: 88px;
`;

const AdHeader = styled.div`
  width: 100%;
  height: 103px;
`;

const HeaderContent = styled.h3`
  height: 30px;
  width: 100%;
  display: block;
  margin-bottom: 19px;
  font-family: "MaisonNeue-Light";
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #1d212a;
  font-weight: 200;
`;

const FindOut = styled.span`
  font-family: "MaisonNeue-Light";
  font-size: 16px;
  font-weight: 100;
  line-height: 1;
  color: rgb(166, 129, 100);
  cursor: pointer;
`;

const MainAdBox = styled.div`
  width: 100%;
`;

const MainAdUl = styled.ul`
  display: flex;
  list-style: none;
`;

const MainLi = styled.li`
  width: 340px;
  overflow: hidden;
`;

const ImgBox = styled.div`
  background-image: url("https://www.lahanhotels.com//upfile/images/offer/bbe79709-b0ca-4fbc-add5-612bfa8faca1.jpg");
  background-position: center center;
  width: 100%;
  height: 240px;
`;

const DetailTextBox = styled.div`
  position: relative;
  padding: 28px 0px 0;
  height: 230px;
  box-sizing: border-box;
`;

const PromotionData = styled.span`
  font-size: 13px;
  line-height: 1.16;
  font-family: "MaisonNeue-Light";
  font-weight: 200;
`;

const PromotionTitle = styled.strong`
  overflow: hidden;
  display: block;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #1d212a;
  margin: 23px 0 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PromotionDesc = styled.p`
  font-size: 14px;
  line-height: 1.71;
  max-height: 66px;
  color: #756963;
  overflow: hidden;
  width: 100%;
  margin-top: 10px;
  text-overflow: ellipsis;
  box-orient: vertical;
  line-clamp: 3;
  white-space: normal;
  word-break: keep-all;
`;

const ViewMore = styled.span`
  display: inline-block;
  position: relative;
  font-size: 14px;
  color: #a68164;
  font-family: "MaisonNeue-Light";
  margin-top: 20px;
  &:hover {
    color: #a68164;
  }

  &:after {
    content: "";
    position: absolute;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: #a68164;
    transition: 0.3s width;
  }
  &:hover:after {
    transition: 0.3s width;
    width: 100%;
  }
`;
