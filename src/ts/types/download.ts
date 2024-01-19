export type TDataItem = {
  content: string;
  cellStyle: TCellStyle;
};

type TCellStyle = {
  paddingLeft?: number;
  color?: string;
  weight?: string | number;
  fill?: string;
};
