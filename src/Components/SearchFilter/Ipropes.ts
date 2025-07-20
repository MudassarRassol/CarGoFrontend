export interface ISearchFilter {
    onFilterPress?: () => void;
}

export interface IFilterProps {
  visible: boolean;
  setVisible: (e: any) => void;
//   children: JSX.Element;
}