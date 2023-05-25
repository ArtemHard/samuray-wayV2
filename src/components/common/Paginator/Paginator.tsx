import { useState } from "react";
import { SpanPageCount } from "../../Users/Users.styled";
import styled, { css } from "styled-components";

type PaginatorPropsType = {
  // users: Array<UsersType>;
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize: number;
};
export const Paginator = ({
  currentPage,
  onPageChanged,
  pageSize,
  totalItemsCount,
  portionSize,
}: PaginatorPropsType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize); //portionSize-получаем из пропс
  //узнаем сколько порций у нас получится
  let [portionNumber, setPortionNumber] = useState(1);
  //здесь хранится номер порции
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  //левая граница порции
  let rightPortionPageNumber = portionNumber * portionSize;
  //правая граница порции
  return (
    <div>
      <div>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            prev
          </button>
        )}
        {/*левая кнопка prev, которая появляется, когда есть куда возвращаться*/}
        {pages
          .filter(
            (f) => f >= leftPortionPageNumber && f <= rightPortionPageNumber
          )
          //раньше заливали все номера, чейчас делим на порции
          .map(
            (p) => (
              <PageSpanpaginator
                key={p}
                boldNumber={currentPage === p}
                onClick={(event) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </PageSpanpaginator>
            )

            // <span className={
            // currentPage === p ? styles.selectedPage : styles.pages}
            // onClick={(event) => {onPageChanged(p)}}>{p}</span>
          )}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            next
          </button>
        )}
        {/*правая кнопка next, которая исчезает, когда есть куда идти вперед*/}
      </div>
    </div>
  );
};

type boldNumberType = {
  boldNumber: boolean;
};

const PageSpanpaginator = styled.span<boldNumberType>`
  cursor: pointer;
  ${(props) =>
    props.boldNumber &&
    css`
      font-weight: bold;
      font-size: 20px;
    `}
`;

// <div>
//   {portionNumber > 1 &&
//   {pages.map((p) => {
//     return (
//       <SpanPageCount
//         key={p}
//         className={currentPage === p ? "selected" : ""}
//         onClick={() => onPageChanged(p)}
//       >
//         {p}
//       </SpanPageCount>
//     );
//   })}}
// </div>
