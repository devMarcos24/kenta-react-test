import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { PageTitle, PageTitleButton, PageTitleContainer, BackButtonImg, TitleContainer, ButtonsContainer } from "./styles";
import backButton from '../../assets/backbutton.png'
import { cleanToChangeItem } from '../../store/modules/coffee/actions';

type IHeaderProps = {
  title: string;
  buttonTitle: string;
  buttonFunction?: () => any;
  excludeButtonFunction?: () => any;
  navigateTo: "new-coffee" | "/";
}

export const HeaderComponent: React.FC<IHeaderProps> = ({ title, buttonTitle, buttonFunction, excludeButtonFunction, navigateTo }) => {
  const coffees = useSelector((state: any) => state.coffees)
  const dispatch = useDispatch()

  return (
    <PageTitleContainer>
      <TitleContainer>
        {title.toLocaleLowerCase() !== "cafés" && (
          <Link onClick={() => dispatch(cleanToChangeItem())} to={navigateTo}>
            <BackButtonImg src={backButton} />
          </Link>)}
        <PageTitle>{title}</PageTitle>
      </TitleContainer>
      <ButtonsContainer>
        {title.toLocaleLowerCase() !== "cafés" && coffees.toChangeOrExclude &&
          (<Link onClick={excludeButtonFunction} to={navigateTo}>
            <PageTitleButton>
              Excluir
            </PageTitleButton>
          </Link>)}
        <Link onClick={buttonFunction} to={navigateTo}>
          <PageTitleButton>
            {buttonTitle}
          </PageTitleButton>
        </Link>
      </ButtonsContainer>
    </PageTitleContainer >
  )
}