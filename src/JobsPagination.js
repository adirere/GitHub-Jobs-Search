import React from "react";
import { PaginationItem, Pagination } from "@material-ui/lab/";
import { Button } from "@material-ui/core";

export default function JobsPagination({ page, setPage, hasNextPage }) {
  const ajustPage = amount => {
    setPage(prevPage => prevPage + amount);
  };

  return (
    <div style={{ display: "flexbox" }}>
      {page !== 1 && (
        <PaginationItem
          type="previous"
          color="primary"
          onClick={() => ajustPage(-1)}
        />
      )}
      {page !== 1 && (
        <PaginationItem page={1} type="page" onClick={() => setPage(1)} />
      )}
      {page > 2 && (
        <Button size="small" variant="text" onClick={() => ajustPage(-1)}>
          <PaginationItem
            shape="rounded"
            type="start-ellipsis"
            onClick={() => ajustPage(-1)}
          />
        </Button>
      )}
      {page > 2 && (
        <PaginationItem page={page - 1} type="page" color="primary" />
      )}
      <PaginationItem page={page} type="page" color="primary" selected />
      {hasNextPage && (
        <PaginationItem
          page={page + 1}
          type="page"
          color="primary"
          onClick={() => ajustPage(1)}
        />
      )}
      {hasNextPage && (
        <PaginationItem
          type="next"
          color="primary"
          onClick={() => ajustPage(1)}
        />
      )}
    </div>
  );
}
