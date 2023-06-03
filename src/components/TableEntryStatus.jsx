import Select from "react-select";

export default function TableEntryStatus() {
  return (
    <div
      className="container__main__content__listing__header__left__filter"
      style={{ marginBottom: 0 }}
    >
      <Select
        placeholder="Active"
        options={[
          {
            value: "Active",
            label: "Active",
          },
          {
            value: "Deactive",
            label: "Deactive",
          },
        ]}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary75: "#2a5e59",
            primary25: "#2a5e595e",
            primary50: "#2a5e595e",
            primary: "#2a5e59",
          },
        })}
      />
    </div>
  );
}
