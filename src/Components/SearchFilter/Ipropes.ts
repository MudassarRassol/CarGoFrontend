export interface ISearchFilter {
    onFilterPress?: () => void;
    filter? : boolean
}

export interface IFilterProps {
  visible: boolean;
  setVisible: (e: any) => void;
//   children: JSX.Element;
}