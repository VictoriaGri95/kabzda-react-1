

type ItemType = {
  title: string,
  value: any,
}

type SelectProps = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[]
}

export const Select = (props: SelectProps) => {
  return (
    <div>
      <div>{}</div>
      {props.items.map((item, index: number) => {
        return (
          <div key={index}>
            {item.title}
          </div>
        )
      })}
    </div>
  );
};

