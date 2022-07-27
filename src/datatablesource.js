export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "data:image/png;base64,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"
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "",
  },
];

export const roomColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "title",
    headerName: "Title",
    width: 238,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
