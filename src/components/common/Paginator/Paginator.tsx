import { SpanPageCount } from "../../Users/Users.styled";

type PaginatorPropsType = {
  // users: Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  // followingInProgress: number[];
  // follow: (id: number) => void;
  // unFollow: (id: number) => void;
  onPageChanged: (pageNumber: number) => void;
};
export const Paginator = ({
  currentPage,
  onPageChanged,
  pageSize,
  totalUsersCount,
}: PaginatorPropsType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <SpanPageCount
            key={p}
            className={currentPage === p ? "selected" : ""}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </SpanPageCount>
        );
      })}
    </div>
  );
};
